import React, { useState, useRef, useEffect } from "react";
import image from "../../ultils/image"
import { HiOutlineMenu } from "react-icons/hi"
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";
<<<<<<< Updated upstream
import { getSite } from "../../ultils/constant"
import { useParams, Link } from "react-router-dom"
import {useSelector} from "react-redux";



const Header = ({isSearching,setIsSearching}) => {
  const cart=useSelector(state=>state.cart);

  const [modalshow, setmodalshow] = useState(false);
=======
import { getSite } from "../../ultils/constant";
import { useParams, Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NameCategory from "../../components/NameCategories";
import * as actions from '../../store/actions'

const Header = ({ isSearching, setIsSearching }) => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.app);
  const [modalShow, setModalShow] = useState(false);
  const [threeCategory, setThreeCategory] = useState([])
  const dispatch = useDispatch()
>>>>>>> Stashed changes
  const params = useParams();
  const site = getSite(params);
  const headerRef = useRef();
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
<<<<<<< Updated upstream
  }, [params])
=======
    dispatch(actions.savePreviousSite(params["*"]));
  }, [params]);
>>>>>>> Stashed changes

  const handleCloseModal = () => {
    setmodalshow(false);
  }
  return (
    <div className="flex items-center justify-around relative h-[70px]" ref={headerRef}>
      <div className=" " onClick={() => { setmodalshow(true) }}>
        <HiOutlineMenu size={26} ></HiOutlineMenu>
      </div>
      {<div className={`z-50 top-0 left-0 w-full fixed h-full ${modalshow ? "" : 'hidden'} animate-modalShow`} setModalShow={setmodalshow} onClick={(e) => { setmodalshow(false) }}>
        <div className="w-[80%] absolute z-100" onClick={(e) => { e.stopPropagation(); }}>
          <LayoutMenu
            setmodalshow={setmodalshow}
          />
        </div>
      </div>}

      <div onClick={()=>{setIsSearching(!isSearching)}}>
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
<<<<<<< Updated upstream

      <div className='relative'>
        <Link to='/cart'>
          <AiOutlineShoppingCart size={26} ></AiOutlineShoppingCart>
        </Link>
        <div className={`absolute top-[-5px] right-[-3px] rounded-[50%] w-[60%] h-[60%] text-[10px] flex justify-center items-end`} style={{ backgroundColor: site.color }} ><p>{cart.count}</p></div>
=======
      <div className="hidden lg:flex items-center justify-around relative h-[70px]">
        <div className="pt-[8px]">
          {categories?.map((category, index) => {
            let valueLowerCase = category.value.toLowerCase();
            if (params["*"] === valueLowerCase) {
              let color = category.color;
              return (
                <NameCategory
                  index={index}
                  category={category.value}
                  color={color}
                />
              );
            }
          })}
        </div>
        {categories?.map((category, index) => {
          let valueLowerCase = category.value.toLowerCase();
          return (
            <div>
              <NavLink
                onClick={() => {
                  dispatch(actions.getCodeCategory(category.code));
                }
                }
                key={"navlink-" + index}
                to={`/home/${valueLowerCase}`}
                style={{
                  color: category.color,
                  fontSize: params["*"] === valueLowerCase ? "25px" : "20px",
                }}
                className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
              >
                {category.value}
              </NavLink>
            </div>
          );
        })}
        <div className="flex min-w-[90px]">
          <div>
            <Link to="/user">
              <BiUser size={26}></BiUser>
            </Link>
          </div>
          <div className="relative ml-[24px]">
            <Link to={{ pathname: '/cart', state: { prevPath: location.pathname } }}>
              <AiOutlineShoppingCart size={26}></AiOutlineShoppingCart>
            </Link>
            <div
              className={`absolute top-[-5px] right-[-3px] rounded-[50%] 
            w-[60%] h-[60%] text-[10px] flex justify-center items-end`}
              style={{ backgroundColor: site.color }}
            >
              <p>6</p>
            </div>
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );

};

export default Header;
