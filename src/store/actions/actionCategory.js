import actionTypes from "./actionTypes";
import { apiGetCategory } from "../../apis/category";

export const getCategory = () => async (dispatch) => {
  try {
    const response = await apiGetCategory();
    console.log(response);
    if (response?.data.status === 0)
      dispatch({
        type: actionTypes.GET_CATEGORY,
        data: response,
      });
  } catch (error) {}
};
