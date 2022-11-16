import "./App.less";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import { HomePage } from "./Pages/HomePage";
import User from "./Pages/User";
import Items from "./Pages/Items";
import Login from "./Pages/Login";
import { DoiTac } from "./Pages/DoiTac";
import { PhuongTien } from "./Pages/PhuongTien";
import { NhaSanXuat } from "./Pages/NhaSanXuat";

//Components
import { CreateItems } from "./Components/CreateItems";
import { CreateaNhaSanXuat } from "./Components/CreateaNhaSanXuat";
import { CreateDoitac } from "./Components/CreateDoitac";
import { CreatePhuongTien } from "./Components/CreatePhuongTien";
import { UpdateItem } from "./Components/UpdateItem";
import { UpdateNhaSanXuat } from "./Components/UpdateNhaSanXuat";
import { UpdateDoiTac } from "./Components/UpdateDoiTac";
import DefaultLayout from "./Components/DefaultLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<DefaultLayout><HomePage /></DefaultLayout>} />
        <Route path="/user" element={<DefaultLayout><User /></DefaultLayout>} />
        <Route path="/nhasanxuat" element={<DefaultLayout><NhaSanXuat /></DefaultLayout>} />
        <Route path="/item" element={<DefaultLayout><Items /></DefaultLayout>} />
        <Route path="/doitac" element={<DefaultLayout><DoiTac /></DefaultLayout>} />
        <Route path="/phuongtien" element={<DefaultLayout><PhuongTien /></DefaultLayout>} />
        <Route path="/createItem" element={<CreateItems />} />
        <Route path="/createNhasanxuat" element={<CreateaNhaSanXuat />} />
        <Route path="/createDoitac" element={<CreateDoitac />} />
        <Route path="/createPhuongtien" element={<CreatePhuongTien />} />
        <Route path="/updateItem/:id" element={<UpdateItem />} />
        <Route path="/updateNSX/:id" element={<UpdateNhaSanXuat />} />
        <Route path="/updateDT/:id" element={<UpdateDoiTac />} />

      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
  