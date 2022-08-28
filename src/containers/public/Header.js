import React, { useState } from "react";
import image from "../../ultils/image"
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";

import {useParams} from "react-router-dom"


const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  const params=useParams();
  return (
    <div className="flex items-center justify-around relative h-[70px]">
      <div className=" " onClick={() => { setModalShow(true) }}>
        <HiOutlineMenu size={26} ></HiOutlineMenu>
      </div>
      {modalShow && <div className="z-10 top-0 left-0 w-full fixed h-full" onClick={(e) => {setModalShow(false) }}>
        <div className="w-[80%] absolute z-100" onClick={(e) => {e.stopPropagation();}}>
          <LayoutMenu></LayoutMenu>
        </div>
      </div>}

      <div>
        <BiSearchAlt size={26} ></BiSearchAlt>
      </div>

      <div>
        {params["*"]==='fashion'&&<img className="" src={image.logofashion}></img>}
        {params["*"]==='appliance'&&<img className="" src={image.logoappliance}></img>}
        {params["*"]==='grocery'&&<img className="" src={image.logogrocery}></img>}
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
