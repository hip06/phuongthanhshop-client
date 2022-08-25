import { ButtonMedium } from "../../components/Button"
import image from "../../assets/temp.png"
import { FiSearch } from "react-icons/fi"

const User = () => {

    const tempUser = [{
        avata: '',
        name: 'Nguyen Van A',
        phone: '01234567789',
        email: 'longn03@gmail.com'
    },
    {
        avata: '',
        name: 'Nguyen Van A',
        phone: '01234567789',
        email: 'longn03@gmail.com'
    },
    {
        avata: '',
        name: 'Nguyen Van A',
        phone: '01234567789',
        email: 'longn03@gmail.com'
    }]

    const renderUser = tempUser.map((user, i) => <div className="flex rounded w-full bg-white items-center h-[90px] [&:not(:first-child)]:mt-2">
        <div className='w-[3%] pl-[1%]'>
            <p>{i + 1}</p>
        </div>

        <div className='w-[10%]'>
            <img src={image} className=''></img>
        </div>
        <div className='w-[10%]'>
            <p>{user.name}</p>
        </div>
        <div className='w-[10%]'>
            <p>{user.phone}</p>
        </div>

        <div className='w-[10%]'>
            <p>{user.email}</p>
        </div>
        <ButtonMedium content='Sửa' color='#4ED14B'></ButtonMedium>
        <ButtonMedium content='Xóa' color='#CF2B2B'></ButtonMedium>
    </div>)

    return <div>
        <h1 className="text-3xl">Quản lí người dùng</h1>

        <div className="bg-[#d9d9d9] h-[64px] flex items-center justify-center rounded-xl">
            <input className="w-[80%] h-[60%] mr-[10px]"></input>
            <FiSearch size={30} ></FiSearch>
        </div>

        <div className='bg-[#d9d9d9] p-[10px] mt-[20px] rounded-xl'>
            <div className="flex">
                <div className='w-[3%] font-bold pl-[0.8%]'>ID</div>
                <div className='w-[10%] font-bold'>Ảnh đại diện</div>
                <div className='w-[10.5%] font-bold'>Tên người dùng</div>
                <div className='w-[13%] font-bold' >Số điện thoại</div>
                <div className='w-[10%] font-bold'>Email</div>
            </div>
            {renderUser}
        </div>
    </div>
}

export default User;
