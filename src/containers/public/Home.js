import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <a href="/fashion">Fashion</a>
      <br/>
      <a href="/grocery">Grocery</a>
      <br/>
      <a href="/appliance">Appliance</a>
      <h1>i m here</h1>
    </div>
  );
};

export default Home;
