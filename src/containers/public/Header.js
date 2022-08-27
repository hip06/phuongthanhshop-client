import React from "react";
import { Button } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
import logofashion from "../../assets/logofashion.png";
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";

const Header = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
  // const button= (
  //   <div className="w-full flex items-center gap-5 py-5 justify-center">
  //     {isLoggedIn && <small>{`xin chào ${userCurrent?.name}`}</small>}
  //     {!isLoggedIn && (
  //       <>
  //         <Button
  //           text={"Đăng nhập"}
  //           bgColor="bg-blue-700"
  //           textColor="text-white"
  //           onClick={() => navigate("/login", { state: { flag: false } })}
  //         />
  //         <Button
  //           text={"Đăng ký"}
  //           bgColor="bg-blue-700"
  //           textColor="text-white"
  //           onClick={() => navigate("/login", { state: { flag: true } })}
  //         />
  //       </>
  //     )}
  //     {isLoggedIn && (
  //       <>
  //         <Button
  //           text={"Đăng xuất"}
  //           bgColor="bg-red-700"
  //           textColor="text-white"
  //           onClick={() => dispatch(actions.logout())}
  //         />
  //         <Button
  //           text={"Quản lý"}
  //           bgColor="bg-sky-700"
  //           textColor="text-white"
  //           onClick={() => navigate("/system/")}
  //         />
  //       </>
  //     )}
  //   </div>
  // );
  return (
    <div className="flex items-center justify-around relative">
      <div className=" ">
        <HiOutlineMenu size={26} ></HiOutlineMenu>
      </div>
      <div className="absolute z-10 top-0 left-0 w-[80%]">
        <LayoutMenu></LayoutMenu>
      </div>

      <div>
        <BiSearchAlt size={26} ></BiSearchAlt>
      </div>

      <div>
        <img className="translate-y-[10px]" src={logofashion}></img>
      </div>

      <div>
        <BiUser size={26} ></BiUser>
      </div>

      <div>
        <AiOutlineShoppingCart size={26} ></AiOutlineShoppingCart>
      </div>
    </div>
  );

};

export default Header;
