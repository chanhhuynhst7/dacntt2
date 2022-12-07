import React, { useState } from "react";
import axios from "axios";
import "./Producers.css"

export const ProducersCreation = () => {
    const [addNhaSanXuat, setAddNhaSanXuat] = useState({
        tennhasanxuat: "",
        email: "",
        diachi: "",
      });
      const handleAddNhaSanXuat = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addNhaSanXuat };
        newFormData[fieldName] = fieldValue;
        console.log("newFormData", newFormData);
        setAddNhaSanXuat(newFormData);
      };
    
      const Request = async () => {
        const res = await axios
          .post("/api/nhasanxuat", {
            tennhasanxuat: addNhaSanXuat.tennhasanxuat,
            email: addNhaSanXuat.email,
            diachi: addNhaSanXuat.diachi,
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
      <div class="headj"><h1>Create NSX</h1></div>
      <br/>
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Tên Nhà Sản Xuất</label>
        <input
            name="tennhasanxuat"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Code</label>
        <input
            name="code"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Email</label>
        <input
            name="Email"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>    
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Địa Chỉ</label>
        <input
            name="diachi"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Số điện thoại</label>
        <input
            name="phone"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>    
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Mã Số Thuế</label>
        <input
            name="taxcode"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>   
      <div class="col-md-8">
        <br/>
        <button type="submit" class="abc">Create</button>
        </div> 
    </form>
        </div>
      );
}
