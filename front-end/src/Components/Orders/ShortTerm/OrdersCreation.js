import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import { Link, useParams } from "react-router-dom";

export const OrdersCreation = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

 

  // const onSubmit = async (values) => {
  //   const { codeorder, codecontainer, host, located } = values;
  //   await axios
  //     .post("/api/container/create", {
  //       codeorder: codeorder,
  //       codecontainer: codecontainer,
  //       host: host,
  //       located: located,
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // const formik = useFormik({
  //   initialValues: {
  //     codeorder: "",
  //     codecontainer: "",
  //     host: "",
  //     located: "",
  //   },
  //   onSubmit,
  // });
  const [ct, setCT] = useState(null);
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
  if (!ct) return null;
  console.log(ct);

  return (
    <div className="main d-flex justify-content-center align-items-center h-100">
      <div className="container h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
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
                  placeholder="Nhập Mã Đơn Hàng"
                  className="form-control"
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
                <input
                  id="idphuongtien"
                  name="idphuongtien"
                  type="text"
                  placeholder="Nhập Phương Tiện"
                  className="form-control"
                ></input>
              </div>
              <div className="buttonItems p-2">
                <Link to ='/containerscreation'>
                  <button>Tạo Containers</button>
                </Link>
                {/* <Button variant="primary" onClick={handleShow}>
                  Tạo Container
                </Button> */}

                {/* <Modal show={show} onHide={handleClose}>
                  <form onSubmit={formik.handleSubmit}>
                    <div>
                      <h1>Tạo Container</h1>
                    </div>
                    <br />
                    <div class="col-xs-6 col-md-7">
                      <label class="form-label p-2">Code Order</label>
                      <input
                        id="codeorder"
                        name="codeorder"
                        value={formik.values.codeorder}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div class="col-xs-6 col-md-7">
                      <label class="form-label p-2">Code Container</label>
                      <input
                        id="codecontainer"
                        name="codecontainer"
                        value={formik.values.codecontainer}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div class="col-xs-6 col-md-7">
                      <label class="form-label p-2">Code Package</label>
                      <input
                        id="host"
                        name="host"
                        value={formik.values.host}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div class="col-xs-6 col-md-7">
                      <label class="form-label p-2">Code Item</label>
                      <input
                        id="located"
                        name="located"
                        value={formik.values.located}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <br />
                    <button type="submit" class="abc">
                      Create
                    </button>
                  </form>
                </Modal> */}
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
                  <tbody>
          
                   
                  </tbody>
                </table>
              </div>

              {/* <div className="buttonItems p-2">
                <Link to="/packagescreation">
                  <Button type="primary" shape="round" icon={<PlusOutlined />}>
                    Tạo Packages
                  </Button>
                </Link>
              </div>

              <div>
                <table class="table" border="2">
                  <thead class="table">
                    <tr>
                      <th scope="col">Mã Orders</th>
                      <th scope="col">Mã Container</th>
                      <th scope="col">Mã Package</th>
                      <th scope="col">Chức Năng</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>

              <div className="buttonItems p-2">
                <button>Tạo Sản Phẩm</button>
              </div>

              <div>
                <table class="table" border="2">
                  <thead class="table">
                    <tr>
                      <th scope="col">Mã Order</th>
                      <th scope="col">Mã Container</th>
                      <th scope="col">Mã Package</th>
                      <th scope="col">Mã Sản Phẩm</th>
                      <th scope="col">Chức Năng</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div> */}
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
