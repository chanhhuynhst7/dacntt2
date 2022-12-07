import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ItemsUpdation = () => {
  const { id } = useParams();
  const [updateItem, setUpdateItem] = useState({
    tensanpham: "",
    soluong: "",
    nhasanxuat: "",
  });
  const handleUpdateItem = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...updateItem };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setUpdateItem(newFormData);
  };
  const Request = async () => {
    const res = await axios
      .patch(`/api/products/${id}`, {
        tensanpham: updateItem.tensanpham,
        soluong: updateItem.soluong,
        nhasanxuat: updateItem.nhasanxuat,
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
          <label>Tên Sản Phẩm</label>
          <input
            name="tensanpham"
            placeholder="Tên Sản Phẩm"
            onChange={handleUpdateItem}
          />
        </Form.Field>
        <Form.Field>
          <label>Số Lượng</label>
          <input
            name="soluong"
            placeholder="Số Lượng"
            onChange={handleUpdateItem}
          />
        </Form.Field>
        <Form.Field>
          <label>Nhà Sản Xuất</label>
          <input
            name="nhasanxuat"
            placeholder="Nhà Sản Xuất"
            onChange={handleUpdateItem}
          />
        </Form.Field>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};
