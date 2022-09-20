import actionTypes from "./actionTypes";
import { apiRegister, apiLogin } from "../../apis/auth";

export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister.post(payload);

    if (response.status === 0) {
      console.log(22);
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        token: response.token,
        userCurrent: response.dataCurrent,
      });
    } else {
      console.log(23);
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        message: response.data.message,
      });
    }
  } catch (error) {
    throw new Error(error);
    console.log(33);
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      message: "Có lỗi trong quá trình đăng ký, Hãy thử lại sau.",
    });
  }
};
export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin.post(payload);
    console.log(response);
    if (response?.status === 0) {
      console.log(1);
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        token: response.token,
        userCurrent: response.dataCurrent,
      });
    } else
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        message: response.data.message,
      });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      message: "Có lỗi trong quá trình đăng nhap, Hãy thử lại sau.",
    });
  }
};

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
