import actionTypes from "./actionTypes";

export const togglePopup = (state)=>{
    return {
      type: actionTypes.TOGGLE_POPUP,
      data:state
    }
  }
  
export const togglePopupAddToCart=(state)=>{
  return {
      type: actionTypes.TOGGLE_POPUP_ADD_TO_CART,
      data:state
    } 
}
