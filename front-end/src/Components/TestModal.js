import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import "./TestModal.css";

export const TestModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addPhuongTien, setAddPhuongTien] = useState({
    idphuongtien: "",
    loaiphuongtien: "",
    doitac: "",
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
        idphuongtien: addPhuongTien.idphuongtien,
        loaiphuongtien: addPhuongTien.loaiphuongtien,
        doitac: addPhuongTien.doitac,
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    Request();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="bg">
          <div className="tf">
            <i className="nf">
              <h1>Tạo Container</h1>
            </i>
            <form className="form" onSubmit={handleAddFormSubmit}>
              <div className="mb-2 row">
                <label for="idphuongtien" class="col-md p-2">
                  <h6>
                    <i>Code Vehical</i>
                  </h6>
                </label>
                <div class="col-sm">
                  <input
                    id="idphuongtien"
                    name="idphuongtien"
                    type="text"
                    placeholder="Nhập Code Phương Tiện"
                    className="order form-control mb-3 "
                    onChange={handleAddPhuongTien}
                  ></input>
                </div>
              </div>
              <div className="mb-2 row">
                <label for="loaiphuongtien" class="col-sm ">
                  <h6>
                    <i>Type</i>
                  </h6>
                </label>
                <div class="col-sm">
                  <input
                    id="loaiphuongtien"
                    name="loaiphuongtien"
                    type="text"
                    placeholder="Nhập Loại Phương Tiện"
                    className="order form-control mb-3 "
                    onChange={handleAddPhuongTien}

                  ></input>
                </div>
              </div>
              <div className="mb-3 row">
                <label for="doitac" class="col-md p-2">
                  <h6>
                    <i>Customer</i>
                  </h6>
                </label>
                <div class="col-sm">
                  <input
                    id="doitac"
                    name="doitac"
                    type="text"
                    placeholder="Nhập Đối Tác"
                    className="order form-control mb-3 "
                    onChange={handleAddPhuongTien}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="create btn btn-outline-secondary"
                >
                  Tạo
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
