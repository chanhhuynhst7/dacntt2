import { Form } from "semantic-ui-react";
import axios from "axios";
import { useFormik } from "formik";
import "./Customers.css";

export const CustomersCreation = () => {
  
  const onSubmit = async (values) => {
    const { tendoitac, email, diachi } = values;
    await axios.post("/api/doitac",{
           tendoitac:tendoitac,
           email: email,
           diachi: diachi
        })
        .catch((error) =>{
          console.log(error)
        })
  };
  const formik = useFormik({
    initialValues: {
      tendoitac: "",
      email: "",
      diachi: "",
    },
    onSubmit,
  });
  
  return (
    <div>
      <form class="ro" onSubmit={formik.handleSubmit}>
        <Form.Field>
          <div class="headj">
            <h1>Tạo Đối Tác</h1>
          </div>
          <br />
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Tên Đối Tác</label>
            <input
              id="tendoitac"
              name="tendoitac"
              value={formik.values.tendoitac}
              onChange={formik.handleChange}
            />
          </div>
        </Form.Field>
        <Form.Field>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Email</label>
            <input
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}          />
          </div>
        </Form.Field>
        <Form.Field>
          <div class="col-xs-6 col-md-7">
            <label class="form-label">Địa Chỉ</label>
            <input
              id="diachi"
              name="diachi"
              value={formik.values.diachi}
              onChange={formik.handleChange}/>
          </div>
        </Form.Field>
        <br />
        <button type="submit" class="abc"  >
          Create
        </button>
      </form>
    </div>
  );
};
