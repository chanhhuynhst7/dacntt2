import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

export const CreateDoitac = () => {
    const [addDoiTac, setAddDoiTac] = useState({
        tendoitac: "",
        email: "",
        diachi:"",
      });
      const handleAddDoiTac = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addDoiTac };
        newFormData[fieldName] = fieldValue;
      console.log('newFormData', newFormData);
        setAddDoiTac(newFormData);
      };
    
      const Request= async() => {
        const res = await 
        axios.post("/api/doitac", {
          tendoitac: addDoiTac.tendoitac,
          email: addDoiTac.email,
          diachi: addDoiTac.diachi,
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
              <label>Tên Đối Tác</label>
              <input
                name="tendoitac"
                placeholder="Tên Đối Tác"
                onChange={handleAddDoiTac}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                name="email"
                placeholder="Email"
                onChange={handleAddDoiTac}
              />
            </Form.Field>
            <Form.Field>
              <label>Địa Chỉ</label>
              <input
                name="diachi"
                placeholder="Địa Chỉ"
                onChange={handleAddDoiTac}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      );
}
