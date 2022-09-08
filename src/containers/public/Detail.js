import image from "../../assets/temp.png";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbArrowBackUp } from 'react-icons/tb';

const Detail = (props) => {
    return <section className="relative h-screen relative">
        <div className=" absolute top-[20px] left-[20px] rounded-[50%] border-[#d9d9d9] border-[1px] bg-[#fff] ">
            <TbArrowBackUp className=" m-[10px]" size={28}></TbArrowBackUp>

        </div>
        <div className=" absolute top-[20px] right-[20px] rounded-[50%] border-[#d9d9d9] border-[1px] bg-[#fff] ">
            <AiOutlineShoppingCart className=' m-[10px]' size={28}></AiOutlineShoppingCart>
        </div>
        <div>
            <div className='w-full h-[372px]'>
                <img src={image} alt='hi' className='w-full'></img>
            </div>
            <div className='flex justify-around mt-[20px]'>
                <div className='w-[20%]'>
                    <img src={image} alt='hi' className='w-full'></img>
                </div>
                <div className='w-[20%]'>
                    <img src={image} alt='hi' className='w-full'></img>
                </div>
                <div className='w-[20%]'>
                    <img src={image} alt='hi' className='w-full'></img>
                </div>
                <div className='w-[20%]'>
                    <img src={image} alt='hi' className='w-full'></img>
                </div>
            </div>
        </div>

        <div className='px-[10px] mt-[10px] h-[400px] overflow-y-auto'>
            <div className='font-extrabold text-[20px] h-[50px]'>
                <p>Áo chống nắng nam nữ dày dặn cao cấp thấm hút mồ hôi , chống tia UV</p>
            </div>

            <div className='text-[#2898FF] text-[20px] mt-[10px]'>
                <p>600.000 VND</p>
            </div>

            <div className="mb-[100px] text-[15px]">
                <p>
                    Áo chống nắng nam cực mát (Full size M, L, XL):
                    • ngăn ngừa tia UV-400
                    • Đủ 4 Size M/L/XL/XXL:
                    + Size L: 50-60kg
                    + Size XL :  60 – 70kg
                    + Size XXL: 70-80kg
                    ....
                    Áo chống nắng nam cực mát (Full size M, L, XL):
                    • ngăn ngừa tia UV-400
                    • Đủ 4 Size M/L/XL/XXL:
                    + Size L: 50-60kg
                    + Size XL :  60 – 70kg
                    + Size XXL: 70-80kg
                    ....
                    Áo chống nắng nam cực mát (Full size M, L, XL):
                    • ngăn ngừa tia UV-400
                    • Đủ 4 Size M/L/XL/XXL:
                    + Size L: 50-60kg
                    + Size XL :  60 – 70kg
                    + Size XXL: 70-80kg
                    ....

                </p>
            </div>
        </div>
        <div className='flex bg-[#2898FF] text-white fixed bottom-0 w-full h-[80px] text-[17px]'>
            <button className='flex w-[70%] justify-center items-center'>
                <AiOutlineShoppingCart size={28} className='translate-y-[-3px]'></AiOutlineShoppingCart>
                <p className='ml-[10px]'>Thêm vào giỏ hàng</p>
            </button>
            <button className='bg-[#0083C2] w-[30%]'>Mua hàng</button>
        </div>

    </section>
}
export default Detail;