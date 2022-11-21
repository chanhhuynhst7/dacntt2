import React, { useEffect, useState, Fragment } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

import "./NhapDonHang.css";

export const NhapDonHang = () => {
  const [size, setSize] = useState("large");
  //get sản phẩm
  const [ndh, setNDH] = useState(null);
  const url = "/api/nhapdonhang";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setNDH(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!ndh) return null;
  console.log(ndh);

  const onDelete = (s) => {
    axios.delete(`api/nhapdonhang/${s.iddonhang}`).then(() => {
      getData();
    });
    console.log("Delete Thành Công");
  };

  const getData = () => {
    axios.get(url).then((getData) => {
      setNDH(getData.data);
    });
  };
  
  return (
    <>
      <container>
        <div className="buttonItems">
          <Link to="/createNhapDonHang">
            <Button type="primary" shape="round" icon={<PlusOutlined />}>
              Thêm
            </Button>
          </Link>
        </div>
        <div>
          <table border="1" width="100%">
            <thead className="main">
              <tr>
                <th>Mã Đơn Hàng</th>
                <th>Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {ndh.map((s) => (
                <tr>
                  <td>{s.iddonhang}</td>
                  <td>
                    <Link to={`/updateNDH/${s._id}`}>
                      <td>
                        <button>Update</button>
                      </td>
                    </Link>
                    {/* delete đơn hàng chưa làm xong , delete được nhưng sai id */}
                    <button onClick={onDelete}>Delete</button>
                    {/* view đơn hàng chưa làm xong ,view được nhưng view all*/}
                    <Link to={`/viewNDH/${s._id}`}>
                      <td>
                        <button>View</button>
                      </td>
                    </Link>
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
