import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

export const ProductCardCtHeight = ({
  image,
  name,
  color,
  costPerUnit,
  id
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const convertPrice = (price) => {
    price = Number(price);
    price = price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    return price;
  };
  const handleDispatch = () => {
    navigate(`/detail/${id}`)
    dispatch(actions.getProductByIdClient({ id: id}));
  }

  return (
    <div className="w-[200px] h-[320px] flex flex-col items-center bg-white rounded-[10px] overflow-hidden relative drop-shadow-md ">
      <div 
      onClick={() => handleDispatch()}
      className={`mb-[20px]`}>
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
        <AiOutlineShoppingCart size={20} color={color}/>
        <Link
          onClick={() => dispatch(actions.getProductByIdClient({ id: id}))}
          to={`/detail/${id}`}
          style={{ color: color }}
          className="text-[11px] font-bold"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  );
};
