import { AiOutlineHome } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import HistoryItem from "../../components/HistoryItem";
import image from "../../assets/temp.png"
import {useState} from "react";
import { useSelector } from "react-redux";
import {PopupChangePassword} from '../../components/Popup';
const UserClient = () => {
    const user = useSelector(state => state.auth).userCurrent;
    const [isChangePassword,setIsChangePassword] = useState(false);
    

    return (<div className="relative h-full">
        {isChangePassword&&<PopupChangePassword setIsChangePassword={setIsChangePassword}></PopupChangePassword>}
        <header className="flex items-center w-full h-[60px] ">
            <Link className='w-[15%] flex justify-center' to='/'>
                <AiOutlineHome size={28} className=""></AiOutlineHome>
            </Link>
            <Link className='w-[85%] flex justify-center translate-x-[-7%] translate-y-[14%]' to='/'>
                <img src={Logo} alt='hi' className='w-[70%]'></img>
            </Link>
        </header>

        <section className='bg-[#d9d9d9] w-full flex items-center justify-around h-[150px] mb-[10px] '>
            <div className=' '>
                <FaRegUserCircle size='100'></FaRegUserCircle>
            </div>
            <div className=' font-bold text-[12px] '>
                <p className='[&:not(:last-child)]:mb-[10px]'>{`Tên người dùng:${user.name}`}</p>
                <p className='[&:not(:last-child)]:mb-[10px]'>{`Email: ${user.email}`}</p>
                <p className='[&:not(:last-child)]:mb-[10px]'>{`Số điện thoại: ${user.phone ? user.phone : ''}`}</p>
            </div>
        </section>

        <section >
            <h1 className='font-bold text-[24px] text-center border-b-[1.5px] border-black'>Lịch sử đặt hàng</h1>
            <div className='overflow-y-auto h-[350px]'>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
                <HistoryItem image={image} name='Set Tập Gym Yoga Nam Áo Icado AT16, Quần Short Icado AT12' quantity='1' date='12/08/2022' cost='600.000đ'></HistoryItem>
            </div>
        </section>

        <button onClick={() =>{setIsChangePassword(true)}}>
            Đổi mật khẩu
        </button>
        <button className='w-full text-center text-[28px] bg-[#d9d9d9] py-[10px] fixed bottom-0'>
            Đăng xuất
        </button>
    </div>)
}

export default UserClient;
