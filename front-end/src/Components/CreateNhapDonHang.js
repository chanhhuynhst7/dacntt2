import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./CreateNhapDonHang.css";

export const CreateNhapDonHang = () => {
  const [addNDH, setAddNDH] = useState({
    iddonhang: "",
    tu: "",
    den: "",
    idphuongtien: "",
    idcontainer: "",
    idsanpham: "",
    tensanpham: "",
    soluong: "",
    donvi: "",
    tennhasanxuat: "",
  });
  const handleAddNDH = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addNDH };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddNDH(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/nhapdonhang", {
        iddonhang: addNDH.iddonhang,
        tu: addNDH.tu,
        den: addNDH.den,
        idphuongtien: addNDH.idphuongtien,
        idcontainer: addNDH.idcontainer,
        idsanpham: addNDH.idphuongtien,
        tensanpham: addNDH.tensanpham,
        soluong: addNDH.soluong,
        donvi: addNDH.donvi,
        nhasanxuat: addNDH.nhasanxuat,
        idcontainer: addNDH.idcontainer
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
    <div className="main d-flex justify-content-center align-items-center h-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6 nhapdonhang">
            <form className="p-4">
              <h2 className="text-center">Nhập Hàng</h2>
              <div className="form-group">
                <label htmlFor="iddonhang" className="form-lable p-2">
                  <h5>Mã Đơn hàng</h5>
                </label>
                <input
                  id="iddonhang"
                  name="iddonhang"
                  type="text"
                  placeholder="Nhập Đơn Hàng"
                  className="form-control"
                  onChange={handleAddNDH}
                ></input>
              </div>
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
                  onChange={handleAddNDH}
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
                  onChange={handleAddNDH}
                ></input>
              </div>

              {/* chưa thay đổi sting thành date */}
              {/* <div className="form-group">
                <label htmlFor="time" className="form-lable p-2">
                  <h5>Thời Gian</h5>
                </label>
                <input
                  id="time"
                  name="time"
                  type="text"
                  placeholder="Nhập Thời Gian"
                  className="form-control"
                ></input>
              </div> */}

              <div className="form-group">
                <label htmlFor="idphuongtien" className="form-lable p-2">
                  <h5>Phương Tiện</h5>
                </label>
                <input
                  id="idphuongtien"
                  name="idphuongtien"
                  type="text"
                  placeholder="Nhập Phương Tiện"
                  className="form-control"
                  onChange={handleAddNDH}
                ></input>
              </div>

              <div>
                <label className="form-lable p-2">
                  <h5>Container</h5>
                </label>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      {/* chưa chỉnh mã contianer từ input thành dropdown */}
                      <th>STT</th>
                      <th>
                        <label htmlFor="idcontainer" className="form-lable p-2">
                          <h8>Mã Container</h8>
                        </label>
                        <input
                          id="idcontainer"
                          name="idcontainer"
                          type="text"
                          placeholder="Nhập Mã Container"
                          className="form-control"
                          onChange={handleAddNDH}
                        ></input>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div>
                <label htmlFor="phuongtien" className="form-lable p-2">
                  <h5>Sản Phẩm</h5>
                </label>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      {/* chưa chỉnh mã sản phẩm từ input thành dropdown */}
                      <th>STT</th>
                      <th>
                        <label htmlFor="idsanpham" className="form-lable p-2">
                          <h8>Mã Sản Phẩm</h8>
                        </label>
                        <input
                          id="idsanpham"
                          name="idsanpham"
                          type="text"
                          placeholder="Nhập Mã Sản Phẩm"
                          className="form-control"
                          onChange={handleAddNDH}
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
                          className="form-control"
                          onChange={handleAddNDH}
                        ></input>
                      </th>
                      {/* chưa chỉnh số lượng từ string thành number */}
                      <th>
                        <label htmlFor="soluong" className="form-lable p-2">
                          <h8>Số Lượng</h8>
                        </label>
                        <input
                          id="soluong"
                          name="soluong"
                          type="text"
                          placeholder="Nhập Số Lượng"
                          className="form-control"
                          onChange={handleAddNDH}
                        ></input>
                      </th>

                      {/* chưa chỉnh đơn vị từ input thành dropdown */}
                      <th>
                        <label htmlFor="donvi" className="form-lable p-2">
                          <h8>Đơn Vị</h8>
                        </label>
                        <input
                          id="donvi"
                          name="donvi"
                          type="text"
                          placeholder="Nhập Đơn Vị"
                          className="form-control"
                          onChange={handleAddNDH}
                        ></input>
                      </th>

                      {/* chưa chỉnh nhà sản xuất từ input thành dropdown */}
                      <th>
                        <label htmlFor="nhasanxuat" className="form-lable p-2">
                          <h8>Nhà Sản Xuất</h8>
                        </label>
                        <input
                          id="nhasanxuat"
                          name="nhasanxuat"
                          type="text"
                          placeholder="Nhập Nhà Sản Xuất"
                          className="form-control"
                          onChange={handleAddNDH}
                        ></input>
                      </th>

                      {/* chưa chỉnh mã contianer từ input thành dropdown */}
                      <th>
                        <label htmlFor="idcontainer" className="form-lable p-2">
                          <h8>Mã Container</h8>
                        </label>
                        <input
                          id="idcontainer"
                          name="idcontainter"
                          type="text"
                          placeholder="Nhập Mã Container"
                          className="form-control"
                          onChange={handleAddNDH}
                        ></input>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="d-flex justify-content-center align-items-center h-100">
                <button type="submit" onClick={handleAddFormSubmit}>
                  Tạo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
