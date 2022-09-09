import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";
import { useState } from "react";


const Home = () => {

  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <Header setIsSearching={setIsSearching} isSearching={isSearching} />
      {isSearching && <div className=" relative bg-[#d9d9d9] p-[10px]">
        <div className="relative bg-white rounded-[5px]">
          <input className='bg-white w-[83%] h-[30px] outline-none pl-[10px] '></input>
          <p className='absolute top-[50%] translate-y-[-50%] right-[5%]'>Tìm</p>
        </div>

      </div>}
      <Outlet />
      <Routes>
        <Route path="/:slug" element={<LayoutHome></LayoutHome>}></Route>
      </Routes>
    </div>
  );
};

export default Home;
