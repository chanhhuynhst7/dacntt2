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
  const [product, setProduct] = useState([]);
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
    phuongtien: "",
    details: [],
  });

  const handleSelect1 = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...C };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setC(newFormData);
  };

  const handleSelect2 = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...A };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setA(newFormData);
  };
  const handleSelect2A = (event) => {
    setProduct({...A,codeproduct : event.target.value})
   };

  const handleSelect3 = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...D };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setD(newFormData);
  };

  const handleSubmitTable = (event) => {
    event.preventDefault();
    B.push({ codeitem: A.codeitem, amount: A.amount });
  };

  const handdleSubmitForm = () => {
    setC({ ...C, items: B });
  };

  const handleSubmitAll = () => {
    setD({ ...D, details: C });
    console.log(D);
  };

  //get API
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProduct(response.data);
        console.log(product)
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
                <input name="phuongtien" onChange={handleSelect3}></input>
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
                            <input
                              name="codecontainer"
                              onChange={handleSelect1}
                            ></input>
                          </div>
                        </div>
                        <div className="mb-2 row">
                          <label for="code" class="col-sm ">
                            <h6>
                              <i>Code Package</i>
                            </h6>
                          </label>
                          <div class="col-sm">
                            <input
                              name="codepackage"
                              onChange={handleSelect1}
                            ></input>
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
