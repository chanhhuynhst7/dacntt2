import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
const { Header, Footer, Sider, Content } = Layout;

export const MyTransports = () => {
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
      <Header
        style={{
          padding: 0,
          background: "#ffffff",
          border: "grove",
        }}
      >
        <h2>Danh sách Phương Tiện</h2>
      </Header>

      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item href="/homepage">Home</Breadcrumb.Item>
        <Breadcrumb.Item>List Vehicle</Breadcrumb.Item>
      </Breadcrumb>
      <container>
        <div className="buttonItems">
          <Link to="/mytransportscreation">
            <Button
              style={{
                background: "#0B5ED7",
                borderColor: "white",
                color: "white",
              }}
            >
              Thêm Phương Tiện
            </Button>
          </Link>
          <h5>Tìm Kiếm Phương Tiện</h5>
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên Phương Tiện</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">ID Phương Tiện</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="formLabel">Đối Tác</Form.Label>
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
          <table class="table table-success table-striped" border="2" >
            <thead class="table-dark">
              <tr>
                <th scope="col">ID Phương Tiện</th>
                <th scope="col">Loại Phương Tiện</th>
                <th scope="col">Đối Tác</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {pt.map((s) => (
                <tr>
                  <td>{s.idphuongtien}</td>
                  <td>{s.loaiphuongtien}</td>
                  <td>{s.doitac}</td>
                  <td>
                    <Link to="">
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
}