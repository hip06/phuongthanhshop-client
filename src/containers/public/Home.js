import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";
import { useState, useEffect } from "react";
import { LoadingPageDesktop } from "../../components/LoadingPage";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const params = useParams()

  useEffect(() => {
    dispatch(actions.getCategory());
    dispatch(actions.getProduct('category=CAT1&page=3'));
  }, [params['*']]);

  return (
    <div className="w-full">
      {loading && <LoadingPageDesktop />}
      <Header />
      <Outlet />
      <Routes>
        <Route
          path="/:slug"
          element={<LayoutHome setLoading={setLoading} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Home;
