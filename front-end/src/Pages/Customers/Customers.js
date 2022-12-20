import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
//import Button from "react-bootstrap/Button";\
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Customers.css";
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
        {" "}
        <Navbar>
          <Container>
            <Navbar.Brand>
              <h3>List</h3>
            </Navbar.Brand>
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <hr />
              <Breadcrumb.Item>
                <Link to="/home">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Danh Sách đối tác</Breadcrumb.Item>
            </Breadcrumb>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Welcome:{" "}
                <a href="#login">
                 Administrator
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
      <container>
        <div className="buttonItems">
          <Link to="">
            <Button
              style={{
                background: "#0B5ED7",
                borderColor: "white",
                color: "white",
              }}
            >
              Xuất đối tác
            </Button>
          </Link>
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
            <h5>Danh sách Đối Tác</h5>
          </Link>
        </div>

        <Form>
          <Row className="Row2">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên Đối Tác</Form.Label>
              <Form.Control className="fc3 formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
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

        <div className="tas3 mb-3">
          <table
            class="table table-success table-striped table-bordered"
            border="2"
          >
            <thead class="table-dark">
              <tr>
                <th scope="col">Tên Đối Tác</th>
                <th scope="col">Mã Đối Tác</th>
                <th scope="col">Email</th>
                <th scope="col">Địa Chỉ</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {dt.map((s) => (
                <tr>
                  <td>{s.name}</td>
                  <td>{s.code}</td>
                  <td>{s.email}</td>
                  <td>{s.located}</td>
                  <td>{s.phone}</td>
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
