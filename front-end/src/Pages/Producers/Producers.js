import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import axios from "axios";
import { Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
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
        <h2>Danh sách Nhà sản xuất</h2>
      </Header>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item href="/homepage">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Danh Sách NSX</Breadcrumb.Item>
      </Breadcrumb>
      <container>
       
        <div className="buttonItems">
          <Link to="/producerscreation">
            <Button
              style={{
                background: "#0B5ED7",
                borderColor: "white",
                color: "white",
              }}
              /*type="primary"
              shape="round"
              icon={<PlusOutlined />}
              size={size}*/
            >
              Tạo Nhà Sản Xuất
            </Button>
          </Link>
        </div>
        <h5>Tìm kiếm Nhà Sản Xuất</h5>

        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên NSX</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Code</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="formLabel">Email</Form.Label>
              <Form.Control type="email" placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label className="formLabel">Số điện thoại</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label className="formLabel">Mã Số Thuế</Form.Label>
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
        <br />
        <div>
          <table class="table table-success table-striped" border="2">
            <thead class="table-dark">
              <tr>
                <th scope="col">Tên Nhà Sản Xuất</th>
                <th scope="col">Code</th>
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
                  <td>{s.tennhasanxuat}</td>
                  <td>{s.code}</td>
                  <td>{s.email}</td>
                  <td>{s.diachi}</td>
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
