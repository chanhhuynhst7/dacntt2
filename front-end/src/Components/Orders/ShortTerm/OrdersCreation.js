import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";

export const OrdersCreation = () => {
  const [ctn, setCTN] = useState(null);
  const url = "/api/container";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCTN(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!ctn) return null;
  console.log(ctn);

  //   const [addPackage, setAddPackage] = useState({
  //     idpackage: "",
  //     idorder: "",
  //     idcontainer: "",
  //     host: "",
  //     located: "",
  //     id: "",
  //     name: "",
  //     numbers: "",
  //     units: "",
  //     idproducers: "",
  //   });
  //   const handleAddContainer = (event) => {
  //     const fieldName = event.target.getAttribute("name");
  //     const fieldValue = event.target.value;

  //     const newFormData = { ...addPackage };
  //     newFormData[fieldName] = fieldValue;
  //     console.log("newFormData", newFormData);
  //     setAddPackage(newFormData);
  //   };

  //   const Request = async () => {
  //     const res = await axios
  //       .post("/api/package/create", {
  //         idpackage: addPackage.idpackage,
  //         idorder: addPackage.idorder,
  //         idcontainer: addPackage.idcontainer,
  //         host: addPackage.host,
  //         located: addPackage.located,
  //         id: addPackage.id,
  //         name: addPackage.name,
  //         numbers: addPackage.numbers,
  //         units: addPackage.units,
  //         idproducers: addPackage.idproducers,
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  //   const handleAddFormSubmit = (event) => {
  //     event.preventDefault();
  //     Request();
  //   };

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
                <Link to="/packagescreation">
                  <Button type="primary" shape="round" icon={<PlusOutlined />}>
                    Tạo Package
                  </Button>
                </Link>
              </div>

              <div>
                <table class="table" border="2">
                  <thead class="table">
                    <tr>
                      <th scope="col">Mã Package</th>
                      <th scope="col">Chức Năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {ndh.map((s) => ( */}
                    <tr>
                      <td></td>
                      <td>
                        <Link to="">
                          <td>
                            <button>Update</button>
                          </td>
                        </Link>
                        {/* delete đơn hàng chưa làm xong , delete được nhưng sai id */}
                        <button>Delete</button>
                        {/* view đơn hàng chưa làm xong ,view được nhưng view all*/}
                        <Link to="">
                          <td>
                            <button>View</button>
                          </td>
                        </Link>
                      </td>
                    </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>

              <div className="buttonItems p-2">
                <Link to="/containerscreation">
                  <Button type="primary" shape="round" icon={<PlusOutlined />}>
                    Tạo Container
                  </Button>
                </Link>
              </div>

              <div>
                <table class="table" border="2">
                  <thead class="table">
                    <tr>
                      <th scope="col">Mã Container</th>
                      <th scope="col">Chức Năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ctn.map((s) => (
                      <tr>
                        <td>{s.idcontainer}</td>
                        <td>
                          <Link to="">
                            <td>
                              <button>Update</button>
                            </td>
                          </Link>
                          {/* delete đơn hàng chưa làm xong , delete được nhưng sai id */}
                          <button>Delete</button>
                          {/* view đơn hàng chưa làm xong ,view được nhưng view all*/}
                          <Link to="">
                            <td>
                              <button>View</button>
                            </td>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
