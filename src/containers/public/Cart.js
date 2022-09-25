import { AiOutlineHome } from "react-icons/ai";
import CartItem from "../../components/CartItem";

import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { addToPaymentAction, deleteFromPaymentAction, updatePaymentAction } from "../../store/actions/userAction"
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from '../../components/Footer'
import Payment from "./Payment";
import {deleteAllPaymentsAction} from "../../store/actions/userAction"
    
const Cart = () => {
    let screenWidth;
    window.onresize=function(){
        screenWidth=window.innerWidth;
    }
    const cartItem = useSelector(state => { return state.cart });
    const dispatch = useDispatch();
    const [totalPayment, setTotalPayment] = useState(0);
    const [quantities, setQuantity] = useState(new Array(cartItem.products.length).fill(1));
    const checkboxHandler = (position) => {
        setCheckedItems((boxs) => {
            return boxs.map((box, i) => {
                if (i === position) return box = !box;
                else return box
            })
        })
    }
    useEffect(() => {
        totalPayment < 0 ? setTotalPayment(0) : setTotalPayment(totalPayment)

    }, [totalPayment])
    const [checkedItems, setCheckedItems] = useState(new Array(cartItem.products.length).fill(false));
    const addQuantityHandle = (position, id) => {
        setQuantity((quantities) => {
            return quantities.map((quantity, i) => {
                if (i === position) {
                    quantity += 1;
                    dispatch(updatePaymentAction({ id, quantity }))
                }
                else quantity = quantity;

                return quantity;
            })
        })
    }
    const minusQuantityHandle = (position, id) => {
        setQuantity((quantities) => {
            return quantities.map((quantity, i) => {
                if (i === position) {
                    if (quantity > 0)
                        quantity -= 1;
                    dispatch(updatePaymentAction({ id, quantity }))
                }
                else quantity = quantity;
                return quantity;
            })
        })

    }

    return (<div>
        <header className="flex items-center w-full h-[60px] border-b-[1px] border-[#9f9f9f] md:hidden">
            <Link className='w-[15%] flex justify-center' to='/home/fashion'>
                <AiOutlineHome size={28} className=""></AiOutlineHome>
            </Link>
            <Link className='w-[85%] flex justify-center translate-x-[-7%] translate-y-[5%]' to='/home/fashion'>
                <p style={{ fontFamily: 'Ruda, sans-serif' }} className='text-[30px]'>PhuongThanh</p>
            </Link>
        </header>
        <header className='hidden md:block' onClick={()=>{dispatch(deleteAllPaymentsAction())}}>
            <Header></Header>
        </header>

        <section className={`z-20 p-[10px] w-full h-[500px] lg:flex lg:h-auto lg:justify-between lg:px-[20px] pt-[20px] ${+screenWidth>=1024?'overflow-y-auto':''}`}>
            <div className='w-full lg:w-[55%]'>
                <p className='hidden lg:block lg:text-black lg:text-center lg:font-bold lg:text-[26px] lg:border-[#9f9f9f] lg:border-b-[2px] lg:mb-[10px] '>Giỏ hàng</p>

                {cartItem.products.map((product, i) => {
                    product.quantity = quantities[i];

                    return <div key={i} className='flex justify-between w-full [&:not(:last-child)]:mb-[10px]'>
                        <input type='checkbox' className='w-10%' onChange={() => {
                            checkboxHandler(i);
                            checkedItems[i] === true ? dispatch(deleteFromPaymentAction(JSON.stringify(product))) : dispatch(addToPaymentAction(JSON.stringify(product)))
                        }}></input>
                        <div className='w-[90%]'>
                            <CartItem i={i} id={product.id} image={product.image} name={product.name} cost={product.costPerUnit} quantity={quantities[i]} addQuantity={addQuantityHandle} minusQuantity={minusQuantityHandle} isChecked={checkedItems[i]} totalPayment={totalPayment} setTotalPayment={setTotalPayment}></CartItem>
                        </div>
                    </div>
                })}
            </div>

            <div className="hidden lg:block lg:w-[35%] h-[1030px]">
                <Payment></Payment>
            </div>

        </section>

        <div className='w-full  bg-[#2898FF] h-[70px] fixed bottom-0 text-white flex lg:hidden'>
            <div className='w-[75%] text-end self-center mr-[10px]'>
                <p>Tổng thanh toán</p>
                <p>{`${totalPayment} đ`}</p>
            </div>
            <Link to='/payment' className='w-[25%] bg-[#0083C2] flex items-center justify-center'>Mua hàng</Link>
        </div>


        <footer className='hidden lg:block z-10'>
            <Footer></Footer>
        </footer>
    </div>)
}

export default Cart;