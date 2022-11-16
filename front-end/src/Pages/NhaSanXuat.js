import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
//import "./DoiTac.less";
import { CreateaNhaSanXuat } from "../Components/CreateaNhaSanXuat";
import { Link } from "react-router-dom";

export const NhaSanXuat = () => {
  const [size, setSize] = useState("large");

  const [sx, setSX] = useState(null);
  const url = "/api/nhasanxuat";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSX(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!sx) return null;
  console.log(sx);

  return (
    <>
      <container>
        <div className="buttonItems">
          <Link to="/createNhaSanXuat">
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
          <table border="1" width="100%" >
          <thead className="main">
            <tr>
              <th>Tên Nhà Sản Xuất</th>
              <th>Email</th>
              <th>Địa Chỉ</th>
              <th>Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            {sx.map((s) => (
              <tr>
                <td>{s.tennhasanxuat}</td>
                <td>{s.email}</td>
                <td>{s.diachi}</td>
                <td>
                  <Link to={`/updateNSX/${s._id}`}>
                    <td>
                      <button>Update</button>
                    </td>
                  </Link>
                  <button>Delete</button>
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
