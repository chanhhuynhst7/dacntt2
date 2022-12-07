import React, { useEffect, useState, Fragment } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

export const ImportOrders = () => {
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
          <div className="he">  
            <h1>Danh sách Đơn Hàng Nhập</h1>
          </div>
          <div className="buttonItems">
            <Link to="/orderscreation">
              <Button type="primary" shape="round" icon={<PlusOutlined />}>
                Thêm
              </Button>
            </Link>
          </div>
          <div>
          <table class="table table-success table-striped" border="2">
              <thead class="table-dark">
                <tr>
                  <th scope="col">Mã Đơn Hàng</th>
                  <th scope="col">Chức Năng</th>
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
                      <Link to={`/viewimportorders/${s._id}`}>
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
}
