import "./App.less";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import { Login } from "./Pages/Login/Login";
//Components
import SideBar from "./Components/Layouts/SideBar";

import { Producers } from "./Pages/Producers/Producers";
import { Items } from "./Pages/Items/Items";
import { Customers } from "./Pages/Customers/Customers";
import { MyTransports } from "./Pages/Transports/MyTransports/MyTransports";
import { ImportOrders } from "./Pages/Orders/ShortTerm/ImportOrders";
import { ExportOrders } from "./Pages/Orders/ShortTerm/ExportOrders";
import { ViewImportOrders } from "./Pages/Orders/ShortTerm/ViewImportOrders";
import { ViewExportOrders } from "./Pages/Orders/ShortTerm/ViewExportOrders";
import { CustomersCreation } from "./Components/Customers/CustomersCreation";
import {ProducersCreation } from "./Components/Producers/ProducersCreation";
import { ItemsCreation } from "./Components/Items/ItemsCreation";
import { MyTransportsCreation } from "./Components/Transports/MyTransports/MyTransportsCreation";
import { CustomersUpdation } from "./Components/Customers/CustomersUpdation";
import { ItemsUpdation } from "./Components/Items/ItemsUpdation";
import { ProducersUpdation } from "./Components/Producers/ProducersUpdation";
import { HomePage } from "./Pages/Layouts/HomePage";
import { OrdersCreation } from "./Components/Orders/ShortTerm/OrdersCreation";
import { ContainersCreation } from "./Components/Containers/ContainersCreation";
import { PackagesCreation } from "./Components/Packages/PackagesCreation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<SideBar><HomePage /></SideBar>} />

        <Route path="/producers" element={<SideBar><Producers /></SideBar>} />

        <Route path="/items" element={<SideBar><Items /></SideBar>} />

        <Route path="/customers" element={<SideBar><Customers /></SideBar>} />

        <Route path="/mytransports" element={<SideBar><MyTransports /></SideBar>} />

        <Route path="/importorders" element={<SideBar><ImportOrders /></SideBar>} />

        <Route path="/viewimportorders/:id" element={<SideBar><ViewImportOrders /></SideBar>} />

        <Route path="/viewexportorders/:id" element={<SideBar><ViewExportOrders /></SideBar>} />

        <Route path="/exportorders" element={<SideBar><ExportOrders /></SideBar>} />

        <Route path="/customerscreation" element={<CustomersCreation />} />

        <Route path="/producerscreation" element={<ProducersCreation />} />

        <Route path="/itemscreation" element={<ItemsCreation />} />

        <Route path="/mytransportscreation" element={<MyTransportsCreation />} />
    
        <Route path="/orderscreation" element={<OrdersCreation />} />

        <Route path="/containerscreation" element={<ContainersCreation />} />

        <Route path="/packagescreation" element={<PackagesCreation />} />

        <Route path="/updatecustomers/:id" element={<CustomersUpdation />} />

        <Route path="/updateitems/:id" element={<ItemsUpdation />} />

        <Route path="/updateproducers/:id" element={<ProducersUpdation />} />


      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
  