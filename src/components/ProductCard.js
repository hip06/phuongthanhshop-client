import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom"

export const ProductCardCtHeight = ({ image, name, color, costPerUnit, description, height }) => {
    const convertPrice = (price) => {
        price = Number(price)
        price = price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return (price)
    }
    return (
        <Link to={'/detail'} className="w-[180px] h-[312px] flex flex-col items-center bg-white rounded-[10px] overflow-hidden relative drop-shadow-md ">
            <div className={`mb-[20px]`}>
                <img className="w-full h-[187px]" src={image} />
            </div>
            <p className="absolute text-white rounded-[10px] top-[172px] left-[20px] text-[12px] px-[5px] py-[6px]" style={{ backgroundColor: color }}>{convertPrice(costPerUnit)}</p>
            <div className='w-full h-[10%]'>
                <span className='decoration-double font-large text-[13px] px-[5px] whitespace-nowrap overflow-hidden'>{name}</span>
            </div>
            <p className=' decoration-double font-large text-[10px] px-[5px] h-[10%]'>{description}</p>
            <div className='flex items-end justify-around w-full mt-[5px] h-[10%]'>
                <AiOutlineShoppingCart size={20} color={color}></AiOutlineShoppingCart>
                <Link to="/detail/" style={{ color: color }} className="text-[11px] font-bold">Xem chi tiết</Link>
            </div>
        </Link>
    );
}
