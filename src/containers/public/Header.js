import React, { useState } from "react";
import logofashion from "../../assets/logofashion.png";
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="flex items-center justify-around relative">
      <div className=" " onClick={() => { setModalShow(true) }}>
        <HiOutlineMenu size={26} ></HiOutlineMenu>
      </div>
      {modalShow && <div className="z-10 top-0 left-0 w-full fixed h-full" onClick={(e) => { setModalShow(false) }}>
        <div className="w-[80%] absolute z-100">
          <LayoutMenu></LayoutMenu>
        </div>
      </div>}

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
