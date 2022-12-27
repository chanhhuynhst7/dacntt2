import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ItemsInPackage.css";

export const ItemsInPackage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [pk, setPK] = useState([]);
  const [ct, setCT] = useState([]);
  const [it, setIT] = useState([]);
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
  }, []);
  const [addItems, setAddItems] = useState({
    codecontainer: "",
    codepackage: "",
    codeitem: "",
    name: "",
    amount: "",
  });

  const handleAddItems = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addItems };
    newFormData[fieldName] = fieldValue;

    setAddItems(newFormData);
  };

  const handleA = (event) => {
    setAddItems({ ...addItems, codecontainer: event.target.value });
  };
  const handleB = (event) => {
    setAddItems({ ...addItems, codepackage: event.target.value });
  };

  const Request = async () => {
    const res = await axios
      .post("/api/iteminpackage/create", {
        codecontainer: addItems.codecontainer,
        codepackage: addItems.codepackage,
        codeitem : addItems.codeitem,
        name: addItems.name,
        amount: addItems.amount
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
    const url = "/api/iteminpackage";
    axios
      .get(url)
      .then((response) => {
        setIT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isSubmit]);

  


  return (
    <>
      <div>
        <i className="text-center">
          <Link to="">
            <button type="button" className="btnback">
              Back
            </button>
          </Link>
          <h1>Create Items</h1>
        </i>
      </div>
      <div className="gridall">
        <div className="griddata">
          <div className="gridhead">
            <div className="gridleft">
              <i>
                <h3>List Items</h3>
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
                      <h1>Create Items</h1>
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
                      <div className="mb-2 row">
                        <label for="code" class="col-md p-2">
                          <h6>
                            <i>Code Package</i>
                          </h6>
                        </label>
                        <div class="col-sm">
                          <select onChange={handleB}>
                            {pk.map((option) => (
                              <option value={option.codepackage}>
                                {option.codepackage}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="codeitem" class="col-md p-2">
                          <h6>
                            <i>Code Items</i>
                          </h6>
                        </label>
                        <div class="col-sm">
                          <input
                            id="codeitem"
                            name="codeitem"
                            type="text"
                            placeholder="Enter Code Item"
                            className="order form-control mb-3 "
                            onChange={handleAddItems}
                          ></input>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="name" class="col-md p-2">
                          <h6>
                            <i>Name</i>
                          </h6>
                        </label>
                        <div class="col-sm">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter Name"
                            className="order form-control mb-3 "
                            onChange={handleAddItems}
                          ></input>
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label for="amount" class="col-md p-2">
                          <h6>
                            <i>Amount</i>
                          </h6>
                        </label>
                        <div class="col-sm">
                          <input
                            id="amount"
                            name="amount"
                            type="text"
                            placeholder="Enter Amount"
                            className="order form-control mb-3 "
                            onChange={handleAddItems}
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
                      <h6>Code Items</h6>
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
                {it.map((s, index) => (
                  <tr key={index}>
                    <td>{s.codeitem}</td>
                    <td>
                      <button className="btn btn-outline-danger m-1">
                        Delete
                      </button>
                      <Link to="">
                        <button className="btn btn-outline-secondary m-1">
                          Update
                        </button>
                      </Link>
                      <Link to="">
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
