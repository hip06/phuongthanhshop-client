import { type } from "@testing-library/user-event/dist/type";
import actionTypes from "../actions/actionTypes";

const initState = {
  products: [],
  categories: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      const cate = Object.values(action.data[0]);
      return {
        ...state,
        products: state.products.concat(cate),
      };

    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        categories: action.data,
      };
    default:
      return state;
  }
};

export default appReducer;
