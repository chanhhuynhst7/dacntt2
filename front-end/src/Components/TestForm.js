import React from "react";
import "./TestForm.css";
export const TestForm = () => {
  return (
    <div className="background">
      <div className="testform">
        <i className="nameform">
          <h1>Tạo Container</h1>
        </i>
        <form className="form">
          <div className="mb-2 row">
            <label for="codeorder" class="col-md p-2"><h6><i>Code Order</i></h6></label>
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
          <label for="codecontainer" class="col-sm "><h6><i>Code Container</i></h6></label>
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
          <label for="host" class="col-md p-2"><h6><i>Host</i></h6></label>
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
          <label for="located" class="col-md p-2"><h6><i>Located</i></h6></label>
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
          <div className="">
            <button type="button" className="create ">Tạo</button>
          </div>
        </form>
      </div>
    </div>
  );
};
