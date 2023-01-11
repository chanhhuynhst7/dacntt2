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

export const TestOption = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [isSubmit, setIsSubmit] = useState(false);
   const [addTest, setAddTest] = useState({
     container: "",
     transports: "",
   });
   const handleA = (event) => {
    setAddTest({...addTest,container : event.target.value})
   };
   
   const handleB = (event) =>{
    setAddTest({...addTest,transports : event.target.value})

   }

   

  const handleAddFormSubmit = async(event) => {
    console.log(addTest)
    event.preventDefault();
    await axios.post("/api/testform/create",{
     container : addTest.container,
      transports : addTest.transports
    })
    .then(res => {
      window.location.href = "/home"
    })
     .catch((error)=>{
       console.log(error);
     })
   };

 
  const [pt, setPT] = useState([]);

  useEffect(() => {
    const url = "/api/phuongtien";
    axios
      .get(url)
      .then((response) => {
        setPT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [ct, setCT] = useState([]);
  useEffect(() => {
    const url = "api/container";
    axios
      .get(url)
      .then((response) => {
        setCT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <Button
        style={{
          background: "#0B5ED7",
          borderColor: "white",
          color: "white",
        }}
        onClick={handleShow}
      >
        Thêm Phương Tiện
      </Button>
      <Modal show={show} onHide={handleClose}>
        <div className="bgtransports">
          <div className="tftransports">
            <i className="nftransports">
              <h1>Create Transports</h1>
            </i>
            <form className="formtransports" onSubmit={handleAddFormSubmit}>
              <div className="mb-2 row">
                <label for="code" class="col-md p-2">
                  <h6>
                    <i>Mã Phương Tiện</i>
                  </h6>
                </label>
                <div class="col-sm">
                  <select onChange={handleA}>
                    {ct.map((option) => (
                      <option value={option.codecontainer}>{option.codecontainer}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-2 row">
                <label for="transports" class="col-md p-2">
                  <h6>
                    <i>Transports</i>
                  </h6>
                </label>
                <div class="col-sm">
                  <select onChange={handleB}>
                    {pt.map((option) => (
                      <option value={option.code}>{option.code}</option>
                    ))}
                  </select>
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
    </>
  );
};
