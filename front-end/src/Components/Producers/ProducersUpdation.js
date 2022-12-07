import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ProducersUpdation = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [updateNSX, setUpdateNSX] = useState({
    tennhasanxuat: "",
    email: "",
    diachi: "",
  });
  const handleUpdateNSX = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...updateNSX };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setUpdateNSX(newFormData);
  };
  const Request = async () => {
    const res = await axios
      .patch(`/api/nhasanxuat/${id}`, {
        tennhasanxuat: updateNSX.tennhasanxuat,
        email: updateNSX.email,
        diachi: updateNSX.diachi,
      })
      .then(() => {
        console.log("update thành công");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  const handleUpdateFormSubmit = (event) => {
    event.preventDefault();
    Request();
  };
  return (
    <div>
      <Form className="create-form" onClick={handleUpdateFormSubmit}>
        <Form.Field>
          <label>Tên Nhà Sản Xuất</label>
          <input
            name="tennhasanxuat"
            placeholder="Tên Nhà Sản Xuất"
            onChange={handleUpdateNSX}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input name="email" placeholder="Email" onChange={handleUpdateNSX} />
        </Form.Field>
        <Form.Field>
          <label>Địa Chỉ</label>
          <input
            name="diachi"
            placeholder="Địa Chỉ"
            onChange={handleUpdateNSX}
          />
        </Form.Field>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};
