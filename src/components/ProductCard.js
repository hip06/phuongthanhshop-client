import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const ProductCardCtHeight = ({
  image,
  name,
  color,
  costPerUnit,
  description,
  height,
}) => {
  const convertPrice = (price) => {
    price = Number(price);
    price = price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    return price;
  };
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
        <AiOutlineShoppingCart size={20} color={color}></AiOutlineShoppingCart>
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
