import { AiOutlineHome } from "react-icons/ai";
import CartItem from "../../components/CartItem";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import image from "../../assets/temp.png"

const Cart = () => {
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
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
            <div className='flex justify-between [&:not(:last-child)]:mb-[10px]'>
                <input type='checkbox'></input>
                <CartItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' cost={600000} quantity={1}></CartItem>
            </div>
        </section>

        <div className='w-full  bg-[#2898FF] h-[70px] fixed bottom-0 text-white flex w-full '>
           <div className='w-[75%] text-end self-center mr-[10px]'>
                <p>Tổng thanh toán</p>
                <p>1.800.000đ</p>
           </div>
           <button className='text-center w-[25%] bg-[#0083C2]'>Mua hàng</button>
        </div>
    </div>)
}

export default Cart;