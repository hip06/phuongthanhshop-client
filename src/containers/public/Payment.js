import { AiOutlineHome } from "react-icons/ai";
import { PaymentItem } from "../../components/CartItem";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import image from "../../assets/temp.png"
import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import ApiPayment from "../../apis/payment";


const Payment = () => {
    const cartItem = useSelector(state => state.cart);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const res = await ApiPayment.createBill({
    //             email: 'longn03@gmail.com',
    //             address: 'hanoi',
    //             current_products: '4b539927-ba04-4991-a219-bdebed7fc495:1,3fb0ecab-648b-4b55-8ddc-e959547940cd:2'
    //         })
    //         console.log(res);
    //     }

    //     fetchProducts();
    // }, [])
    return (<div className='relative'>
        <header className="flex items-center w-full h-[60px] ">
            <Link className='w-[15%] flex justify-center' to='/home/fashion'>
                <AiOutlineHome size={28} className=""></AiOutlineHome>
            </Link>
            <Link className='w-[85%] flex justify-center translate-x-[-7%] translate-y-[14%]' to='/home/fashion'>
                <img src={Logo} alt='hi' className='w-[70%]'></img>
            </Link>
        </header>

        <section className=''>
            <h1 className='text-center font-bold text-[17px] bg-[#d9d9d9] py-[10px]'>THANH TOÁN</h1>
            <div className='border-[1px] border-[#777] p-[10px] rounded-[10px] m-[10px] mt-[15px]'>
                <div className='h-[200px] overflow-y-auto border-b-[1px] border-[#777]'>
                    {cartItem.productsPayment.map((product, i) => {
                        product=JSON.parse(product);
                        return <PaymentItem image={product.image} name={product.name} cost={product.costPerUnit} quantity={1} ></PaymentItem>

                    })}
                </div>
                <div className='text-end mt-[10px] font-bold'>
                    <p>{`Tổng đơn hàng: 100000đ`}</p>
                    <p>{`+ Phí vận chuyển: 100000đ`}</p>
                </div>
            </div>
        </section>

        <section className=" border-[1px] border-[#777] rounded-[10px] h-[150px] p-[10px] m-[10px] mt-[20px]">

            <div className="relative w-full mb-[13px]">
                <p className=" absolute font-bold top-[-28px] left-[50%] translate-x-[-50%] bg-white p-[5px] text-[15px]">Thông tin người nhận</p>
            </div>
            <input placeholder="Họ và tên" className='w-full bg-[#d9d9d9] [&:not(last-child)]:mb-[10px] h-[30px] rounded-[10px] pl-[10px]'></input>
            <input placeholder="Số điện thoại" className='w-full bg-[#d9d9d9] [&:not(last-child)]:mb-[10px] h-[30px] rounded-[10px] pl-[10px]'></input>
            <input placeholder="Địa chỉ nhận hàng" className='w-full bg-[#d9d9d9] [&:not(last-child)]:mb-[10px] h-[30px] rounded-[10px] pl-[10px]'></input>
        </section>

        <button className='w-full text-center text-[28px] bg-[#0083c2] py-[10px] fixed bottom-0 text-white'>
            Đặt hàng
        </button>
    </div>);
}

export default Payment;