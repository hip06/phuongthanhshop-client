import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";
import { useState, useEffect} from "react";
import { LoadingPageDesktop } from "../../components/LoadingPage";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { constant_page } from "../../ultils/constant";
import Popup from '../../components/Popup';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const { code } = useSelector((state) => state.app);
  const params = useParams();
  const popup =useSelector(state=>state.popup);
  // get 15 products best seller
  useEffect(() => {
    dispatch(actions.getProductBestSeller(
      { limitProduct: constant_page.limit_products_outstanding, order: ['soldCounter', 'DESC'], categoryCode: code }));
  }, [params["*"]]);
  //get 15 products current update
  useEffect(() => {
    dispatch(actions.getProductCurrentUpdate(
      { limitProduct: constant_page.limit_products_outstanding, order: ['updatedAt', 'DESC'], categoryCode: code }));
  }, [params["*"]]);
  //get products of category 25products per page =>> follow by category
  useEffect(() => {
    setPage(1)
    dispatch(actions.getProduct({ limitProduct: constant_page.limit_products, order: ['updatedAt', 'DESC'], categoryCode: code }));
  }, [params["*"]]);
  //get products of category 25products per page =>> follow by page
  useEffect(() => {
    dispatch(actions.getProduct({ limitProduct: constant_page.limit_products, order: ['updatedAt', 'DESC'], categoryCode: code, page: page }));
  }, [page]);

  return (
    <div className="w-full relative">
      {popup.showPopup && <Popup></Popup>}
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
