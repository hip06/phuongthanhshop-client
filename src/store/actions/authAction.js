import actionTypes from "./actionTypes";
import { apiRegister } from '../../apis/auth'

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        if (response?.data.status === 0)
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                data: response.data.token
            })
        else
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                data: response.data.message
            })

    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            data: 'Có lỗi trong quá trình đăng ký, Hãy thử lại sau.'
        })
    }
}

export const logout = () => ({
    type: actionTypes.LOGOUT
})