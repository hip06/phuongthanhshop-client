import actionTypes from "./actionTypes";
import { apiGetCurrent } from "../../apis/user";

export const getCurrent = () => async (dispatch) => {
  try {
    const response = await apiGetCurrent();
    if (response?.data.status === 0)
      dispatch({
        type: actionTypes.GET_CURRENT,
        data: response.data.user,
      });
  } catch (error) {}
};
