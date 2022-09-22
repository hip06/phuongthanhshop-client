import { type } from "@testing-library/user-event/dist/type";
import actionTypes from "../actions/actionTypes";

const initState = {
  products: [],
  categories: [],
  code: "CAT1",
  pageLength: "",
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      // const pageLength = action.data[1].pages;
      return {
        ...state,
        products: action.data,
      };

    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        categories: action.data,
      };
    case actionTypes.GET_CODE_CATEGORIES:
      return {
        ...state,
        code: action.data,
      };
    default:
      return state;
  }
};

export default appReducer;
