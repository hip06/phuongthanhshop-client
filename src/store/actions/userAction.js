import actionTypes from "./actionTypes";
import { apiGetCurrent } from "../../apis/user";

export const getCurrent = () => async (dispatch) => {
  try {
    const response = await apiGetCurrent.get();
    if (response?.status === 0)
      dispatch({
        type: actionTypes.GET_CURRENT,
        data: response.user,
      });
  } catch (error) { }
};

export const cartAction = () => {
  return {
    type:actionTypes.ADD_TO_CART,
  }
}
