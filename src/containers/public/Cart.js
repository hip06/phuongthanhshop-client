import { AiOutlineHome } from "react-icons/ai";
import CartItem from "../../components/CartItem";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import image from "../../assets/temp.png"
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import ApiGetProduct from "../../apis/product";

const Cart = () => {
    const cartItem = useSelector(state => state.cart);
    const [totalPayment,setTotalPayment]=useState(0);
    return (<div>
        <header className="flex items-center w-full h-[60px] border-b-[1px] border-[#9f9f9f]">
            <Link className='w-[15%] flex justify-center' to='/home/fashion'>
                <AiOutlineHome size={28} className=""></AiOutlineHome>
            </Link>
            <Link className='w-[85%] flex justify-center translate-x-[-7%] translate-y-[14%]' to='/home/fashion'>
                <img src={Logo} alt='hi' className='w-[70%]'></img>
            </Link>
        </header>

        <section className='p-[10px] w-full h-[500px] overflow-y-auto'>
            {cartItem.products.map((product, i) => {
                return <div className='flex justify-between w-full [&:not(:last-child)]:mb-[10px]'>
                    <input type='checkbox' className='w-10%'></input>
                    <div className='w-[90%]'>
                        <CartItem image={product.image} name={product.name} cost={product.costPerUnit} quantity={1} totalPayment={totalPayment} setTotalPayment={setTotalPayment}></CartItem>
                    </div>
                </div>
            })}
        </section>

        <div className='w-full  bg-[#2898FF] h-[70px] fixed bottom-0 text-white flex w-full '>
            <div className='w-[75%] text-end self-center mr-[10px]'>
                <p>Tổng thanh toán</p>
                <p>{`${totalPayment} đ`}</p>
            </div>
            <button className='text-center w-[25%] bg-[#0083C2]'>Mua hàng</button>
        </div>
    </div>)
}

export default Cart;