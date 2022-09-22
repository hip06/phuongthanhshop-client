import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from "../components/Button"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { togglePopup } from '../store/actions/popupAction';
const Popup = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.app);
    const [mainColor, setMainColor] = useState("");
    const params = useParams();
    useEffect(() => {
        categories?.map((category) => {
            if (params['*'] === category?.valueEn) {

                setMainColor(category.color);
            }
        });
    }, [categories]);
    const navigate = useNavigate();
    return (<div className="fixed h-screen w-screen bg-[rgba(0,0,0,.25)] flex justify-center items-center" style={{ zIndex: 60 }} onClick={() => { dispatch(togglePopup(false)) }}>
        <div className='w-[85%] md:w-[60%] lg:w-[40%] bg-white rounded-[10px] border-white border-[10px] relative'>
            <p onClick={() => { dispatch(togglePopup(false)) }} className='absolute top-[-5px] right-[-5px] rounded-[50%] text-[10px] w-[16px] h-[16px] flex justify-center items-end text-white' style={{ backgroundColor: mainColor }}>X</p>
            <p className='font-bold uppercase text-center'>Có vẻ bạn chưa đăng nhập</p>
            <p className='text-[14px] mb-[5px]'> Vui lòng đăng nhập để thêm sản phẩm vào giỏ</p>
            <div onClick={() => { dispatch(togglePopup(false)) }} className='mb-[5px]'>
                <Button
                    text={"Đăng nhập"}
                    bgColor={mainColor}
                    textColor="white"
                    width="100%"
                    height="32px"
                    onClick={() => navigate("/login", { state: { flag: false } })}
                />
            </div>
            <p className='text-[14px] mb-[5px]'>Bạn chưa có tài khoản?</p>
            <div onClick={() => { dispatch(togglePopup(false)) }}>
                <Button
                    text={"Đăng ký"}
                    bgColor={mainColor}
                    textColor="white"
                    width="100%"
                    height="32px"
                    onClick={() => navigate("/login", { state: { flag: true } })}
                />
            </div>
        </div>
    </div>)
}

export default Popup;
