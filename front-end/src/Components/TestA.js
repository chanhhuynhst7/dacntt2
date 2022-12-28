import React, { useState } from "react";

export const TestA = () => {
  const [C, setC] = useState([]);
  const [B, setB] = useState([]);
  const [A, setA] = useState({
    name: "",
    email: "",
  });
  const handleAdd = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...A };
    newFormData[fieldName] = fieldValue;
    console.log("newFormData", newFormData);
    setA(newFormData);

  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    
    B.push({codecontainer: A});
    console.log(B);
  };

  const handleAddAll = (event) => {
    event.preventDefault();
    C.push(B);
    console.log(C);
  };

  return (
    <>
    
      <div>
        <button type="button" onClick={handleAddAll} className="btn btn-secondary">
          Add
        </button>
      </div>
      <form class="ro" onSubmit={handleAddFormSubmit}>
        <div class="headj">
          <h1>Create NSX</h1>
        </div>
        <br />
        <div class="col-xs-6 col-md-7">
          <label class="form-label">Tên Nhà Sản Xuất</label>
          <input name="name" placeholder="..." onChange={handleAdd} />
        </div>
        <div class="col-xs-6 col-md-7">
          <label class="form-label">Email</label>
          <input name="email" placeholder="..." onChange={handleAdd} />
        </div>
        <div class="col-md-8">
          <br />
          <button type="submit" class="abc">
            Create
          </button>
        </div>
      </form>
    </>
  );
};
