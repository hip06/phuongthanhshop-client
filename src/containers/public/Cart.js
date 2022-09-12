import { AiOutlineHome } from "react-icons/ai";
import CartItem from "../../components/CartItem";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addToPaymentAction, deleteFromPaymentAction } from "../../store/actions/userAction"
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from "react";


const Cart = () => {
    const cartItem = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [totalPayment, setTotalPayment] = useState(0);
    useEffect(() => {
        totalPayment < 0 ? setTotalPayment(0) : setTotalPayment(totalPayment)
    }, [totalPayment])
    const [checkedItems, setCheckedItems] = useState(new Array(cartItem.products.length).fill(false));
    const checkboxHandler = (position) => {
        setCheckedItems((boxs) => {
            return boxs.map((box, i) => {
                if (i === position) return box = !box;
                else return box
            })
        })
    }
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
                return <div key={i} className='flex justify-between w-full [&:not(:last-child)]:mb-[10px]'>
                    <input type='checkbox' className='w-10%' onChange={() => {
                        checkboxHandler(i);
                        checkedItems[i] === true ? dispatch(deleteFromPaymentAction(JSON.stringify(product))) : dispatch(addToPaymentAction(JSON.stringify(product)))
                    }}></input>
                    <div className='w-[90%]'>
                        <CartItem image={product.image} name={product.name} cost={product.costPerUnit} quantity={1} isChecked={checkedItems[i]} totalPayment={totalPayment} setTotalPayment={setTotalPayment}></CartItem>
                    </div>
                </div>
            })}
        </section>

        <div className='w-full  bg-[#2898FF] h-[70px] fixed bottom-0 text-white flex w-full '>
            <div className='w-[75%] text-end self-center mr-[10px]'>
                <p>Tổng thanh toán</p>
                <p>{`${totalPayment} đ`}</p>
            </div>
            <Link to='/payment' className='w-[25%] bg-[#0083C2] flex items-center justify-center'>Mua hàng</Link>
        </div>
    </div>)
}

export default Cart;