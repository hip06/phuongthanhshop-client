import { type } from "@testing-library/user-event/dist/type";
import actionTypes from "../actions/actionTypes";

const initState = {
  products: [],
  categories: [],
  code: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      const cate = Object.values(action.data[0]);
      return {
        ...state,
        products: cate,
      };

    case actionTypes.GET_CATEGORY:
      const code = Object.values(action.data);
      const categoryCode = [];
      code.map((cate) => {
        categoryCode.push(cate.code);
      });

      return {
        ...state,
        code: categoryCode,
        categories: action.data,
      };
    default:
      return state;
  }
};

export default appReducer;
