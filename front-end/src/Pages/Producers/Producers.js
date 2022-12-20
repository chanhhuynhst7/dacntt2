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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [sx, setSX] = useState(null);
  const url = "/api/nhasanxuat";

  const [addNhaSanXuat, setAddNhaSanXuat] = useState({
    name: "",
    email: "",
    located: "",
    phone: "",
    taxcode: "",
  });
  const handleAddNhaSanXuat = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addNhaSanXuat };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddNhaSanXuat(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/nhasanxuat", {
        name: addNhaSanXuat.name,
        email: addNhaSanXuat.email,
        located: addNhaSanXuat.located,
        phone: addNhaSanXuat.located,
        taxcode: addNhaSanXuat.taxcode,
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

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setSX(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isSubmit]);

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
        <Button
          style={{
            background: "#0B5ED7",
            borderColor: "white",
            color: "white",
          }}
          onClick={handleShow}
        >
          Create
        </Button>
        <Modal show={show} onHide={handleClose}>
          <div className="bgproducer">
            <div className="tfproducer">
              <i className="nfproducer">
                <h1>Create Producers</h1>
              </i>
              <form className="formproducer" onSubmit={handleAddFormSubmit}>
                <div className="mb-2 row">
                  <label for="name" class="col-md p-2">
                    <h6>
                      <i>Tên Nhà Sản Xuất</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter Producer's Name"
                      className="odproducer form-control mb-3 "
                      onChange={handleAddNhaSanXuat}
                    ></input>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label for="email" class="col-sm ">
                    <h6>
                      <i>Email</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Enter Email"
                      className="odproducer form-control mb-3 "
                      onChange={handleAddNhaSanXuat}
                    ></input>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="located" class="col-md p-2">
                    <h6>
                      <i>Địa chỉ</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="located"
                      name="located"
                      type="located"
                      placeholder="Enter Located"
                      className="odproducer form-control mb-3 "
                      onChange={handleAddNhaSanXuat}
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
                      className="odproducer form-control mb-3 "
                      onChange={handleAddNhaSanXuat}
                    ></input>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="taxcode" class="col-md p-2">
                    <h6>
                      <i>Mã Số Thuế</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="taxcode"
                      name="taxcode"
                      type="text"
                      placeholder="Enter Tax Code"
                      className="odproducer form-control mb-3 "
                      onChange={handleAddNhaSanXuat}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="crtproducer btn btn-outline-secondary"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
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
