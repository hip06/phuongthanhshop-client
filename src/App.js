import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  Login,
  Feed,
  Detail,
  UserClient,
  Payment,
  Cart,
} from "./containers/public";
import {
  System,
  General,
  EditProduct,
  ManageProduct,
  ManageCategory,
  User,
  Bill,
  UpdateProfile,
} from "./containers/system";
import { path } from "./ultils/constant";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./store/actions";
import { useEffect } from "react";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Khi reload page get userdata again
  useEffect(() => {
    isLoggedIn && dispatch(actions.getCurrent());
    console.log(11);
  }, [isLoggedIn]);

  return (
    <div className="w-full h-full 2xl:w-[75%] 2xl:mx-auto">
      <Routes>
        {/*Public routes */}
        <Route path="/" element={<Navigate to="/home/fashion"></Navigate>} />
        <Route path={path.HOME} element={<Home />}></Route>
        <Route path={path.FEED} element={<Feed />} />
        <Route path={path.PAYMENT} element={<Payment />} />
        <Route path={path.CART} element={<Cart />} />
        <Route path={path.USERCLIENT} element={<UserClient />} />

        {/*Login route */}
        <Route path={path.LOGIN} element={<Login />} />

        {/*Private routes */}
        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.GENERAL} element={<General />} />
          <Route path={path.MANAGE_PRODUCT} element={<ManageProduct />} />
          <Route path={path.EDIT_PRODUCT} element={<EditProduct />} />
          <Route path={path.MANAGE_CATEGORY} element={<ManageCategory />} />
          <Route path={path.USER} element={<User />} />
          <Route path={path.BILL} element={<Bill />} />
          <Route path={path.UPDATE_PROFILE} element={<UpdateProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
