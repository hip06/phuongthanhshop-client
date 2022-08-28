import image from "../ultils/image"
const Footer = ({ params }) => {
    let color;
    let logo;
    if (params === "fashion") {
        color = "#01567F";
        logo = image.logofashionwhite
    } else if (params === "appliance") {
        color = "#B25600";
        logo = image.logoappliancewhite
    } else { 
        color = "#096F00"; 
        logo=image.logogrocerywhite
    }


    return (
        <div className='w-full h-[130px] p-[20px]' style={{ backgroundColor: color }}>
            <img src={logo} className='mb-[5px]' ></img>

            <div className='text-white text-[7px] mb-[13px]'>
                <p>Địa chỉ:</p>
                <p>Số điện thoại:</p>
                <p>Email:</p>
            </div>

            <p className="text-white text-[7px] text-center">Copyright ©2022 All rights reserved | This website is made by MOTION TREND  </p>
        </div>
    );
}

export default Footer;