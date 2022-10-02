import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import changePassword from "../../apis/changePassword";
import {saveTokenVerifyEmail} from "../../store/actions/changePasswordAction";

const UserChangePassword = () => {
    const { userId, tokenChangePassword, tokenVerifyEmailSuccess } = useSelector(state => state.changePassword);
    const dispatch= useDispatch();
    const [isVerified, setIsVerified] = useState(false);
    useEffect(() => {
        const fetchVerifyEmail = async () => {
            const res = await changePassword.verifyEmail({ id: userId, token: tokenChangePassword });
            
            if (res.status === 0) {setIsVerified(true);
                dispatch(saveTokenVerifyEmail(res.tokenVerifyEmailSuccess));
            }
        }
        fetchVerifyEmail();
    }, [])
    const passwordRef = useRef();
    const handleSubmit = async () => {
        const payload={ password: passwordRef.current.value, tokenVerifyEmailSuccess: tokenVerifyEmailSuccess };
       
        const res=await changePassword.updatePassword(payload)
       
    }

    return (<>
        <Header></Header>
        {isVerified && <div>
            <p>Mật khẩu mới</p>
            <input className="bg-[#d9d9d9]" ref={passwordRef}></input>

            <p>Nhập lại mật khẩu mới</p>
            <input className="bg-[#d9d9d9]"></input>
            <button onClick={()=>{handleSubmit()}}>Xác nhận</button>
        </div>}
    </>)
}

export default UserChangePassword;