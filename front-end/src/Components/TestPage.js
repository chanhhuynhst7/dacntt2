import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { Link} from "react-router-dom";
import "./TestPage.css";
export const TestPage = () => {

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
          <button type="button" className="btnback" href="../">
            Back
          </button>
          <h1>Tạo Container</h1>
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
                className="btnhead btn btn-outline-secondary"
                onClick={handleShow}
              >
                <i>
                  <h5>Tạo</h5>
                </i>
              </button>
              <Modal show={show} onHide={handleClose}>
                <div className="bg">
                  <div className="tf">
                    <i className="nf">
                      <h1>Tạo Container</h1>
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
                          Tạo
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
                      <h6>Chức Năng</h6>
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
                  <Link to={`/packagescreation/${s._id}/create`}>
                    <button>Tạo Package</button>
                  </Link>

                  <Link
                    to={`/containerscreation/container/${s.codecontainer}/update`}>
                    <button>Update</button>
                  </Link>
                  <button>Delete</button>
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
