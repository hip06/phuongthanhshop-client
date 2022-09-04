import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from "react"
const CartItem = ({ image, name, cost, quantity }) => {
    const [quantityNew, setQuantityNew] = useState(+quantity);
    let newCost = quantityNew * cost;
    const adjustQuantity = (<div className="flex text-[#8c8c8c] border-[1px] border-[#8c8c8c] rounded-[6px] p-[4px] text-[12px] items-center justify-between">
        <div onClick={() => { setQuantityNew((prev) => { return prev -= 1 }) }}>
            <AiOutlineMinus></AiOutlineMinus>
        </div>
        <p>{quantityNew}</p>
        <div onClick={() => { setQuantityNew((prev) => { return prev += 1 }) }}>
            <AiOutlinePlus></AiOutlinePlus>
        </div>
    </div>)
    const convertToVND = (cost) => {
        for (let i = 0; i < newCost.length; i++) {

        }
    }

    return (
        <div className='flex items-center justify-around [&:not(:last-child)]:mb-[10px]'>
            <div className='w-[15%]'>
                <img src={image} alt='hi' className='h-[58px] w-[50px] rounded-[3px]'></img>
            </div>
            <div className='w-[50%]'>
                <p className='font-medium text-[10px] text-[#404040]'>{name}</p>
            </div>
            <div className='w-[15%]'>
                {adjustQuantity}
            </div>
            <div className='text-center '>
                <p className='font-extrabold text-[12px] text-[#404040]'>{newCost}</p>
            </div>
        </div>
    );
}

export default CartItem;