import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import appReducer from "./appReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { combineReducers } from "redux";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLoggedIn', 'accessToken']
}

const cartConfig = {
    ...commonConfig,
    key: 'cart',
    whitelist: ['products','count']
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer),
    cart: persistReducer(cartConfig, cartReducer),
    app:appReducer,

})

export default rootReducer