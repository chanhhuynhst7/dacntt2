import React, { useEffect, useState, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Breadcrumb, Layout, Menu } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
        <h2>Danh sách sản phẩm</h2>
      </Header>

      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item href="/homepage">Home</Breadcrumb.Item>
        <Breadcrumb.Item>List Items</Breadcrumb.Item>
      </Breadcrumb>
      <container>
        <div className="buttonItems">
          <Link to="/itemscreation">
            <Button
              type="primary"
              style={{
                background: "#0B5ED7",
                borderColor: "white",
                color: "white",
              }}
            >
              Thêm Sản Phẩm
            </Button>
          </Link>
        </div>
        <h5>Tìm kiếm sản phẩm</h5>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên Sản Phẩm</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Mã Sản Phẩm</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="formLabel">Nhà Sản Xuất</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
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

        <div>
          <table class="table table-success table-striped" border="2">
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
                  <td>{s.tensanpham}</td>
                  <td>{s.masanpham}</td>
                  <td>{s.soluong}</td>
                  <td>{s.nhasanxuat}</td>
                  <td>{s.loaisanpham}</td>
                  <td>{s.mausac}</td>
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
