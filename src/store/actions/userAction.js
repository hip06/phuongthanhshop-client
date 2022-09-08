import actionTypes from "./actionTypes";
import { apiGetCurrent, apiUpdateUser } from "../../apis/user";

export const getCurrent = () => async (dispatch) => {
  try {
    const response = await apiGetCurrent.get();
    if (response?.status === 0)
      dispatch({
        type: actionTypes.GET_CURRENT,
        data: response.user,
      });
  } catch (error) {}
};
export const updateProfile = (data) => async (dispatch) => {
  await apiUpdateUser.put({ avatar: data });
  const response = await apiGetCurrent.get();
  if (response?.status === 0)
    dispatch({
      type: actionTypes.GET_CURRENT,
      data: response.user,
    });
};
