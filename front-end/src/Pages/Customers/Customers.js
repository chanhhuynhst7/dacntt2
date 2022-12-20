import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./Customers.css";
const { Header, Footer, Sider, Content } = Layout;

export const Customers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit,setIsSubmit] =useState(false);
  const [addCustomer, setAddCustomer] = useState({
    name: "",
    code: "",
    amount: "",
    producer: "",
    type: "",
    color: "",
  });
  const handleAddCustomer = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addCustomer };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddCustomer(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/doitac", {
        name: addCustomer.name,
        code: addCustomer.code,
        email: addCustomer.email,
        located: addCustomer.located,
        phone: addCustomer.phone,
      })
      .then((res) => {
        setIsSubmit(!isSubmit);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    Request();
  };

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
  }, [isSubmit]);

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
              <h3>List View</h3>
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
                Welcome: <a href="#login">Administrator</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Header>
      <container>
        <div className="buttonCus buttonItems">
          <Button
            style={{
              background: "#0B5ED7",
              borderColor: "white",
              color: "white",
            }}
            onClick={handleShow}
          >
            Thêm Đối Tác
          </Button>
          <Modal show={show} onHide={handleClose}>
            <div className="bgpcustomer">
              <div className="tfcustomer">
                <i className="nfcustomer">
                  <h1>Create Customers</h1>
                </i>
                <form className="formcustomer" onSubmit={handleAddFormSubmit}>
                  <div className="mb-2 row">
                    <label for="name" class="col-md p-2">
                      <h6>
                        <i>Tên Đối Tác</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Customer's Name"
                        className="odcustomer form-control mb-3 "
                        onChange={handleAddCustomer}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label for="code" class="col-sm ">
                      <h6>
                        <i>Mã Đối Tác</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="code"
                        name="code"
                        type="text"
                        placeholder="Enter Item Code"
                        className="odcustomer form-control mb-3 "
                        onChange={handleAddCustomer}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="email" class="col-md p-2">
                      <h6>
                        <i>Số Lượng</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter Email"
                        className="odcustomer form-control mb-3 "
                        onChange={handleAddCustomer}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="located" class="col-md p-2">
                      <h6>
                        <i>Địa Chỉ</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="located"
                        name="located"
                        type="text"
                        placeholder="Enter Located"
                        className="odcustomer form-control mb-3 "
                        onChange={handleAddCustomer}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="phone" class="col-md p-2">
                      <h6>
                        <i>Số Điện Thoại</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        placeholder="Enter Phone"
                        className="odcustomer form-control mb-3 "
                        onChange={handleAddCustomer}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="crtcustomer btn btn-outline-secondary"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
        <Form>
          <Row className="customerRow Row">
          <h3>Danh sách Đối Tác</h3>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Tên Đối Tác</Form.Label>
              <Form.Control className="fcCustomer formControl" placeholder="..." />
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

        <div className="tableCustomer mb-3">
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
