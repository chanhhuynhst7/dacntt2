import React, { useState, useEffect, useParams } from "react";
import Table from "react-bootstrap/Table";

import axios from "axios";

export const ViewExportOrders = () => {
    const [size, setSize] = useState("large");
    //get sản phẩm
    const [xdh, setXDH] = useState(null);
    const url = "/api/xuatdonhang";
    useEffect(() => {
      axios
        .get(url)
        .then((response) => {
            setXDH(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    if (!xdh) return null;
    console.log(xdh);
  
    return (
      <div className="main d-flex justify-content-center align-items-center h-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6 nhapdonhang">
              <form className="p-4">
                <h2 className="text-center">Xuất Hàng</h2>
                <div className="form-group">
                  <label htmlFor="iddonhang" className="form-lable p-2">
                    <h5>Mã Đơn hàng</h5>
                  </label>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {xdh.map((s) => (
                        <tr>
                          <td>{s.iddonhang}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="form-group">
                  <label htmlFor="tu" className="form-lable p-2">
                    <h5>Từ</h5>
                  </label>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {xdh.map((s) => (
                        <tr>
                          <td>{s.tu}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
  
                <div className="form-group">
                  <label htmlFor="den" className="form-lable p-2">
                    <h5>Đến</h5>
                  </label>
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {xdh.map((s) => (
                        <tr>
                          <td>{s.den}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                  <table>
                    <thead>
                      <tr>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {xdh.map((s) => (
                        <tr>
                          <td>{s.idphuongtien}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {xdh.map((s) => (
                        <tr>
                          <td></td>
                          <td>{s.idcontainer}</td>
                        </tr>
                      ))}
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
                        </th>
  
                        {/* chưa chỉnh tên sản phẩm từ input thành dropdown */}
                        <th>
                          <label htmlFor="tensanpham" className="form-lable p-2">
                            <h8>Tên Sản Phẩm</h8>
                          </label>
                        </th>
                        {/* chưa chỉnh số lượng từ string thành number */}
                        <th>
                          <label htmlFor="soluong" className="form-lable p-2">
                            <h8>Số Lượng</h8>
                          </label>
                        </th>
  
                        {/* chưa chỉnh đơn vị từ input thành dropdown */}
                        <th>
                          <label htmlFor="donvi" className="form-lable p-2">
                            <h8>Đơn Vị</h8>
                          </label>
                        </th>
  
                        {/* chưa chỉnh nhà sản xuất từ input thành dropdown */}
                        <th>
                          <label htmlFor="nhasanxuat" className="form-lable p-2">
                            <h8>Nhà Sản Xuất</h8>
                          </label>
                        </th>
  
                        {/* chưa chỉnh mã contianer từ input thành dropdown */}
                        <th>
                          <label htmlFor="idcontainer" className="form-lable p-2">
                            <h8>Mã Container</h8>
                          </label>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {xdh.map((s) => (
                        <tr>
                          <td></td>
                          <td>{s.idsanpham}</td>
                          <td>{s.tensanpham}</td>
                          <td>{s.soluong}</td>
                          <td>{s.donvi}</td>
                          <td>{s.nhasanxuat}</td>
                          <td>{s.idcontainer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}
