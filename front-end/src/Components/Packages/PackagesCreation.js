import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
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
  
 
  const [itempackage, setItemSP] = useState(null);
  const url = "/api/iteminpackage";
  useEffect(() => {
    axios
      .get(url,)
      .then((response) => {
        console.log(response.data);
        setItemSP(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 

  const [addItem, setAddItem] = useState({
    iditeminpackage: "",
    idpackage:"",
    name: "",
    amount: "",
    units: "",
    idproducers: "",
  });
  const handleAddItem = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData2 = { ...addItem };
    newFormData2[fieldName] = fieldValue;
    console.log("newFormData", newFormData2);
    setAddItem(newFormData2);
    
  };
  
  


  const Request2 = async () => {
    const res = await axios
      .post("/api/iteminpackage/create", {
        iditeminpackage: addItem.iditeminpackage,
        idpackage: addItem.idpackage,
        name: addItem.name,
        amount: addItem.amount,
        units: addItem.units,
        idproducers: addItem.idproducers,
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddFormSubmit2 = (event) => {
    event.preventDefault();
    Request2();
  };
  
  return (
    <div>
      <form class="row" 
      // onSubmit={handleAddFormSubmit}
      >
        <div>
          <h1>Create Container</h1>
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
          <Table striped bordered hover>
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
                    className="form-control"
                    onChange={handleAddItem}
                  ></input>
                </th>

                <th>
                  <label htmlFor="idpackage" className="form-lable p-2">
                    <h8>Mã Package</h8>
                  </label>
                  <input
                    id="idpackge"
                    name="idpackage"
                    type="text"
                    placeholder="Nhập Mã Sản Phẩm"
                    className="form-control"
                    onChange={handleAddItem}
                  ></input>
                </th>

                {/* chưa chỉnh tên sản phẩm từ input thành dropdown */}
                <th>
                  <label htmlFor="tensanpham" className="form-lable p-2">
                    <h8>Tên Sản Phẩm</h8>
                  </label>
                  <input
                    id="tensanpham"
                    name="name"
                    type="text"
                    placeholder="Nhập Tên Sản Phẩm"
                    className="form-control"
                    onChange={handleAddItem}
                  ></input>
                </th>
                {/* chưa chỉnh số lượng từ string thành number */}
                <th>
                  <label htmlFor="soluong" className="form-lable p-2">
                    <h8>Số Lượng</h8>
                  </label>
                  <input
                    id="soluong"
                    name="amount"
                    type="text"
                    placeholder="Nhập Số Lượng"
                    className="form-control"
                    onChange={handleAddItem}
                  ></input>
                </th>

                {/* chưa chỉnh đơn vị từ input thành dropdown */}
                <th>
                  <label htmlFor="donvi" className="form-lable p-2">
                    <h8>Đơn Vị</h8>
                  </label>
                  <input
                    id="donvi"
                    name="units"
                    type="text"
                    placeholder="Nhập Đơn Vị"
                    className="form-control"
                    onChange={handleAddItem}
                  ></input>
                </th>

                {/* chưa chỉnh nhà sản xuất từ input thành dropdown */}
                <th>
                  <label htmlFor="nhasanxuat" className="form-lable p-2">
                    <h8>Nhà Sản Xuất</h8>
                  </label>
                  <input
                    id="nhasanxuat"
                    name="idproducers"
                    type="text"
                    placeholder="Nhập Nhà Sản Xuất"
                    className="form-control"
                    onChange={handleAddItem}
                  ></input>
                </th>
                <th>
                  <button type="submit" onClick={handleAddFormSubmit2}>tạo sản phẩm</button>
                </th>

                {/* chưa chỉnh mã contianer từ input thành dropdown */}
              </tr>
            </thead>
            <tbody>
               
               <tr>
                <td></td>
               </tr>
             
            </tbody>
            
          </Table>
        </div>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
