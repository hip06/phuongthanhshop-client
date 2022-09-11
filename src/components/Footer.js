import NameCategory from "./NameCategories";
import { vi_uf8 } from "../ultils/constant";
import icons from "../ultils/icons";

const Footer = ({ color, category }) => {
    const { adress, phone1, phone2, email } = vi_uf8
    const { GrFacebook, SiZalo } = icons
    return (
        <div className='w-full p-[20px]' style={{ backgroundColor: '#721016' }}>
            <div className="w-[160px] h-[100px]">
                <NameCategory
                    category={category}
                    color={color}
                    index={1}
                />
            </div>
            <div className='w-[80%] text-[10px] lg:text-base mx-auto text-white mb-[24px] relative '>
                <p>Địa chỉ:
                    <a className="ml-[20px]" href="#"> {adress}</a>
                </p>
                <p>Số điện thoại: +84  {phone1}  |  {phone2}
                </p>
                <p>Email:
                    <a className="ml-[32px]" href="#">{email}</a>
                </p>
                <div className="absolute top-0 right-0 flex">
                    <GrFacebook className="mx-[8px]" size={40} />
                    <SiZalo className="mx-[8px]" size={40} />
                </div>
            </div>

            <p className="text-white text-[10px] lg:text-base text-center">Copyright ©2022 All rights reserved | This website was developed by MOTIONTECH team </p>
        </div>
    );
}

export default Footer;