import {persistReducer} from "redux-persist";
import persistConfig from "../configs/persistConfig";
import shopReducer from "../reducers/shopSlice";

const persistedReducer = persistReducer(persistConfig, shopReducer);

export default persistedReducer;