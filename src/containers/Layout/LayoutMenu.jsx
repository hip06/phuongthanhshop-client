import React from "react";
import { Button } from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";


import logo from "../../assets/logo.png";

const LayoutMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
  const button = (
    <div className="w-full flex items-center gap-5 py-5 justify-center flex-col">
      {isLoggedIn && <p>{`Xin chào ${userCurrent?.name}`}</p>}
      {!isLoggedIn && (
        <>
          <Button
            text={"Đăng nhập"}
            bgColor="#d9d9d9"
            textColor="text-white"
            width='100%'
            height='32px'
            onClick={() => navigate("/login", { state: { flag: false } })}
          />
          <Button
            text={"Đăng ký"}
            bgColor="#d9d9d9"
            textColor="text-white"
            width='100%'
            height='32px'
            onClick={() => navigate("/login", { state: { flag: true } })}
          />
        </>
      )}
      {isLoggedIn && (
        <>
          <Button
            text={"Đăng xuất"}
            bgColor="#d9d9d9"
            width='100%'
            height='32px'
            textColor="text-white"
            onClick={() => dispatch(actions.logout())}
          />
          <Button
            text={"Quản lý"}
            bgColor="#d9d9d9"
            textColor="text-white"
            width='100%'
            height='32px'
            onClick={() => navigate("/system/")}
          />
        </>
      )}
    </div>
  );

  return (
    <div className="w-[300px] h-full bg-white flex flex-col items-center justify-center p-[20px]">
      <div>
        <img src={logo}></img>
      </div>
      <div className='w-full'>
        <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
        {button}
      </div>
    </div>
  );
};

export default LayoutMenu;
