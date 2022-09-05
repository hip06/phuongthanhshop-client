import React, { useEffect } from "react";
import { Button } from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { apiGetCurrent } from "../../apis/user";

import logo from "../../assets/logo.png";

const LayoutMenu = ({setModalShow}) => {
  const params = useParams();
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
            width="100%"
            height="32px"
            onClick={() => navigate("/login", { state: { flag: false } })}
          />
          <Button
            text={"Đăng ký"}
            bgColor="#d9d9d9"
            textColor="text-white"
            width="100%"
            height="32px"
            onClick={() => navigate("/login", { state: { flag: true } })}
          />
        </>
      )}
      {isLoggedIn && (
        <>
          <Button
            text={"Đăng xuất"}
            bgColor="#d9d9d9"
            width="100%"
            height="32px"
            textColor="text-white"
            onClick={() => dispatch(actions.logout())}
          />
          <Button
            text={"Quản lý"}
            bgColor="#d9d9d9"
            textColor="text-white"
            width="100%"
            height="32px"
            onClick={() => navigate("/system/")}
          />
        </>
      )}
    </div>
  );

  return (
      
      <div className="w-[300px] h-full bg-white flex flex-col items-center justify-center p-[20px] fixed">
        <div className="flex justify-center">
          <img src={logo} className='w-[80%]' ></img>
        </div>
        <div className="w-full">
          <div className="flex justify-around">
            <AiOutlineShoppingCart size={24}></AiOutlineShoppingCart>
            <p>Giá trị đơn hàng:0</p>
          </div>
          {button}
        </div>
        <div className="self-start w-full h-screen  ">
          <NavLink
            to="/home/fashion"
            style={{ color: params["*"] === "fashion" ? "#3f9df3" : "" ,
          fontSize: params["*"] === "fashion" ?"25px":'20px'}}
            className=" block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
            onClick={() => setModalShow(false)}
          >
            {" "}
            Fashion
          </NavLink>
          <NavLink
            to="/home/appliance"
            style={{ color: params["*"] === "appliance" ? "#EF7300" : "" ,
          fontSize: params["*"] === "appliance" ?"25px":'20px'}}
            className=" block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
            onClick={() => setModalShow(false)}
          >
            Appliance
          </NavLink>
          <NavLink
            to="/home/grocery"
            style={{ color: params["*"] === "grocery" ? "#10C600" : "" ,
          fontSize: params["*"] === "grocery" ?"25px":'20px'}}
            className=" block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
            onClick={() => setModalShow(false)}
          >
            Grocery
          </NavLink>
        </div>
      </div>
    
  );
};

export default LayoutMenu;
