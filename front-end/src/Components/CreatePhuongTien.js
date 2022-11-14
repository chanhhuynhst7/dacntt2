import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

export const CreatePhuongTien = () => {
    const [addPhuongTien, setAddPhuongTien] = useState({
        idphuongtien: "",
        loaiphuongtien: "",
        doitac:"",
      });
      const handleAddPhuongTien = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addPhuongTien };
        newFormData[fieldName] = fieldValue;
      console.log('newFormData', newFormData);
        setAddPhuongTien(newFormData);
      };
    
      const Request= async() => {
        const res = await 
        axios.post("/api/phuongtien", {
          idphuongtien: addPhuongTien.idphuongtien,
          loaiphuongtien: addPhuongTien.loaiphuongtien,
          doitac: addPhuongTien.doitac,
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
              <label>ID Phương Tiện</label>
              <input
                name="idphuongtien"
                placeholder="Tên Đối Tác"
                onChange={handleAddPhuongTien}
              />
            </Form.Field>
            <Form.Field>
              <label>Loại Phương Tiện</label>
              <input
                name="loaiphuongtien"
                placeholder="Loại Phương Tiện"
                onChange={handleAddPhuongTien}
              />
            </Form.Field>
            <Form.Field>
              <label>Đối Tác</label>
              <input
                name="doitac"
                placeholder="Đối Tác"
                onChange={handleAddPhuongTien}
              />
            </Form.Field>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      );
}
