import React, { useState } from "react";
import axios from "axios";
import "./Producers.css"

export const ProducersCreation = () => {
    const [addNhaSanXuat, setAddNhaSanXuat] = useState({
        name: "",
        email: "",
        located: "",
        phone : "",
        taxcode :"",
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
            name: addNhaSanXuat.name,
            email: addNhaSanXuat.email,
            located: addNhaSanXuat.located,
            phone: addNhaSanXuat.located,
            taxcode: addNhaSanXuat.taxcode
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
            name="name"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Email</label>
        <input
            name="email"
            placeholder="..."
            onChange={handleAddNhaSanXuat}
          />
      </div>    
      <div class="col-xs-6 col-md-7">
        <label class="form-label">Địa Chỉ</label>
        <input
            name="located"
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
