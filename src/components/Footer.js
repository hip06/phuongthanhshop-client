import NameCategory from "./NameCategories";


const Footer = ({ color }) => {

    return (
        <div className='w-full p-[20px]' style={{ backgroundColor: '#ff424e' }}>
            <div className="w-[160px] h-[100px]">
                <NameCategory
                    category={'grosory'}
                    color={'#fff'}
                    index={1}
                />
            </div>
            <div className='text-white text-[7px] mb-[13px]'>
                <p>Địa chỉ:</p>
                <p>Số điện thoại:</p>
                <p>Email:</p>
            </div>

            <p className="text-white text-[10px] lg:text-base text-center">Copyright ©2022 All rights reserved | This website was developed by MOTION TREND  </p>
        </div>
    );
}

export default Footer;