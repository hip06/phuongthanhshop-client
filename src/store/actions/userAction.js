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

export const addToCartAction = (product) => {
  return {
    type:actionTypes.ADD_TO_CART,
    data:product,
  }
}

export const removeAllCartAction = () => {
  return {
    type:actionTypes.DETELE_ALL,
  }
}

export const addToPaymentAction=(product)=>{
  return {
    type:actionTypes.ADD_TO_PAYMENT,
    data:product,
  }
}
export const deleteFromPaymentAction=(product)=>{
  return {
    type:actionTypes.DELETE_FROM_PAYMENT,
    data:product,
  }
}
