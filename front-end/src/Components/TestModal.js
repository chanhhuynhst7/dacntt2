import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react";

export const TestModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (values) => {
    const { iditeminpackage, idpackage, name, amount, units, idproducers } = values;
    await axios
      .post("/api/iteminpackage/create", {
        iditeminpackage: iditeminpackage,
        idpackage: idpackage,
        name: name,
        amount : amount,
        units : units,
        idproducers : idproducers
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const formik = useFormik({
    initialValues: {
      iditeminpackage: "",
      idpackage: "",
      name: "",
      amount: "",
      units: "",
      idproducers: "",
    },
    onSubmit,
  });
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
          <form onSubmit={formik.handleSubmit}>
              <div>
                <h1>Tạo Đối Tác</h1>
              </div>
              <br />
              <div class="col-xs-6 col-md-7">
                <label class="form-label">ID Item</label>
                <input
                  id="iditeminpackage"
                  name="iditeminpackage"
                  value={formik.values.iditeminpackage}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="col-xs-6 col-md-7">
                <label class="form-label">ID Package</label>
                <input
                  id="idpackage"
                  name="idpackage"
                  value={formik.values.idpackage}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="col-xs-6 col-md-7">
                <label class="form-label">Name Item</label>
                <input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="col-xs-6 col-md-7">
                <label class="form-label">Amount</label>
                <input
                  id="amount"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="col-xs-6 col-md-7">
                <label class="form-label">Units </label>
                <input
                  id="units"
                  name="units"
                  value={formik.values.units}
                  onChange={formik.handleChange}
                />
              </div>
              <div class="col-xs-6 col-md-7">
                <label class="form-label">ID Producers</label>
                <input
                  id="idproducers"
                  name="idproducers"
                  value={formik.values.idproducers}
                  onChange={formik.handleChange}
                />
              </div>
            <br />
            <button type="submit" class="abc">
              Create
            </button>
          </form>
      </Modal>
     
     
    </>
  );
};
