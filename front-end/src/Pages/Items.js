import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Items.less";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "./Items.less";
import { CreateItems } from "../Components/CreateItems";
import { renderMatches } from "react-router-dom";

const Items = () => {
  const [size, setSize] = useState("large");

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
  
    

  

  return (
    <>
      <container>
        <div className="buttonItems">
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            size={size}
            href="../create"
          >
            Thêm
          </Button>
        </div>
        <div>
          <thead>
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
                  <Button
                    type="primary"
                    shape="round"
                    icon={<DeleteOutlined />}
                    size={size}
                  >
                    Xóa
                  </Button>
                  <Button
                    type="primary"
                    shape="round"
                    icon={<EditOutlined />}
                    size={size}
                  >
                    Sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </container>
      <container>
        <h2>Thêm Sản Phẩm</h2>
      </container>
      <CreateItems />
    </>
  );

};
export default Items;
