import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CustomersUpdation = () => {
    let navigate = useNavigate();
    const {id} = useParams()
    const [updateDT,setUpdateDT] = useState({
      tendoitac:"",
      email:"",
      diachi:""
    })
    const handleUpdateDT = (event) => {
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
      
      const newFormData = { ...updateDT };
      newFormData[fieldName] = fieldValue;
      console.log("newFormData", newFormData);
      setUpdateDT(newFormData);
    };
      const Request = async () => {
      const res = await axios
        .patch(`/api/doitac/${id}`, {
          tendoitac: updateDT.tendoitac,
          email: updateDT.email,
          diachi: updateDT.diachi,
        })
        .then(() =>{
          console.log('update thành công')
        } )
        .catch((error) => {
          console.log('error')
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
            <label>Tên Đối Tác</label>
            <input
              name="tendoitac"
              placeholder="Tên Đối Tác"
              onChange={handleUpdateDT}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              name="email"
              placeholder="Email"
              onChange={handleUpdateDT}
            />
          </Form.Field>
          <Form.Field>
            <label>Địa Chỉ</label>
            <input
              name="diachi"
              placeholder="Địa Chỉ"
              onChange={handleUpdateDT}
            />
          </Form.Field>
          <Button type="submit">
            Update
          </Button>
        </Form>
      </div>
    );
}
