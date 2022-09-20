import { type } from "@testing-library/user-event/dist/type";
import actionTypes from "../actions/actionTypes";

const initState = {
  products: [],
  categories: [],
<<<<<<< Updated upstream
=======
  code: "CAT1",
  pageLength: "",
  previousSite: "",
>>>>>>> Stashed changes
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
<<<<<<< Updated upstream
      const cate = Object.values(action.data[0]);
=======
      const cate = Object.values(action.data['0']);
      const pageLength = action.data[1].pages;
>>>>>>> Stashed changes
      return {
        ...state,
        products: state.products.concat(cate),
      };

    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        categories: action.data,
      };
<<<<<<< Updated upstream
=======
    case actionTypes.GET_CODE_CATEGORIES:
      return {
        ...state,
        code: action.data,
      };
    case actionTypes.SAVE_PREVIOUS_SITE:
      return {
        ...state,
        previousSite: action.data
      }
>>>>>>> Stashed changes
    default:
      return state;
  }
};

export default appReducer;
