import React, { useEffect, useState, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Breadcrumb, Layout } from "antd";
import "./Item.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const { Header, Footer, Sider, Content } = Layout;

export const Items = () => {
  //get sản phẩm
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
  //tới đây

  //delete sản phẩm
  const onDelete = (s) => {
    axios.delete(`api/products/${s._id}`).then(() => {
      getData();
    });

    console.log({ message: `day la ${s._id}` });
  };

  const getData = () => {
    axios.get(url).then((getData) => {
      setSP(getData.data);
    });
  };

  //tới đây
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
              <h3>List Items</h3>
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
              <Breadcrumb.Item>List Items</Breadcrumb.Item>
            </Breadcrumb>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Welcome: <a href="#login">Administrator</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
      <container>
        <div className="buttonItems">
          <Link to="/itemscreation">
            <Button
              type="primary"
              className="btn btn-primary"
            >
              Create
            </Button>
          </Link>
        </div>

        <Form>
          <Row className="Row">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên Sản Phẩm</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Mã Sản Phẩm</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label className="formLabel">Nhà Sản Xuất</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label className="formLabel">Loại Sản Phẩm</Form.Label>
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

        <div className="mb-3">
          <table
            class="table table-success table-striped table-bordered"
            border="2"
          >
            <thead class="table-dark">
              <tr>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Mã Sản Phẩm</th>
                <th scope="col">Số Lượng</th>
                <th scope="col">Nhà Sản xuất</th>
                <th scope="col">Loại sản phẩm</th>
                <th scope="col">Màu sắc</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {sp.map((s) => (
                <tr>
                  <td>{s.name}</td>
                  <td>{s.code}</td>
                  <td>{s.amount}</td>
                  <td>{s.producer}</td>
                  <td>{s.type}</td>
                  <td>{s.color}</td>
                  <td>
                    <Link to={`/updateitems/${s._id}`}>
                      <td>
                        <button>Update</button>
                      </td>
                    </Link>
                    <button onClick={onDelete}>Delete</button>
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
