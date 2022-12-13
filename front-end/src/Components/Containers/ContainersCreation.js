import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const ContainersCreation = () => {
  const [addContainer, setAddContainer] = useState({
    codeorder: "",
    codecontainer: "",
    host: "",
    located: "",
  });
  const handleAddContainer = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addContainer };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setAddContainer(newFormData);
  };

  const Request = async () => {
    const res = await axios
      .post("/api/container/create", {
        codeorder: addContainer.codeorder,
        codecontainer: addContainer.codecontainer,
        host: addContainer.host,
        located: addContainer.located,
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    Request();
  };
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
    <div>
      <form class="row" onSubmit={handleAddFormSubmit}>
        <div>
          <h1>Create Container</h1>
        </div>
        <br />
        <div>
          <label class="form-label">Mã Order</label>
          <input
            name="codeorder"
            placeholder="Mã Container"
            onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Mã Container</label>
          <input
            name="codecontainer"
            placeholder="Mã Container"
            onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Sở hữu của</label>
          <input
            name="host"
            placeholder="Sở hữu của"
            onChange={handleAddContainer}
          />
        </div>
        <div>
          <label class="form-label">Địa Chỉ</label>
          <input
            name="located"
            placeholder="Địa Chỉ"
            onChange={handleAddContainer}
          />
        </div>
        <div>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        <table class="table table-success table-striped" border="2">
          <thead class="table-dark">
            <tr>
              <th scope="col">Mã Order </th>
              <th scope="col">Mã Container</th>
              <th scope="col">Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            {ct.map((s) => (
              <tr>
                <td>{s.codeorder}</td>
                <td>{s.codecontainer}</td>
                <td>
                  <Link to="">
                    <td>
                      <button>Tạo Package</button>
                    </td>
                  </Link>
                  
                  <Link to ="">
                    <td>
                      <button>Update</button>
                    </td>
                  </Link>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
