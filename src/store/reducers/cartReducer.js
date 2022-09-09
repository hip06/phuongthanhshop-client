import actionTypes from "../actions/actionTypes";

const initState={
    productIds:[],
    count:0,
}

const cartReducer=(state=initState,action)=>{
    switch (action.type)
    {
        case actionTypes.ADD_TO_CART:
            return { ...state, count:state.count+1,productIds:[...state.productIds,action.payload]}

        default:
            return  state;
    }
}

export default cartReducer;