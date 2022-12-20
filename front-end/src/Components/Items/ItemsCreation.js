import React, { useState } from "react";
import axios from "axios";
import "./Items.css"

export const ItemsCreation = () => {
    const [addItem, setAddItem] = useState({
        name: "",
        code: "",
        amount: "",
        producer :"",
        type :"",
        color:""
      });
      const handleAddItem = (event) => {
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addItem };
        newFormData[fieldName] = fieldValue;
        console.log("newFormData", newFormData);
        setAddItem(newFormData);
      };
    
      const Request = async () => {
        const res = await axios
          .post("/api/products/addItem", {
            name: addItem.name,
            code: addItem.code,
            amount: addItem.amount,
            producer: addItem.producer,
            type : addItem.type,
            color: addItem.color
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
          <div class="headj"><h1>Create Items</h1></div>
          <br/>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Tên Sản Phẩm</label>
            <input
                name="name"
                placeholder="Tên Sản Phẩm"
                onChange={handleAddItem}
              />
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Mã Sản Phẩm</label>
            <input
                name="code"
                placeholder="Mã Sản Phẩm"
                onChange={handleAddItem}
              />
          </div>
          </div>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Số Lượng</label>
            <input
                name="amount"
                placeholder="Số Lượng"
                onChange={handleAddItem}
              />
          </div>    
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Nhà Sản Xuất</label>
            <input
                name="producer"
                placeholder="Nhà Sản Xuất"
                onChange={handleAddItem}
              />
          </div>   
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Loại Sản Phẩm</label>
            <input
                name="type"
                placeholder="Loại Sản Phẩm"
                onChange={handleAddItem}
              />
          </div>    
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Màu Sắc</label>
            <input
                name="color"
                placeholder="Màu Sắc"
                onChange={handleAddItem}
              />
          </div>   
          <div class="col-md-11">
            <br/>
            <button type="submit" class="abc">Submit</button>
            </div> 
        </form>
        </div>
      );
}
