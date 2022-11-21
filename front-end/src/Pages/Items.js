import React, { useEffect, useState, Fragment } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import "./Items.less";

const Items = () => {
  const [size, setSize] = useState("large");
  //get sản phẩm
  const [sp, setSP] = useState(null);
  const url = "/api/products";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSP(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!sp) return null;
  console.log(sp);
  //tới đây

  //delete sản phẩm
  const onDelete = (s) => {
    axios.delete(`api/products/${s._id}`).then(() => {
      getData();
    });

    console.log({message:`day la ${s._id}`})
  };

  const getData = () => {
    axios.get(url).then((getData) => {
      setSP(getData.data);
    });
  };
  

  //tới đây
  return (
    <>
      <container>
        <div className="buttonItems">
          <Link to="/createItem">
            <Button
              type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={size}
            >
              Thêm
            </Button>
          </Link>
        </div>
        <div>
          <table border="1" width="100%">
            <thead className="main">
              <tr>
                <th>Tên Sản Phẩm</th>
                <th>Số Lượng</th>
                <th>Nhà Sản xuất</th>
                <th>Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {sp.map((s) => (
                <tr>
                  <td>{s.tensanpham}</td>
                  <td>{s.soluong}</td>
                  <td>{s.nhasanxuat}</td>
                  <td>
                    <Link to={`/updateItem/${s._id}`}>
                      <td>
                        <button>Update</button>
                      </td>
                    </Link>
                    <button onClick={onDelete}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </container>
    </>
  );
};
export default Items;
