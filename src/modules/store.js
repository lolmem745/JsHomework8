import {configureStore} from "@reduxjs/toolkit";
import persistedReducer from "../reducers/persistReducer";

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: ['persist/PERSIST']
        }
    })
});

export default store;