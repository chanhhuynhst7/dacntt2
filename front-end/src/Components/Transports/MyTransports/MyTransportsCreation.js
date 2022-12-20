import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "./MyTransports.css"

export const MyTransportsCreation = () => {
  const [addPhuongTien, setAddPhuongTien] = useState({
    code: "",
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
        code: addPhuongTien.code,
        type: addPhuongTien.type,
        host: addPhuongTien.host,
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
      <Form className="ro" onSubmit={handleAddFormSubmit}>
        <Form.Field>
          <div class="headj">
            <h1>Tạo Phương Tiện</h1>
          </div>
          <br />
          <div class="col-xs-6 col-md-7">
            <label class="form-label">ID Phương Tiện</label>
            <input
              name="host"
              placeholder="Tên Đối Tác"
              onChange={handleAddPhuongTien}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Loại Phương Tiện</label>
            <input
              name="type"
              placeholder="Loại Phương Tiện"
              onChange={handleAddPhuongTien}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Đối Tác</label>
            <input
              name="host"
              placeholder="Đối Tác"
              onChange={handleAddPhuongTien}
            />
          </div>
        </Form.Field>
        <br />
        <button type="submit" class="abc">
          Create
        </button>
      </Form>
    </div>
  );
};
