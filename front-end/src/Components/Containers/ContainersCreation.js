import React, { useState } from "react";
import axios from "axios";


export const ContainersCreation = () => {
    const [addContainer, setAddContainer] = useState({
        idcontainer: "",
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
            idcontainer: addContainer.idcontainer,
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
      return (
        <div>
          <form class="row" onSubmit={handleAddFormSubmit}>
            <div>
              <h1>Create Container</h1>
            </div>
            <br />
            <div>
              <label class="form-label">Mã Container</label>
              <input
                name="idcontainer"
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
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      );
}
