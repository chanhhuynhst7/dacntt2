import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./PackagesCreation.css"

export const PackagesCreation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [pk, setPK] = useState([]);
  const [ct, setCT] = useState([]);
  const [addPackage, setAddPackage] = useState({
    codecontainer: "",
    codepackage:""
  });

  useEffect(() => {
    const url = "/api/container/";
    axios
      .get(url)
      .then((response) => {
        setCT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddPackage = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addPackage };
    newFormData[fieldName] = fieldValue;

    setAddPackage(newFormData);
  };

  const handleA = (event) => {
    setAddPackage({...addPackage,codecontainer : event.target.value})
   };

  const Request = async () => {
    const res = await axios
      .post("/api/package/create", {
        codecontainer: addPackage.codecontainer,
        codepackage: addPackage.codepackage
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
    const url = "/api/package/";
    axios
      .get(url)
      .then((response) => {
        setPK(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isSubmit]);
  

  return (
    <>
      <div>
        <i className="text-center">
          <Link to="/containerscreation">
            <button type="button" className="btnback">
              Back
            </button>
          </Link>
          <h1>Create Package</h1>
        </i>
      </div>
      <div className="gridall">
        <div className="griddata">
          <div className="gridhead">
            <div className="gridleft">
              <i>
                <h3>List Package</h3>
              </i>
            </div>
            <div className="gridright">
              <button
                type="button"
                className="btncreate btn btn-outline-primary"
                onClick={handleShow}
              >
                <i>
                  <h5>Create</h5>
                </i>
              </button>
              <Modal show={show} onHide={handleClose}>
                <div className="bg">
                  <div className="tf">
                    <i className="nf">
                      <h1>Create Package</h1>
                    </i>
                    <form className="form" onSubmit={handleAddFormSubmit}>
                      <div className="mb-2 row">
                        <label for="code" class="col-md p-2">
                          <h6>
                            <i>Code Container</i>
                          </h6>
                        </label>
                        <div class="col-sm">
                          <select onChange={handleA}>
                            {ct.map((option) => (
                              <option value={option.codecontainer}>
                                {option.codecontainer}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="codepackage" class="col-md p-2">
                          <h6>
                            <i>Code Package</i>
                          </h6>
                        </label>
                        <div class="col-sm">
                          <input
                            id="codepackage"
                            name="codepackage"
                            type="text"
                            placeholder="Enter Code Package"
                            className="order form-control mb-3 "
                            onChange={handleAddPackage}
                          ></input>
                        </div>
                      </div>
                  
                      <div>
                        <button
                          type="submit"
                          className="create btn btn-outline-secondary"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="gridbody">
            <table className="test table table-bordered  text-center">
              <thead>
                <tr>
                  <td>
                    <i>
                      <h6>Code Package</h6>
                    </i>
                  </td>
                  <td>
                    <i>
                      <h6>Actions</h6>
                    </i>
                  </td>
                </tr>
              </thead>
              <tbody>
                {pk.map((s, index) => (
                  <tr key={index}>
                    <td>{s.codepackage}</td>
                    <td>
                      <button className="btn btn-outline-danger m-1">
                        Delete
                      </button>
                      <Link
                        to=""
                      >
                        <button className="btn btn-outline-secondary m-1">
                          Update
                        </button>
                      </Link>
                      <Link to={`/itemsinpackage/${s.codepackage}/create`}>
                        <button className="btn btn-outline-primary m-1">
                          Create Items
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
