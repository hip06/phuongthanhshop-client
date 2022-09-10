import { FaShippingFast, FaShopify } from 'react-icons/fa';
import { MdContactPhone } from 'react-icons/md';
import { RiShieldCheckFill } from 'react-icons/ri';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Banner = ({color}) => {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 342: 2, 894: 4}}
        >
            <Masonry className='' style={{color: color}}>
                <div className='flex flex-col items-center border-[2px] border-[#d9d9d9] h-[84px] pt-[5px] m-[10px] rounded-[10px] w-[161px] text-[12px] '>
                    <FaShippingFast size={30}></FaShippingFast>
                    <p>Vận chuyển <span className='font-bold'> MIỄN PHÍ</span></p>
                    <p>Với đơn hàng trên 500k</p>
                </div>

                <div className='flex flex-col items-center border-[2px] border-[#d9d9d9] h-[84px] pt-[5px] m-[10px] rounded-[10px] w-[161px] text-[12px] '>
                    <FaShopify size={30}></FaShopify>
                    <p>Mua hàng <span className='font-bold'>trực tuyến</span></p>
                </div>
                <div className='flex flex-col items-center border-[2px] border-[#d9d9d9] h-[84px] pt-[5px] m-[10px] rounded-[10px] w-[161px] text-[12px] '>
                    <MdContactPhone size={30}></MdContactPhone>
                    <p>Hỗ trợ <span className='font-bold'>tư vấn</span></p>
                </div>
                <div className='flex flex-col items-center border-[2px] border-[#d9d9d9] h-[84px] pt-[5px] m-[10px] rounded-[10px] w-[161px] text-[12px] '>
                    <RiShieldCheckFill size={30}></RiShieldCheckFill>
                    <p>Đảm bảo <span className='font-bold'>chính hãng</span></p>
                </div>
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default Banner;
