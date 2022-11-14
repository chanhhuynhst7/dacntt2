import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
//import "./DoiTac.less";
import { CreateDoitac } from "../Components/CreateDoitac";
import { renderMatches } from "react-router-dom";

export const DoiTac = () => {
    const [size, setSize] = useState("large");

    const [dt, setDT] = useState(null);
    const url = "/api/doitac";
    useEffect(() => { 
      axios
        .get(url)
        .then((response) => {
          setDT(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    if (!dt) return null;
    console.log(dt);
    
      
  
    
  
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
                <th>Tên Đối Tác</th>
                <th>Email</th>
                <th>Địa Chỉ</th>
                <th>Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {dt.map((s) => (
                <tr>
                  <td>{s.tendoitac}</td>
                  <td>{s.email}</td>
                  <td>{s.diachi}</td>
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
          <h2>Thêm Đối Tác</h2>
        </container>
        <CreateDoitac />
      </>
    );
  
  };

