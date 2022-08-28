import React from "react";
import { Outlet,Route,Routes } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";


const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Routes>
        <Route path="/fashion" element={<LayoutHome></LayoutHome>}></Route>
      </Routes>
    </div>
  );
};

export default Home;
