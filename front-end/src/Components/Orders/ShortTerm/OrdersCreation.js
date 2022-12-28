import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";

export const OrdersCreation = () => {

  const handleA = (event) =>{
  }  
  const [ct, setCT] = useState([]);
  const url = "/api/container";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [pt, setPT] = useState([]);
  useEffect(() => {
    axios
      .get("/api/phuongtien")
      .then((response) => {
        setPT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="main d-flex justify-content-center align-items-center h-100">
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 nhapdonhang">
            <form className="p-4">
              <h2 className="text-center">Nhập Hàng</h2>
              <div className="form-group">
                <label htmlFor="tu" className="form-lable p-2">
                  <h5>Từ</h5>
                </label>
                <input
                  id="tu"
                  name="tu"
                  type="text"
                  placeholder="Nhập Từ Đâu"
                  className="form-control"
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="den" className="form-lable p-2">
                  <h5>Đến</h5>
                </label>
                <input
                  id="den"
                  name="den"
                  type="text"
                  placeholder="Nhập Đến Đâu"
                  className="form-control"
                ></input>
              </div>

              <div className="form-group">
                <label htmlFor="idphuongtien" className="form-lable p-2">
                  <h5>Phương Tiện</h5>
                </label>
                <select onChange={handleA}>
                  {pt.map((option) => (
                    <option value={option.code}>
                      {option.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="buttonItems p-2">
                <Link to="/containerscreation">
                  <button>Tạo Containers</button>
                </Link>
              </div>
              <div>
                <table class="table" border="2">
                  <thead class="table">
                    <tr>
                      <th scope="col">Mã Order</th>
                      <th scope="col">Mã Container</th>
                      <th scope="col">Chức Năng</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center align-items-center h-100">
                <button type="submit">Tạo</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
