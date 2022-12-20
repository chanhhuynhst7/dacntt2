import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Producers.css";
const { Header, Footer, Sider, Content } = Layout;

export const Producers = () => {
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
      <Header
        style={{
          padding: 0,
          background: "#ffffff",
          border: "grove",
        }}
      >
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
              <Breadcrumb.Item>Danh Sách NSX</Breadcrumb.Item>
            </Breadcrumb>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Welcome: <a href="#login"> Administrator</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
      <div className="buttonItems">
        <Link to="">
          <Button
            style={{
              background: "#0B5ED7",
              borderColor: "white",
              color: "white",
            }}
          >
            Xuất Nhà Sản Xuất
          </Button>
        </Link>
        <Link to="/producerscreation">
          <Button
            style={{
              background: "#0B5ED7",
              borderColor: "white",
              color: "white",
            }}
          >
            Tạo Nhà Sản Xuất
          </Button>
        </Link>
      </div>
      <container>
        <Form>
          <Row className="Row">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên NSX</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword" class="ten">
              <Form.Label className="formLabel">Code</Form.Label>
              <Form.Control className="fc1 formControl" placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-1" controlId="formGridAddress1">
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control
                className="fc1 formControl"
                type="email"
                placeholder="..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label className="formLabel">Số điện thoại</Form.Label>
              <Form.Control className="fc1 formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label className="formLabel">Mã Số Thuế</Form.Label>
              <Form.Control className="fc1 formControl" placeholder="..." />
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
        <br />

        <div className="tas1 mb-3">
          <table
            class="table table-success table-striped table-bordered"
            border="2"
          >
            <thead class="table-dark">
              <tr>
                <th scope="col">Tên Nhà Sản Xuất</th>
                <th scope="col">Email</th>
                <th scope="col">Địa Chỉ</th>
                <th scope="col">Số Điện Thoại</th>
                <th scope="col">Mã Số Thuế</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {sx.map((s) => (
                <tr>
                  <td>{s.name}</td>
                  <td>{s.email}</td>
                  <td>{s.located}</td>
                  <td>{s.phone}</td>
                  <td>{s.taxcode}</td>
                  <td>
                    <Link to={`/updateproducers/${s._id}`}>
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
