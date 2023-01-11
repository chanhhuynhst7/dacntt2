import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";
export const TestForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [A, setA] = useState({
    codeproduct: "",
    amount: "",
  });
  const [B, setB] = useState([]);
  const [C, setC] = useState({
    codecontainer: "",
    codepackage: "",
    items: [],
  });

  const [D, setD] = useState({
    from: "",
    to: "",
    codevehicle: "",
    details: [],
  });
  const handleSelect1A = (event) => {
    setC({ ...C, codecontainer: event.target.value });
  };
  const handleSelect1B = (event) => {
    setC({ ...C, codepackage: event.target.value });
  };

  const handleSelect2A = (event) => {
    setA({ ...A, codeproduct: event.target.value });
  };

  const handleSelect2 = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...A };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setA(newFormData);
  };

  const handleSelect3 = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...D };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setD(newFormData);
  };

  const handleSelect3A = (event) => {
    setD({ ...D, codevehicle: event.target.value });
  };

  const handleSubmitTable = async(event) => {
    event.preventDefault();
    B.push({ codeproduct: A.codeproduct, amount: A.amount });

  };

  const handdleSubmitForm = async() => {
    setC({ ...C, items: B });
  };

  const handleSubmitAll = async() => {
    setD({ ...D, details: C });
    console.log(D);
  };

  //get API
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProduct(response.data);
      })

      .catch((error) => {});
  }, []);

  const [container, setContainer] = useState([]);
  useEffect(() => {
    axios
      .get("/api/container")
      .then((response) => {
        setContainer(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [packages, setPackages] = useState([]);
  useEffect(() => {
    axios
      .get("/api/package")
      .then((response) => {
        setPackages(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios
      .get("/api/phuongtien")
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="main d-flex justify-content-center align-items-center h-100">
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 nhapdonhang">
            <form className="p-4" onClick={handleSubmitAll}>
              <h2 className="text-center">Nhập Hàng</h2>
              <div className="form-group">
                <label htmlFor="from" className="form-lable p-2">
                  <h5>Từ</h5>
                </label>
                <input
                  id="from"
                  name="from"
                  type="text"
                  placeholder="Nhập Từ Đâu"
                  className="form-control"
                  onChange={handleSelect3}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="to" className="form-lable p-2">
                  <h5>Đến</h5>
                </label>
                <input
                  id="to"
                  name="to"
                  type="text"
                  placeholder="Nhập Đến Đâu"
                  className="form-control"
                  onChange={handleSelect3}
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="phuongtien" className="form-lable p-2">
                  <h5>Phương Tiện</h5>
                </label>
                <select onChange={handleSelect3A} >
                  <option value="">Please Choose Option</option>
                  {vehicle.map((option) => (
                    <option value={option.codevehicle}>{option.codevehicle}</option>
                  ))}
                </select>
              </div>
              <div className="buttonItems p-2">
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
                        <h1>Create </h1>
                      </i>
                      <form
                        className="formcustomer"
                        onClick={handdleSubmitForm}
                      >
                        <div className="mb-2 row">
                          <label for="codecontainer" class="col-md p-2">
                            <h6>
                              <i>Code Container</i>
                            </h6>
                          </label>
                          <div class="col-sm">
                            <select onChange={handleSelect1A}>
                            <option value="">Please Choose Option</option>
                              {container.map((option) => (
                                <option value={option.codecontainer}>
                                  {option.type}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mb-2 row">
                          <label for="code" class="col-sm ">
                            <h6>
                              <i>Code Package</i>
                            </h6>
                          </label>
                          <div class="col-sm">
                            <select onChange={handleSelect1B}>
                            <option value="">Please Choose Option</option>
                              {packages.map((option) => (
                                <option value={option.codepackage}>
                                  {option.codepackage}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <table className="table table-success table-striped table-bordered">
                            <thead>
                              <tr>
                                <th>Code Items</th>
                                <th>Amount</th>
                                <th>Action</th>
                              </tr>
                              <tr>
                                <th>
                                  <select onChange={handleSelect2A}>
                                  <option value="">Please Choose Option</option>
                                    {product.map((option) => (
                                      <option value={option.codeproduct}>
                                        {option.nameproduct}
                                      </option>
                                    ))}
                                  </select>
                                </th>
                                <th>
                                  <input
                                    name="amount"
                                    onChange={handleSelect2}
                                  ></input>
                                </th>
                                <th>
                                  <button
                                    type="button"
                                    onClick={handleSubmitTable}
                                  >
                                    Add
                                  </button>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div>
                          <button
                            type="button"
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
              <div>
                <table class="table" border="2">
                  <thead class="table">
                    <tr>
                      <th scope="col">Mã Order</th>
                      <th scope="col">Mã Container</th>
                      <th scope="col">Chức Năng</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center align-items-center h-100">
                <button type="button">Tạo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
