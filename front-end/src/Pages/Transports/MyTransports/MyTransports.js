import React, { useEffect, useState } from "react";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import "./MyTransports.css";
const { Header, Footer, Sider, Content } = Layout;

export const MyTransports = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);

  const [addPhuongTien, setAddPhuongTien] = useState({
    codevehicle: "",
    type: "",
    host: "",
  });
  const handleAddPhuongTien = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addPhuongTien };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddPhuongTien(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/phuongtien", {
        codevehicle: addPhuongTien.codevehicle,
        type: addPhuongTien.type,
        host: addPhuongTien.host,
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
  }, [isSubmit]);

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
        <Navbar>
          <Container>
            <Navbar.Brand>
              <h3>List view</h3>
            </Navbar.Brand>
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
       
              <Breadcrumb.Item>
                <Link to="/home">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Danh S??ch NSX</Breadcrumb.Item>
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
        <div className="buttonTrans buttonItems">
          <Button
            style={{
              background: "#0B5ED7",
              borderColor: "white",
              color: "white",
            }}
            onClick={handleShow}
          >
            Th??m Ph????ng Ti???n
          </Button>
          <Modal show={show} onHide={handleClose}>
            <div className="bgtransports">
              <div className="tftransports">
                <i className="nftransports">
                  <h1>Create Transports</h1>
                </i>
                <form className="formtransports" onSubmit={handleAddFormSubmit}>
                  <div className="mb-2 row">
                    <label for="codevehicle" class="col-md p-2">
                      <h6>
                        <i>M?? Ph????ng Ti???n</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="codevehicle"
                        name="codevehicle"
                        type="text"
                        placeholder="Enter Vehicle's Code"
                        className="odtransports form-control mb-3 "
                        onChange={handleAddPhuongTien}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-2 row">
                    <label for="type" class="col-sm ">
                      <h6>
                        <i>Lo???i Ph????ng Ti???n</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="type"
                        name="type"
                        type="text"
                        placeholder="Enter Type"
                        className="odtransports form-control mb-3 "
                        onChange={handleAddPhuongTien}
                      ></input>
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <label for="host" class="col-md p-2">
                      <h6>
                        <i>Ch??? S??? H???u</i>
                      </h6>
                    </label>
                    <div class="col-sm">
                      <input
                        id="host"
                        name="host"
                        type="text"
                        placeholder="Enter Host"
                        className="odtransports form-control mb-3 "
                        onChange={handleAddPhuongTien}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="crttransports btn btn-outline-secondary"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
        <div></div>
        <Form>
          <Row className="transRow Row">
            <h5>T??m Ki???m Ph????ng Ti???n</h5>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="formLabel">T??n Ph????ng Ti???n</Form.Label>
              <Form.Control className="formControl" placeholder="..." />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="formLabel">ID Ph????ng Ti???n</Form.Label>
              <Form.Control placeholder="..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className="formLabel">?????i T??c</Form.Label>
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

        <div className="tableTrans mb-3">
          <table class="table table-success table-striped" border="2">
            <thead class="table-dark">
              <tr>
                <th scope="col">M?? Ph????ng Ti???n</th>
                <th scope="col">Lo???i Ph????ng Ti???n</th>
                <th scope="col">?????i T??c</th>
                <th scope="col">Ch???c N??ng</th>
              </tr>
            </thead>
            <tbody>
              {pt.map((s) => (
                <tr>
                  <td>{s.codevehicle}</td>
                  <td>{s.type}</td>
                  <td>{s.host}</td>
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
};
