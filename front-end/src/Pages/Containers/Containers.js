import React, { useEffect, useState, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Breadcrumb, Layout } from "antd";
import "./Containers.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const { Header, Footer, Sider, Content } = Layout;

export const Containers = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const [ct, setCT] = useState(null);
  const url = "/api/container";
  const [addCont, setAddCont] = useState({
    codecontainer: "",
    type: "",
    length: "",
    width: "",
    height: "",
    volume: "",
    host: "",
    color: "",
  });

  const handleAddCont = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addCont };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddCont(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/container/create", {
        codecontainer: addCont.codecontainer,
        type: addCont.type,
        length: addCont.length,
        width: addCont.width,
        height: addCont.height,
        volume: addCont.volume,
        host: addCont.host,
        color: addCont.color,
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
        setCT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isSubmit]);

  if (!ct) return null;
  console.log(ct);

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
              <Breadcrumb.Item>Danh Sách Container</Breadcrumb.Item>
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
        <div className="buttonContainer buttonItems">
          <Button
            style={{
              background: "#0B5ED7",
              borderColor: "white",
              color: "white",
            }}
            onClick={handleShow}
          >
            Thêm Container
          </Button>
          <Modal show={show} onHide={handleClose}>
            <div className="bgContainer">
              <div className="tfContainer">
                <i className="nfContainer">
                  <h1>Create Containers</h1>
                </i>
                <form className="formContainer" onSubmit={handleAddFormSubmit}>
                  <div className="mb-2 row">
                    <label for="codecontainer" class="col-md p-2">
                      <h6>
                        <i>Mã Container</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="codecontainer"
                        name="codecontainer"
                        type="text"
                        placeholder="Enter Container's Code"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label for="type" class="col-sm ">
                      <h6>
                        <i>Loại Container</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="type"
                        name="type"
                        type="text"
                        placeholder="Enter Container's Type"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="length" class="col-md p-2">
                      <h6>
                        <i>Chiều Dài</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="length"
                        name="length"
                        type="text"
                        placeholder="Enter Container's Width"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="width" class="col-md p-2">
                      <h6>
                        <i>Chiều Rộng</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="width"
                        name="width"
                        type="text"
                        placeholder="Enter Container's Width"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="height" class="col-md p-2">
                      <h6>
                        <i>Chiều Cao</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="height"
                        name="height"
                        type="text"
                        placeholder="Enter Container's Height"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="volume" class="col-md p-2">
                      <h6>
                        <i>Thể Tích</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="volume"
                        name="volume"
                        type="text"
                        placeholder="Enter Container's Volume"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="host" class="col-md p-2">
                      <h6>
                        <i>Chủ Sở Hữu</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="host"
                        name="host"
                        type="text"
                        placeholder="Enter Container's Host"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="color" class="col-md p-2">
                      <h6>
                        <i>Màu Sắc</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="color"
                        name="color"
                        type="text"
                        placeholder="Enter Container's Color"
                        className="odContainer form-control mb-3 "
                        onChange={handleAddCont}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="crtContainer btn btn-outline-secondary"
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
          <Row className="containerRow Row">
            <h3>Danh sách Container</h3>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Mã Container</Form.Label>
              <Form.Control
                className="fcContainer formControl"
                placeholder="..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Loại Container</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label className="formLabel">Chủ Sở Hữu</Form.Label>
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

        <div className="tableContainer mb-3">
          <table
            class="table table-success table-striped table-bordered"
            border="2"
          >
            <thead class="table-dark">
              <tr>
                <th scope="col">Mã Container</th>
                <th scope="col">Loại Container</th>
                <th scope="col">Chiều Dài (m)</th>
                <th scope="col">Chiều Rộng (m)</th>
                <th scope="col">Chiều Cao (m)</th>
                <th scope="col">Thể Tích (m3)</th>
                <th scope="col">Chủ Sở Hữu</th>
                <th scope="col">Màu Sắc</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {ct.map((s) => (
                <tr>
                  <td>{s.codecontainer}</td>
                  <td>{s.type}</td>
                  <td>{s.length}</td>
                  <td>{s.width}</td>
                  <td>{s.height}</td>
                  <td>{s.volume}</td>
                  <td>{s.host}</td>
                  <td>{s.color}</td>
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
