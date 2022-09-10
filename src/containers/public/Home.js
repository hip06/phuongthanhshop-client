import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";
import { useState, useEffect } from "react";
import { LoadingPageDesktop } from '../../components/LoadingPage'
import * as actions from '../../store/actions'
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch()
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(actions.getCategory())

  }, [])


  return (
    <div>
      {loading && <LoadingPageDesktop />}
      <Header setIsSearching={setIsSearching} isSearching={isSearching} />
      {isSearching && <div className=" relative bg-[#d9d9d9] p-[10px]">
        <div className="relative bg-white rounded-[5px]">
          <input className='bg-white w-[83%] h-[30px] outline-none pl-[10px] '></input>
          <p className='absolute top-[50%] translate-y-[-50%] right-[5%]'>Tìm</p>
        </div>
      </div>}
      <Outlet />
      <Routes>
        <Route path="/:slug" element={<LayoutHome setLoading={setLoading} />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
