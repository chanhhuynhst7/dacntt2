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
                    <Link to="">
                      <td>
                        <button>Update</button>
                      </td>
                    </Link>
                    <button>Delete</button>
                    <button>View</button>
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
