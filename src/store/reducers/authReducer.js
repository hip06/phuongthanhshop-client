import actionTypes from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    accessToken: null,
    msg: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                accessToken: action.data,
                msg: ''
            }
        case actionTypes.LOGIN_FAIL:
        case actionTypes.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null,
                msg: action.data
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                accessToken: null,
                msg: ''
            }

        default:
            return state;
    }
}

export default authReducer