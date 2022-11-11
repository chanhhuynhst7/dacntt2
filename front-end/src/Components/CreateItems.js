import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import "./CreateItem.less";
export const CreateItems = () => {
  //   const [tensanpham, setTensanpham] = useState(null);
  //   const [soluong, setSoluong] = useState(null);
  //   const [nhasanxuat, setNhasanxuat] = useState(null);

  const [addItem, setAddItem] = useState({
    tensanpham: "",
    soluong: "",
    nhasanxuat:"",
  });
  const handleAddItem = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addItem };
    newFormData[fieldName] = fieldValue;
  console.log('newFormData', newFormData);
    setAddItem(newFormData);
  };

  const Request= async() => {
    const res = await 
    axios.post("/api/products", {
      tensanpham: addItem.tensanpham,
      soluong: addItem.soluong,
      nhasanxuat: addItem.nhasanxuat,
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
          <label>Tên Sản Phẩm</label>
          <input
            name="tensanpham"
            placeholder="Tên Sản Phẩm"
            onChange={handleAddItem}
          />
        </Form.Field>
        <Form.Field>
          <label>Số Lượng</label>
          <input
            name="soluong"
            placeholder="Số Lượng"
            onChange={handleAddItem}
          />
        </Form.Field>
        <Form.Field>
          <label>Nhà Sản Xuất</label>
          <input
            name="nhasanxuat"
            placeholder="Nhà Sản Xuất"
            onChange={handleAddItem}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
