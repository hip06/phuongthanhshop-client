import React, { useEffect } from "react";
import { Outlet,useLocation,Route,Routes } from "react-router-dom";
import Header from "./Header";
import LayoutHomeFashion from "../Layout/LayoutHomeFashion";
import LayoutHomeGrocery from "../Layout/LayoutHomeGrocery";
import LayoutHomeAppliance from "../Layout/LayoutHomeAppliance";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/fashion" element={<LayoutHomeFashion></LayoutHomeFashion>}></Route>
        <Route path="/grocery" element={<LayoutHomeGrocery></LayoutHomeGrocery>} />
        <Route path='appliance' element={<LayoutHomeAppliance></LayoutHomeAppliance>}/>
      </Routes>
    </div>
  );
};

export default Home;
