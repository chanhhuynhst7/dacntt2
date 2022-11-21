import React, { useEffect, useState, Fragment } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

export const XuatDonHang = () => {
  const [size, setSize] = useState("large");
  //get sản phẩm
  const [xdh, setXDH] = useState(null);
  const url = "/api/xuatdonhang";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setXDH(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!xdh) return null;
  console.log(xdh);
  return (
    <>
      <container>
        <div className="buttonItems">
          <Link to="/createXuatdonhang">
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
              {xdh.map((s) => (
                <tr>
                  <td>{s.iddonhang}</td>
                  <td>
                    <Link to={`/updateNDH/${s._id}`}>
                      <td>
                        <button>Update</button>
                      </td>
                    </Link>
                    {/* delete đơn hàng chưa làm xong , delete được nhưng sai id */}
                    <button>Delete</button>
                    {/* view đơn hàng chưa làm xong ,view được nhưng view all*/}
                    <Link to={`/viewXDH/${s._id}`}>
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
