import { useState, useEffect } from "react";
import axios from "axios";
import "./TestForm.css";
export const TestForm = () => {

  const [addform, setAddForm] = useState({
    container: "",
    transports: "",
    
  });
  const handleAddPhuongTien = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addform };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddForm(newFormData);
  };

  const [pt, setPT] = useState(null);
  const [transports, setTransports] = useState(null);
  const url = "/api/phuongtien";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  const [ct, setCT] = useState([]);
  useEffect(() => {
    const url = "api/container";
    axios
      .get(url)
      .then((response) => {
        setCT(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="background">
      <div className="testform">
        <i className="nameform">
          <h1>Tạo Order</h1>
        </i>
        <form className="form">
          <div className="mb-2 row">
            <label for="codeorder" class="col-md p-2">
              <h6>
                <i>Code Order</i>
              </h6>
            </label>
            <div class="col-sm">
              <input
                id="codeorder"
                name="codeorder"
                type="text"
                placeholder="Nhập Code Order"
                className="maorder form-control mb-3 "
              ></input>
            </div>
          </div>
          <div className="mb-2 row">
            <label for="codecontainer" class="col-sm ">
              <h6>
                <i>Code Container</i>
              </h6>
            </label>
            <div class="col-sm">
              <input
                id="codecontainer"
                name="codecontainer"
                type="text"
                placeholder="Nhập Code Container"
                className="maorder form-control mb-3 "
              ></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="host" class="col-md p-2">
              <h6>
                <i>Host</i>
              </h6>
            </label>
            <div class="col-sm">
              <input
                id="host"
                name="host"
                type="text"
                placeholder="Nhập Host"
                className="maorder form-control mb-3 "
              ></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="located" class="col-md p-2">
              <h6>
                <i>Located</i>
              </h6>
            </label>
            <div class="col-sm">
              <input
                id="located"
                name="located"
                type="text"
                placeholder="Nhập Located"
                className="maorder form-control mb-3 "
              ></input>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="transports" class="col-md p-2">
              <h6>
                <i>Transports</i>
              </h6>
            </label>
            <div class="col-sm">
              <select onChange={handleAddPhuongTien}>
                {pt.map((option) => (
                  <option value={option._id}>{option.code}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="">
            <button type="button" className="create btn btn-secondary ">
              Tạo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
