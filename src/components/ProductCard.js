import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction} from "../store/actions/userAction";
import {togglePopup} from '../store/actions/popupAction';

export const ProductCardCtHeight = ({
  id,
  image,
  name,
  color,
  costPerUnit,
  description,
  height,
}) => {
  const cartItem = useSelector(state => state.cart);
  const isLoggedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const convertPrice = (price) => {
    price = Number(price);
    price = price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    return price;
  };
  const isProductInCart = (id) => {
    for (let i = 0; i < cartItem.products.length; i++) {
      if (cartItem.products[i].id === id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div className="w-[174px] h-[312px] flex flex-col items-center bg-white rounded-[10px] overflow-hidden relative drop-shadow-md ">
      <div className={`mb-[20px]`}>
        <img className="w-full h-[187px]" src={image} />
      </div>
      <p
        className="absolute text-white rounded-[10px] top-[172px] left-[20px] text-[12px] px-[5px] py-[6px]"
        style={{ backgroundColor: color }}
      >
        {convertPrice(costPerUnit)}
      </p>
      <p className="text-align text-wrap left decoration-double font-large text-[15px] pl-[12px] pr-[4px] h-[40px] text-ellipsis overflow-hidden">
        {name}
      </p>
      <div className="absolute bottom-[0px] flex items-end justify-around w-full py-3">
        <AiOutlineShoppingCart size={20} color={color} onClick={() => {
          if (isLoggedIn.isLoggedIn) {
            if (!isProductInCart(id)) {
              dispatch(addToCartAction({
                id,
                image,
                name,
                color,
                costPerUnit,
              }))
            }
          }
          else {
            dispatch(togglePopup(true))
          }
        }} ></AiOutlineShoppingCart>
        <Link
          to="/product/"
          style={{ color: color }}
          className="text-[11px] font-bold"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};
