import "./App.less";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import User from "./Pages/User";
import Items from "./Pages/Items";
import Login from "./Pages/Login";

import { CreateItems } from "./Components/CreateItems";

import DefaultLayout from "./Components/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        <Route path="/user" element={<DefaultLayout><User /></DefaultLayout>} />
        <Route path="/item" element={<DefaultLayout><Items /></DefaultLayout>} />
        <Route path="/create" element={<CreateItems />} />

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
  