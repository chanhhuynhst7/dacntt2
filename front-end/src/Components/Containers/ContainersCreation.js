import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "./ContainersCreation.css"

export const ContainersCreation = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ct, setCT] = useState([]);
  const [addContainer, setAddContainer] = useState({
    codeorder: "",
    codecontainer: "",
    host: "",
    located: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleAddContainer = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addContainer };
    newFormData[fieldName] = fieldValue;

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
      .then((res) => {
        setIsSubmit(!isSubmit);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    Request();
  };
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
  }, [isSubmit]);

  return (
    <>
      <div>
        <i className="text-center">
          <Link to ="/orderscreation">
            <button type="button" className="btnback">
              Back
            </button>
          </Link>
          <h1>Create Container</h1>
        </i>
      </div>
      <div className="gridall">
        <div className="griddata">
          <div className="gridhead">
            <div className="gridleft">
              <i>
                <h3>List Container</h3>
              </i>
            </div>
            <div className="gridright">
              <button
                type="button"
                className="btncreate btn btn-outline-primary"
                onClick={handleShow}
              >
                <i>
                  <h5>Create</h5>
                </i>
              </button>
              <Modal show={show} onHide={handleClose}>
                <div className="bg">
                  <div className="tf">
                    <i className="nf">
                      <h1>Create Container</h1>
                    </i>
                    <form className="form" onSubmit={handleAddFormSubmit}>
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
                            placeholder="Enter Code Order"
                            className="order form-control mb-3 "
                            onChange={handleAddContainer}
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
                            placeholder="Enter Code Container"
                            className="order form-control mb-3 "
                            onChange={handleAddContainer}
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
                            placeholder="Enter Host"
                            className="order form-control mb-3 "
                            onChange={handleAddContainer}
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
                            placeholder="Enter Located"
                            className="order form-control mb-3 "
                            onChange={handleAddContainer}
                          ></input>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="create btn btn-outline-secondary"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
          <div className="gridbody">
            <table className="test table table-bordered  text-center">
              <thead>
                <tr>
                  <td>
                    <i>
                      <h6>Code Order</h6>
                    </i>
                  </td>
                  <td>
                    <i>
                      <h6>Code Container</h6>
                    </i>
                  </td>
                  <td>
                    <i>
                      <h6>Host</h6>
                    </i>
                  </td>
                  <td>
                    <i>
                      <h6>Located</h6>
                    </i>
                  </td>
                  <td>
                    <i>
                      <h6>Actions</h6>
                    </i>
                  </td>
                </tr>
              </thead>
              <tbody>
                {ct.map((s, index) => (
                  <tr key={index}>
                    <td>{s.codeorder}</td>
                    <td>{s.codecontainer}</td>
                    <td>{s.host}</td>
                    <td>{s.located}</td>
                    <td>
                      <button className="btn btn-outline-danger m-1">Delete</button>
                      <Link
                        to={`/containerscreation/container/${s.codecontainer}/update`}
                      >
                        <button className="btn btn-outline-secondary m-1">Update</button>
                      </Link>
                      <Link to={`/packagescreation/${s.codecontainer}/create`}>
                        <button className="btn btn-outline-primary m-1">Create Package</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
