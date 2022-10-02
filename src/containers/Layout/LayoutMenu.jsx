import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const LayoutMenu = ({ setModalShow, mainColor }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
  const app = useSelector((state) => state.app);
  const cart = useSelector((state) => state.cart);
  // const [mainColor,setMainColor] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    let newCategory = [];
    app.categories?.map((category) => {
      newCategory.push({
        content: category.valueVi,
        color: category.color,
        contentEn: category.valueEn,
      });
    });
    // categories.map((category) =>{
    //   if(params['*']===category.contentEn){
    //     setMainColor(category.color);

    //   }
    // })
    setCategories(newCategory);
  }, [app, app.categories]);

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
            onClick={() => {
              dispatch(actions.logout());
              dispatch(actions.removeAllCartAction());
            }}
          />
        </>
      )}
    </div>
  );
  const handleCloseMenu = () => {
    setTimeout(() => setModalShow(false), 500);
  };
  return (
    <div className="w-[300px] h-full bg-white flex flex-col items-center justify-center p-[20px] fixed">
      <div className="flex justify-center">
        <p style={{ fontFamily: "Ruda, sans-serif" }} className="text-[30px]">
          PhuongThanh
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-around">
          <div className="relative">
            <div>
              <AiOutlineShoppingCart size={26} />
            </div>
            <div
              className={`absolute top-[-5px] right-[-3px] rounded-[50%] w-[60%] h-[60%] text-[10px] flex justify-center items-end`}
              style={{ backgroundColor: mainColor }}
            >
              <p className='text-[white]'>{cart.count}</p>
            </div>
          </div>
          <p>Giá trị đơn hàng:0</p>
        </div>
        {button}
      </div>
      <div className="self-start w-full h-screen  ">
        {categories.map((category) => (
          <NavLink
            to={`/home/${category.contentEn}`}
            style={{
              color: category.color,
              fontSize: params["*"] === category.contentEn ? "25px" : "20px",
            }}
            className="animate-modalClose block border-b border-[rgba(0,0,0,60%)] [&:not(:first-child)]:mt-[20px]"
            onClick={() => handleCloseMenu()}
          >
            {" "}
            {category.content}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LayoutMenu;
