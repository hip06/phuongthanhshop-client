import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";

const System = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(true);
  const { isLoggedIn } = useSelector((state) => state.auth);
  //   if (!isLoggedIn) {
  //     return <Navigate to="/login" />;
  //   }

  return (
    <div className="flex h-screen w-screen bg-white">
      {isShowSidebar && <Sidebar />}
      <div className={`${isShowSidebar ? "w-r256" : "w-full"} h-full`}>
        <Header setIsShowSidebar={setIsShowSidebar} />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default System;
