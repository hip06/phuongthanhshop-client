import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { BiSearchAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LayoutMenu from "../Layout/LayoutMenu";
import { useParams, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NameCategory from "../../components/NameCategories";
import * as actions from '../../store/actions'

const limitCategory = [0, 1, 2]
const Header = ({ isSearching, setIsSearching, categoryProvided }) => {
  const cart = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.app);
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch()
  const params = useParams();
  const [mainColor, setMainColor] = useState('');

  const headerRef = useRef();
  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth" });
    categories.map((category) => {

      if (params['*'] === category.valueEn) {

        setMainColor(category.color);
      }
    })
  }, [params, categories]);

  return (
    <div>
      <div
        className="flex lg:hidden items-center justify-around relative h-[70px]"
        ref={headerRef}
      >
        <div
          className=" "
          onClick={() => {
            setModalShow(true);
          }}
        >
          <HiOutlineMenu size={26} />
        </div>
        {
          <div
            className={`z-20 top-0 left-0 w-full fixed h-full 
        ${modalShow ? "" : "hidden"} animate-modalShow`}
            setModalShow={setModalShow}
            onClick={(e) => {
              setModalShow(false);
            }}
          >
            <div
              className="w-[80%] absolute z-50"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <LayoutMenu mainColor={mainColor} setModalShow={setModalShow} />
            </div>
          </div>
        }

        <div
          onClick={() => {
            setIsSearching(!isSearching);
          }}
        >
          <BiSearchAlt size={26} />
        </div>

        <div>
        {!categoryProvided&&categories?.map((category) => {
            if (params["*"] === category?.valueEn) {
              let color = category?.color;
              return (
                <NameCategory
                  id={category.id}
                  category={category.valueEn}
                  color={color}
                />
              );
            }
          })}
          {categoryProvided&&<NameCategory
                  id={'unique-id-nameCard$'}
                  category={categoryProvided?.valueEn}
                  color={categoryProvided?.color}
                />}
        </div>

        <div>
          <Link to="/user">
            <BiUser size={26} />
          </Link>
        </div>

        <div className="relative">
          <Link to="/cart">
            <AiOutlineShoppingCart size={26} />
          </Link>
          <div
            className={`absolute top-[-5px] right-[-3px] rounded-[50%] w-[60%] h-[60%] text-[10px] flex justify-center items-end`}
            style={{ backgroundColor: mainColor }}
          >
            <p className='text-[white]'>{cart.count}</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-around relative h-[70px]">
        <div className="pt-[8px]">
          {!categoryProvided && categories?.map((category) => {
            if (params["*"] === category?.valueEn) {
              let color = category?.color;
              return (
                <NameCategory
                  id={category.id}
                  category={category.valueEn}
                  color={color}
                />
              );
            }
          })}
          {categoryProvided && <NameCategory
            id={'unique-id-nameCard$'}
            category={categoryProvided?.valueEn}
            color={categoryProvided?.color}
          />}
        </div>
        {categories?.filter((category, index) => limitCategory.some(item => item === index))?.map((category) => {
          return (
            <div onClick={() => dispatch(actions.getCodeCategory(category?.code))}>
              <NavLink
                key={category.id}
                to={`/home/${category?.valueEn}`}
                style={{
                  color: category.color,
                  fontSize: params["*"] === category?.valueEn ? "25px" : "20px",
                }}
                className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
              >
                {category.valueVi}
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
            <Link to="/cart">
              <AiOutlineShoppingCart size={26}></AiOutlineShoppingCart>
            </Link>
            <div
              className={`absolute top-[-5px] right-[-3px] rounded-[50%] 
            w-[60%] h-[60%] text-[10px] flex justify-center items-end`}
              style={{ backgroundColor: mainColor }}
            >
              <p className='text-[white]'>{cart.count}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
