import React, { useState, useRef, useEffect } from "react";
import image from "../../ultils/image"
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";
import { getSite } from "../../ultils/constant"
import { useParams, Link, NavLink } from "react-router-dom"

const Header = ({ isSearching, setIsSearching }) => {


  const [modalShow, setModalShow] = useState(false);
  const params = useParams();
  const site = getSite(params);
  const headerRef = useRef();
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [params])
  return (
    <>
      <div className="flex lg:hidden items-center justify-around relative h-[70px]" ref={headerRef}>
        <div className=" " onClick={() => { setModalShow(true) }}>
          <HiOutlineMenu size={26} ></HiOutlineMenu>
        </div>
        {<div className={`z-50 top-0 left-0 w-full fixed h-full ${modalShow ? "" : 'hidden'} animate-modalShow`} setModalShow={setModalShow} onClick={(e) => { setModalShow(false) }}>
          <div className="w-[80%] absolute z-100" onClick={(e) => { e.stopPropagation(); }}>
            <LayoutMenu
              setModalShow={setModalShow}
            />
          </div>
        </div>}

        <div onClick={() => { setIsSearching(!isSearching) }}>
          <BiSearchAlt size={26} ></BiSearchAlt>
        </div>

        <div>
          {params["*"] === 'fashion' && <img className="h-[46px]" src={image.logofashion}></img>}
          {params["*"] === 'appliance' && <img className="h-[46px]" src={image.logoappliance}></img>}
          {params["*"] === 'grocery' && <img className="h-[46px]" src={image.logogrocery}></img>}
        </div>

        <div>
          <Link to='/user'>
            <BiUser size={26} ></BiUser>
          </Link>
        </div>

        <div className='relative'>
          <Link to='/cart'>
            <AiOutlineShoppingCart size={26} ></AiOutlineShoppingCart>
          </Link>
          <div className={`absolute top-[-5px] right-[-3px] rounded-[50%] w-[60%] h-[60%] text-[10px] flex justify-center items-end`} style={{ backgroundColor: site.color }} ><p>6</p></div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-around relative h-[70px]">
        <div className="pt-[8px]">
          {params["*"] === 'fashion' && <img className="h-[46px]" src={image.logofashion}></img>}
          {params["*"] === 'appliance' && <img className="h-[46px]" src={image.logoappliance}></img>}
          {params["*"] === 'grocery' && <img className="h-[46px]" src={image.logogrocery}></img>}
        </div>
        <div >
          <NavLink
            to="/home/fashion"
            style={{
              color: params["*"] === "fashion" ? "#3f9df3" : "",
              fontSize: params["*"] === "fashion" ? "25px" : '20px'
            }}
            className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
          >
            {" "}
            Fashion
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/appliance"
            style={{
              color: params["*"] === "appliance" ? "#EF7300" : "",
              fontSize: params["*"] === "appliance" ? "25px" : '20px'
            }}
            className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
          >
            Appliance
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/home/grocery"
            style={{
              color: params["*"] === "grocery" ? "#10C600" : "",
              fontSize: params["*"] === "grocery" ? "25px" : '20px'
            }}
            className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
          >
            Grocery
          </NavLink>
        </div>
        <div className="flex min-w-[90px]">
          <div>
            <Link to='/user'>
              <BiUser size={26} ></BiUser>
            </Link>
          </div>
          <div className='relative ml-[24px]'>
            <Link to='/cart'>
              <AiOutlineShoppingCart size={26} ></AiOutlineShoppingCart>
            </Link>
            <div className={`absolute top-[-5px] right-[-3px] rounded-[50%] w-[60%] h-[60%] text-[10px] flex justify-center items-end`} style={{ backgroundColor: site.color }} ><p>6</p></div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Header;
