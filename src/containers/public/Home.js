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
      {isSearching && <div className="relative bg-[#d9d9d9] p-[10px]">
        <input className='bg-white w-full rounded-[5px]'>
        </input>
        <p className='absolute top-0 right-0'>Tìm</p>
      </div>}
      <Outlet />
      <Routes>
        <Route path="/:slug" element={<LayoutHome></LayoutHome>}></Route>
      </Routes>
    </div>
  );
};

export default Home;
