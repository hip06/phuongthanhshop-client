import actionTypes from "./actionTypes";
import ApiCategory from "../../apis/category";
import ApiProduct from "../../apis/product";
export const getCategory = () => async (dispatch) => {
  try {
    const response = await ApiCategory.getAll();

    if (response?.status === 0) {
      dispatch({
        type: actionTypes.GET_CATEGORY,
        data: response.response.rows,
      });
    } else {
      dispatch({
        type: actionTypes.GET_CATEGORY,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CATEGORY,
      data: null,
    });
  }
};

export const getProduct = (params) => async (dispatch) => {
  try {
    const response = await ApiProduct.getAll({ category: params });
    if (response?.status === 0) {
      dispatch({
        type: actionTypes.GET_PRODUCT,
        data: response.data,
      });
    } else {
      dispatch({
        type: actionTypes.GET_PRODUCT,
        data: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT,
      data: null,
    });
  }
};
