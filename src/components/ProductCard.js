import {AiOutlineShoppingCart} from "react-icons/ai";
import {Link} from "react-router-dom"

export const ProductCardMobile = (props) => {
    return (
        <div className="w-[168px] h-[250px] flex flex-col items-center bg-white rounded-[10px] overflow-hidden relative ">
            <img className="w-[158px] h-[187px] mb-[10px]" src={props.image}></img>
            <p className="absolute text-white rounded-[10px] top-[165px] left-[20px] text-[12px] px-[5px] py-[6px]" style={{backgroundColor:props.color}}>{props.costPerUnit}</p>
            <p className='font-medium text-[10px] px-[5px]'>{props.name}</p>
            <div className='flex items-center justify-around w-full mt-[5px]'>
                <AiOutlineShoppingCart size={20} color={props.color}></AiOutlineShoppingCart>
                <Link to="/product/" style={{color: props.color}} className="text-[11px]">Xem chi tiết</Link>
            </div>
        </div>
    );
}
export const ProductCardDesktop = (props) => {
    return (
        <>
        </>
    );
}
