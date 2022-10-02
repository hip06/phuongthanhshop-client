import actionTypes from "../actions/actionTypes";

const initState = {
  showPopup: false,
  showPopupAddToCart: {
    isShow:false,
    variants:[],
    product:{},
  },
};

const popupReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_POPUP:
      return { ...state, showPopup: action.data };
    case actionTypes.TOGGLE_POPUP_ADD_TO_CART:
      return { ...state, showPopupAddToCart: action.data };
    default:
      return state;
  }
};

export default popupReducer;
