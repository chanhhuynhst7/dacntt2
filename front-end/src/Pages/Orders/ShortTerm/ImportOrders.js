import React, { useEffect, useState, Fragment } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

export const ImportOrders = () => {

  
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
              </tbody>
            </table>
          </div>
        </container>
      </>
    );
}
