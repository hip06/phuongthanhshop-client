import actionTypes from "../actions/actionTypes";

const initState={
    products:[],
    count:0,
}

const cartReducer=(state=initState,action)=>{
    switch (action.type)
    {
        case actionTypes.ADD_TO_CART:
            return { ...state, count:state.count+1,products:[...state.products,action.data]}
        case actionTypes.DETELE_ALL:
            return {...state,count:0,products:[]}
        default:
            return  state;
    }
}

export default cartReducer;