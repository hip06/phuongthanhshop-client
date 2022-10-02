import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Header from "./Header";
import LayoutHome from "../Layout/LayoutHome";
import { useState, useEffect } from "react";
import { LoadingPageDesktop } from "../../components/LoadingPage";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { constant_page } from "../../ultils/constant";
import { filters } from "../../ultils/constant";
import PopupCart,{PopupAddToCart} from '../../components/Popup';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)
  const { code } = useSelector((state) => state.app);

  const [selectedOption, setSelectedOption] = useState(filters[0])
  const [searchOnCategory, setSearchOnCategory] = useState('')
  const popup = useSelector(state => state.popup);
  const params = useParams()
  // get 15 products best seller
  useEffect(() => {

    setPage(1)
    setSearchOnCategory('')
    dispatch(actions.getProductBestSeller(
      { limitProduct: constant_page.limit_products_outstanding, order: ['soldCounter', 'DESC'], categoryCode: code }));
    dispatch(actions.getProductCurrentUpdate(
      { limitProduct: constant_page.limit_products_outstanding, order: ['updatedAt', 'DESC'], categoryCode: code }));
  }, [params["*"]]);
  //get products of category 25products per page =>> follow by category && oder
  useEffect(() => {
    const filter = Object.values(selectedOption.sort);
    dispatch(actions.getProduct({ limitProduct: constant_page.limit_products, order: [...filter], categoryCode: code, page: page, name: searchOnCategory }));
  }, [params["*"], selectedOption, page, searchOnCategory]);

  return (
    <div className="w-full relative">
      {popup.showPopup && <PopupCart></PopupCart>}
      {popup.showPopupAddToCart.isShow &&<PopupAddToCart></PopupAddToCart>}
      {loading && <LoadingPageDesktop />}
      <Header />
      <Outlet />
      <Routes>
        <Route
          path="/:slug"
          element={<LayoutHome
            setLoading={setLoading}
            page={page}
            setPage={setPage}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            searchOnCategory={searchOnCategory}
            setSearchOnCategory={setSearchOnCategory} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Home;
