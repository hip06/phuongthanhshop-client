import actionTypes from "./actionTypes";
import { apiRegister, apiLogin } from '../../apis/auth'

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        console.log(response);
        if (response?.data.status === 0)
            dispatch({
                type: actionTypes.REGISTER_SUCCESS,
                token: response.data.token,
                userCurrent: response.data.dataCurrent
            })
        else
            dispatch({
                type: actionTypes.REGISTER_FAIL,
                message: response.data.message
            })

    } catch (error) {
        dispatch({
            type: actionTypes.REGISTER_FAIL,
            message: 'Có lỗi trong quá trình đăng ký, Hãy thử lại sau.'
        })
    }
}
export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.status === 0)
            dispatch({
                type: actionTypes.LOGIN_SUCCESS,
                token: response.data.token,
                userCurrent: response.data.dataCurrent

            })
        else
            dispatch({
                type: actionTypes.LOGIN_FAIL,
                message: response.data.message
            })

    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            message: 'Có lỗi trong quá trình đăng ký, Hãy thử lại sau.'
        })
    }
}

export const logout = () => ({
    type: actionTypes.LOGOUT
})

