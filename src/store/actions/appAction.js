import actionTypes from "./actionTypes";
import ApiCategory from "../../apis/category";


export const getCategory = () => async (dispatch) => {
  try {
    const response = await ApiCategory.getAll();
    if (response?.status === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORY,
        categories: response.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORY,
        categories: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORY,
      categories: null,
    });
  }
};
