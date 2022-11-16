import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button} from "semantic-ui-react";
//import "./PhuongTien.less";
import { CreatePhuongTien } from "../Components/CreatePhuongTien";


export const PhuongTien = () => {
    const [size, setSize] = useState("large");

    const [pt, setPT] = useState(null);
    const url = "/api/phuongtien";
    useEffect(() => { 
      axios
        .get(url)
        .then((response) => {
          setPT(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    if (!pt) return null;
    console.log(pt);
    
      
  
    
  
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
                <th>ID Phương Tiện</th>
                <th>Loại Phương Tiện</th>
                <th>Đối Tác</th>
                <th>Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {pt.map((s) => (
                <tr>
                  <td>{s.idphuongtien}</td>
                  <td>{s.loaiphuongtien}</td>
                  <td>{s.doitac}</td>
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
          <h2>Thêm Phương Tiện</h2>
        </container>
        <CreatePhuongTien />
      </>
    );
}
