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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(actions.getCategory())

  }, [])


  return (
    <div className="w-full">
      {loading && <LoadingPageDesktop />}
      <Header />
      <Outlet />
      <Routes>
        <Route path="/:slug" element={<LayoutHome setLoading={setLoading} />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
