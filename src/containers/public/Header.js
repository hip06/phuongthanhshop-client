import React, { useState, useRef, useEffect } from "react";
import image from "../../ultils/image"
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";
import { getSite } from "../../ultils/constant"
import { useParams, Link, NavLink } from "react-router-dom"
import { useSelector } from "react-redux";
import NameCategory from "../../components/NameCategories";


const Header = ({ isSearching, setIsSearching }) => {
  const cart = useSelector(state => state.cart);
  const { categories } = useSelector(state => state.app)
  const [modalShow, setModalShow] = useState(false);
  const params = useParams();
  const site = getSite(params);
  const headerRef = useRef();
  console.log(categories, params['*'])
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
  }, [params])

  return (
    <>
      <div className="flex lg:hidden items-center justify-around relative h-[70px]" ref={headerRef}>
        <div className=" " onClick={() => { setModalShow(true) }}>
          <HiOutlineMenu size={26} ></HiOutlineMenu>
        </div>
        {<div className={`z-20 top-0 left-0 w-full fixed h-full 
        ${modalShow ? "" : 'hidden'} animate-modalShow`}
          setModalShow={setModalShow}
          onClick={(e) => { setModalShow(false) }}>
          <div className="w-[80%] absolute z-50" onClick={(e) => { e.stopPropagation(); }}>
            <LayoutMenu
              setModalShow={setModalShow}
            />
          </div>
        </div>}

        <div onClick={() => { setIsSearching(!isSearching) }}>
          <BiSearchAlt size={26} ></BiSearchAlt>
        </div>

        <div>
          {
            categories.rows?.map((category, index) => {
              let valueLowerCase = category.value.toLowerCase()
              if (params["*"] === valueLowerCase) {
                let color = category.color
                return (<NameCategory index={index} category={category.value} color={color} />)
              }
            })
          }
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
          {
            categories.rows?.map((category, index) => {
              let valueLowerCase = category.value.toLowerCase()
              if (params["*"] === valueLowerCase) {
                let color = category.color
                return (<NameCategory index={index} category={category.value} color={color} />)
              }
            })
          }
        </div>
        {
          categories.rows?.map((category, index) => {
            let valueLowerCase = category.value.toLowerCase()
            return (
              <div >
                <NavLink
                  key={'navlink-' + index}
                  to={`/home/${valueLowerCase}`}
                  style={{
                    color: category.color,
                    fontSize: params["*"] === valueLowerCase ? "25px" : '20px'
                  }}
                  className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
                >
                  {category.value}
                </NavLink>
              </div>
            )
          })
        }
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
            <div className={`absolute top-[-5px] right-[-3px] rounded-[50%] 
            w-[60%] h-[60%] text-[10px] flex justify-center items-end`}
              style={{ backgroundColor: site.color }} ><p>6</p></div>
          </div>
        </div>
      </div>
    </>
  );

};
export default Header;
