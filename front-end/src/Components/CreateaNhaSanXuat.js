import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

export const CreateaNhaSanXuat = () => {
    const [addNhaSanXuat, setAddNhaSanXuat] = useState({
        tennhasanxuat: "",
        email: "",
        diachi:"",
      });
      const handleAddNhaSanXuat = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addNhaSanXuat };
        newFormData[fieldName] = fieldValue;
      console.log('newFormData', newFormData);
      setAddNhaSanXuat(newFormData);
      };
    
      const Request= async() => {
        const res = await 
        axios.post("/api/nhasanxuat", {
          tennhasanxuat: addNhaSanXuat.tennhasanxuat,
          email: addNhaSanXuat.email,
          diachi: addNhaSanXuat.diachi,
        })
        .catch((error) => {
            console.log(error);
          });
      }
      const handleAddFormSubmit = (event) => {
        event.preventDefault();
        Request();
      };
      return (
        <div>
          <Form className="create-form" onSubmit={handleAddFormSubmit}>
            <Form.Field>
              <label>Tên Nhà Sản Xuất</label>
              <input
                name="tennhasanxuat"
                placeholder="Tên Nhà Sản Xuất"
                onChange={handleAddNhaSanXuat}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                name="email"
                placeholder="Email"
                onChange={handleAddNhaSanXuat}
              />
            </Form.Field>
            <Form.Field>
              <label>Địa Chỉ</label>
              <input
                name="diachi"
                placeholder="Địa Chỉ"
                onChange={handleAddNhaSanXuat}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      );
}
