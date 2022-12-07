import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const { Header, Footer, Sider, Content } = Layout;

export const Customers = () => {
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
      <Header
        style={{
          padding: 0,
          background: "#ffffff",
          border: "grove",
        }}
      >
        <h2>Danh sách Đối Tác</h2>
      </Header>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item href="/homepage">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Danh Sách Đối Tác</Breadcrumb.Item>
      </Breadcrumb>
      <container>
        <div className="buttonItems">
          <Link to="/customerscreation">
            <Button
              style={{
                background: "#0B5ED7",
                borderColor: "white",
                color: "white",
              }}
            >
              Thêm Đối Tác
            </Button>
          </Link>
        </div>
        <h5>Tìm kiếm Đối Tác</h5>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên Đối Tác</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="formLabel">Địa Chỉ</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <div class="form-group row">
              <label class="col-lg-3 col-form-label form-control-label"></label>
              <div class="col-lg-9">
                <input type="reset" class="btn btn-secondary" value="Refresh" />
                <input type="button" class="btn btn-primary" value="Search" />
              </div>
            </div>
          </Row>
        </Form>

        <div>
          <table class="table table-success table-striped" border="2">
            <thead class="table-dark">
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
                    <Link to={`/updatecustomers/${s._id}`}>
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
