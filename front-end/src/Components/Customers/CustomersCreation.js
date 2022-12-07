import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "./Customers.css"

export const CustomersCreation = () => {
  const [addDoiTac, setAddDoiTac] = useState({
    tendoitac: "",
    email: "",
    diachi: "",
  });
  const handleAddDoiTac = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addDoiTac };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddDoiTac(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/doitac", {
        tendoitac: addDoiTac.tendoitac,
        email: addDoiTac.email,
        diachi: addDoiTac.diachi,
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
    <div>
      <form class="ro" onSubmit={handleAddFormSubmit}>
        <Form.Field>
          <div class="headj">
            <h1>Tạo Đối Tác</h1>
          </div>
          <br />
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Tên Đối Tác</label>
            <input
              name="tendoitac"
              placeholder="Tên Đối Tác"
              onChange={handleAddDoiTac}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Email</label>
            <input
              name="email"
              placeholder="Email"
              onChange={handleAddDoiTac}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Địa Chỉ</label>
            <input
              name="diachi"
              placeholder="Địa Chỉ"
              onChange={handleAddDoiTac}
            />
          </div>
        </Form.Field>
        <br />
        <button type="submit" class="abc">
          Create
        </button>
      </form>
    </div>
  );
};
