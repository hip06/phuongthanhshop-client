import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";
import { useState, useEffect } from "react";
import { LoadingPageDesktop } from "../../components/LoadingPage";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const { code } = useSelector((state) => state.app);
  const params = useParams()

  useEffect(() => {
    setPage(1)
    dispatch(actions.getProduct({ category: code, page: 1 }));
    console.log(1);
  }, [params]);

  useEffect(() => {
    dispatch(actions.getProduct({ category: code, page: page }));
    console.log(2);
  }, [page]);


  return (
    <div className="w-full">
      {loading && <LoadingPageDesktop />}
      <Header />
      <Outlet />
      <Routes>
        <Route
          path="/:slug"
          element={<LayoutHome
            setLoading={setLoading}
            page={page}
            setPage={setPage} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Home;
