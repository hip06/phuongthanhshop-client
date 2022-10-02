import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "../components/Button"
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { togglePopup } from '../store/actions/popupAction';
import ApiChangePassword from '../apis/changePassword';
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import InputField from "../components/InputField";
import BoxVariants from "../components/BoxVariants";


const PopupCart = () => {
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
        <div className='w-[85%] md:w-[60%] lg:w-[40%] bg-white rounded-[10px] border-white border-[10px] relative' onClick={(e) => { e.stopPropagation() }}>
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

export const PopupAddToCart=()=>{
    const variants="";
    return (<div className="fixed h-screen w-screen bg-[rgba(0,0,0,.25)] flex justify-center items-center" style={{ zIndex: 60 }} >
        
    </div>)
}

export const PopupChangePassword = ({ setIsChangePassword }) => {
    const [currentPassword, setCurrentPassword] = useState({
        password: "",
    });
    const { isLoggedIn, userCurrent } = useSelector((state) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (email, password) => {
        try {
            const res = await ApiChangePassword.verifyAccount({ email: email, password: password });
            setIsLoading(false);
            if (res.status === 0) Swal.fire('Thành công', res.message, 'success');
            else Swal.fire('Thất bại', res.message, 'error')
        }
        catch (err) {
            setIsLoading(false);
            Swal.fire('Thất bại', err.message, 'error')

        }
    }
    return (<div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.25)] z-[10] flex justify-center items-center " onClick={(e) => { setIsChangePassword(false); }}>
        {isLoading && <Loading></Loading>}
        <div className="h-[140px] w-[90%] bg-white rounded-[10px] p-[10px] flex flex-col justify-around" onClick={(e) => { e.stopPropagation() }}>
            {/* <p className="text-[16px] font-bold">Mật khẩu hiện tại</p> */}
            {/* <input className='w-full h-[30px] outline-[#d9d9d9] border-[1px] border-[#d9d9d9] p-[5px]' ref={passwordRef}></input> */}
            <div className='font-bold text-[16px]'>
                <InputField label='Mật khẩu hiện tại' value={currentPassword.password} setValue={setCurrentPassword} type='password' typeInput='password' setInvalidFields={() => { }} invalidFields=''></InputField>
            </div>
            <div className='flex w-full justify-around'>
                <button onClick={() => { setIsChangePassword(false) }} className='w-[40%] rounded-[10px] h-[40px] bg-[#383838] text-[white]'>Hủy bỏ</button>
                <button onClick={() => {
                    setIsLoading(true);
                    handleSubmit(userCurrent.email, currentPassword.password);
                    setCurrentPassword((prev) => { return { ...prev, password: "" } })
                }} className='w-[40%] bg-[#3F9DF3] rounded-[10px] h-[40px] text-[white]'>Xác nhận</button>
            </div>
        </div>
    </div>)
}

export default PopupCart;
