import React, { useEffect, useState, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Breadcrumb, Layout } from "antd";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Packages.css";
const { Header, Footer, Sider, Content } = Layout;
export const Packages = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const [pk, setPK] = useState([]);
  const url = "/api/package";
  const [addPackage, setAddPackage] = useState({
    codepackage: "",
  });

  const handleAddPackage = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addPackage };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddPackage(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/package/create", {
        codepackage: addPackage.codepackage,
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
        setPK(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isSubmit]);

  if (!pk) return null;
  console.log(pk);

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
              <Breadcrumb.Item>Danh Sách Package</Breadcrumb.Item>
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
        <div className="buttonPackage buttonItems">
          <Button
            style={{
              background: "#0B5ED7",
              borderColor: "white",
              color: "white",
            }}
            onClick={handleShow}
          >
            Thêm Package
          </Button>
          <Modal show={show} onHide={handleClose}>
            <div className="bgPackage">
              <div className="tfPackage">
                <i className="nfPackage">
                  <h1>Create Containers</h1>
                </i>
                <form className="formPackage" onSubmit={handleAddFormSubmit}>
                  <div className="mb-2 row">
                    <label for="codepackage" class="col-md p-2">
                      <h6>
                        <i>Mã Package</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="codepackage"
                        name="codepackage"
                        type="text"
                        placeholder="Enter Package's Code"
                        className="odPackage form-control mb-3 "
                        onChange={handleAddPackage}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="crtPackage btn btn-outline-secondary"
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
          <Row className="packageRow Row">
            <h3>Danh sách Package</h3>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">Mã Package</Form.Label>
              <Form.Control
                className="fcPackage formControl"
                placeholder="..."
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">Loading...</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label className="formLabel">Loading...</Form.Label>
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

        <div className="tablePackage mb-3">
          <table
            class="table table-success table-striped table-bordered"
            border="2"
          >
            <thead class="table-dark">
              <tr>
                <th scope="col">Mã Package</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {pk.map((s) => (
                <tr>
                  <td>{s.codepackage}</td>
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
