import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../store/actions/userAction"
import {useNavigate} from "react-router-dom";

const isInArray=(ob,list)=>{
    for(let i=0; i<list.length; i++)
    {
        if(list[i].id==ob.id) return true;
    }
    return false;
}

export const ProductCardCtHeight = ({ id, image, name, color, costPerUnit, description }) => {
    const navigate=useNavigate();
    const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const convertPrice = (price) => {
        price = Number(price)
        price = price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
        return (price)
    }
    return (
        <div to={'/detail'} className="w-[158px] h-[260px] flex flex-col items-center bg-white rounded-[10px] overflow-hidden relative drop-shadow-md ">
            <div className={`mb-[20px]`}>
                <img className="w-full h-[163px]" src={image} />
            </div>
            <p className="absolute text-white rounded-[10px] top-[147px] left-[20px] text-[12px] px-[5px] py-[6px]" style={{ backgroundColor: color }}>{convertPrice(costPerUnit)}</p>
            <div className='w-full h-[16%]'>
                <p className='font-large text-[11px] px-[5px] '>{name}</p>
            </div>
            <div className='flex items-end justify-around w-full mt-[5px] h-[10%]'>
                <div onClick={() => {
                    if (isLoggedIn) { 
                        // if(cart.productIds.indexOf(id)===-1) {
                        //     dispatch(addToCartAction(id)); 
                        // }
                        if (isInArray({id,image,name,costPerUnit},cart.products)===false) {
                            dispatch(addToCartAction({id,image,name,costPerUnit}))
                        }
                    }
                    else {
                        navigate('/login');
                    }
                }}>
                    <AiOutlineShoppingCart size={20} color={color}></AiOutlineShoppingCart>
                </div>
                <Link to="/detail/" style={{ color: color }} className="text-[11px] font-bold">Xem chi tiết</Link>
            </div>
        </div>
    );
}
