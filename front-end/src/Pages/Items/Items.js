import React, { useEffect, useState, Fragment } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Breadcrumb, Layout } from "antd";
import "./Item.css";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const { Header, Footer, Sider, Content } = Layout;

export const Items = () => {
  //get sản phẩm
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit,setIsSubmit] =useState(false);
  
  const [sp, setSP] = useState(null);
  const url = "/api/products";
  const [addItem, setAddItem] = useState({
    nameproduct: "",
    codeproduct: "",
    producer :"",
    type :"",
    color:""
  });

  const handleAddItem = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addItem };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddItem(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/products/addItem", {
        nameproduct: addItem.nameproduct,
        codeproduct: addItem.codeproduct,
        producer: addItem.producer,
        type : addItem.type,
        color: addItem.color
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
        setSP(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isSubmit]);

  if (!sp) return null;
  console.log(sp);
 

 

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
        <div className="buttonItem buttonItems">
          <Button type="primary" className="btn btn-primary" onClick={handleShow}>
            Tạo Sản Phẩm
          </Button>
          
        </div>
        <Modal show={show} onHide={handleClose}>
          <div className="bgpitem">
            <div className="tfitem">
              <i className="nfitem">
                <h1>Create Items</h1>
              </i>
              <form className="formitem" onSubmit={handleAddFormSubmit}>
                <div className="mb-2 row">
                  <label for="nameproduct" class="col-md p-2">
                    <h6>
                      <i>Tên Sản Phẩm</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="nameproduct"
                      name="nameproduct"
                      type="text"
                      placeholder="Enter Producer's Name"
                      className="oditem form-control mb-3 "
                      onChange={handleAddItem}
                    ></input>
                  </div>
                </div>
                <div className="mb-2 row">
                  <label for="codeproduct" class="col-sm ">
                    <h6>
                      <i>Mã Sản Phẩm</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="codeproduct"
                      name="codeproduct"
                      type="text"
                      placeholder="Enter Product's Code"
                      className="oditem form-control mb-3 "
                      onChange={handleAddItem}
                    ></input>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="producer" class="col-md p-2">
                    <h6>
                      <i>Nhà Sản Xuất</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="producer"
                      name="producer"
                      type="text"
                      placeholder="Enter Producer"
                      className="oditem form-control mb-3 "
                      onChange={handleAddItem}
                    ></input>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label for="type" class="col-md p-2">
                    <h6>
                      <i>Loại Sản Phẩm</i>
                    </h6>
                  </label>
                  <div class="col-sm">
                    <input
                      id="type"
                      name="type"
                      type="text"
                      placeholder="Enter Type"
                      className="oditem form-control mb-3 "
                      onChange={handleAddItem}
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
                      placeholder="Enter Color"
                      className="oditem form-control mb-3 "
                      onChange={handleAddItem}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="crtitem btn btn-outline-secondary"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>

        <Form>
          <Row className="itemRow Row">
          <h3>Tìm kiếm sản phẩm</h3>
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

        <div className="tableItem mb-3">
          <table
            class="table table-success table-striped table-bordered"
            border="2"
          >
            <thead class="table-dark">
              <tr>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Mã Sản Phẩm</th>
                <th scope="col">Nhà Sản xuất</th>
                <th scope="col">Loại sản phẩm</th>
                <th scope="col">Màu sắc</th>
                <th scope="col">Chức Năng</th>
              </tr>
            </thead>
            <tbody>
              {sp.map((s) => (
                <tr>
                  <td>{s.nameproduct}</td>
                  <td>{s.codeproduct}</td>
                  <td>{s.producer}</td>
                  <td>{s.type}</td>
                  <td>{s.color}</td>
                  <td>
                    <Link to={`/updateitems/${s._id}`}>
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
