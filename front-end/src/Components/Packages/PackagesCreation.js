import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useFormik } from "formik";

export const PackagesCreation = () => {
  // const [addPackage, setAddPackage] = useState({
  //   idpackage: "",
  //   idorder: "",
  //   idcontainer: "",
  //   host: "",
  //   located: "",
  //   id: "",
  //   name: "",
  //   numbers: "",
  //   units: "",
  //   idproducers: "",
  // });
  // const handleAddContainer = (event) => {
  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addPackage };
  //   newFormData[fieldName] = fieldValue;
  //   console.log("newFormData", newFormData);
  //   setAddPackage(newFormData);
  // };

  // const Request = async () => {
  //   const res = await axios
  //     .post("/api/package/create", {
  //       idpackage: addPackage.idpackage,
  //       idorder: addPackage.idorder,
  //       idcontainer: addPackage.idcontainer,
  //       host: addPackage.host,
  //       located: addPackage.located,
  //       id: addPackage.id,
  //       name: addPackage.name,
  //       numbers: addPackage.numbers,
  //       units: addPackage.units,
  //       idproducers: addPackage.idproducers,
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();
  //   Request();
  // };


  const onSubmit = async (values) => {

    console.log(values);
  };
  const formik = useFormik({
    initialValues: {
      iditeminpackage: "",
      idpackage: "",
      tensanpham: "",
      amount: "",
      units: "",
      idproducers: "",
    },
    onSubmit,
  });

  return (
    <div>
      <form
        class="row"
        // onSubmit={handleAddFormSubmit}
      >
        <div>
          <h1>Create Package</h1>
        </div>
        <br />
        <div>
          <label class="form-label">Mã Package</label>
          <input
            name="idpackage"
            placeholder="Mã Container"
            // onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Mã Orders</label>
          <input
            name="idorder"
            placeholder="Mã Container"
            // onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Mã Container</label>
          <input
            name="idcontainer"
            placeholder="Mã Container"
            // onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Sở hữu của</label>
          <input
            name="host"
            placeholder="Sở hữu của"
            // onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Địa Chỉ</label>
          <input
            name="located"
            placeholder="Địa Chỉ"
            // onChange={handleAddContainer}
          />
        </div>
        <div>
          <label htmlFor="phuongtien" className="form-lable p-2">
            <h5>Sản Phẩm</h5>
          </label>
          <form onSubmit={formik.handleSubmit}>
            <table>
              <thead>
                <tr>
                  {/* chưa chỉnh mã sản phẩm từ input thành dropdown */}
                  <th>STT</th>
                  <th>
                    <label htmlFor="iditeminpackage" className="form-lable p-2">
                      <h8>Mã Sản Phẩm</h8>
                    </label>
                    <input
                      id="iditeminpackage"
                      name="iditeminpackage"
                      type="text"
                      placeholder="Nhập Mã Sản Phẩm"
                      value={formik.values.iditeminpackage}
                      onChange={formik.handleChange}
                    ></input>
                  </th>

                  <th>
                    <label htmlFor="idpackage" className="form-lable p-2">
                      <h8>Mã Package</h8>
                    </label>
                    <input
                      id="idpackage"
                      name="idpackage"
                      type="text"
                      placeholder="Nhập Mã Sản Phẩm"
                      value={formik.values.idpackage}
                      onChange={formik.handleChange}
                    ></input>
                  </th>

                  {/* chưa chỉnh tên sản phẩm từ input thành dropdown */}
                  <th>
                    <label htmlFor="tensanpham" className="form-lable p-2">
                      <h8>Tên Sản Phẩm</h8>
                    </label>
                    <input
                      id="tensanpham"
                      name="tensanpham"
                      type="text"
                      placeholder="Nhập Tên Sản Phẩm"
                      value={formik.values.tensanpham}
                      onChange={formik.handleChange}
                    ></input>
                  </th>
                  {/* chưa chỉnh số lượng từ string thành number */}
                  <th>
                    <label htmlFor="amount" className="form-lable p-2">
                      <h8>Số Lượng</h8>
                    </label>
                    <input
                      id="amount"
                      name="amount"
                      type="text"
                      placeholder="Nhập Số Lượng"
                      value={formik.values.amount}
                      onChange={formik.handleChange}
                    ></input>
                  </th>

                  {/* chưa chỉnh đơn vị từ input thành dropdown */}
                  <th>
                    <label htmlFor="units" className="form-lable p-2">
                      <h8>Đơn Vị</h8>
                    </label>
                    <input
                      id="units"
                      name="units"
                      type="text"
                      placeholder="Nhập Đơn Vị"
                      value={formik.values.units}
                      onChange={formik.handleChange}
                    ></input>
                  </th>

                  {/* chưa chỉnh nhà sản xuất từ input thành dropdown */}
                  <th>
                    <label htmlFor="idproducers" className="form-lable p-2">
                      <h8>Nhà Sản Xuất</h8>
                    </label>
                    <input
                      id="idproducers"
                      name="idproducers"
                      type="text"
                      placeholder="Nhập Nhà Sản Xuất"
                      value={formik.values.idproducers}
                      onChange={formik.handleChange}
                    ></input>
                  </th>
                  <th>
                    <button type="submit">tạo sản phẩm</button>
                  </th>

                  {/* chưa chỉnh mã contianer từ input thành dropdown */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
