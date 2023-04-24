import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from '../slices/LoginSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";



const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    login: LoginSliceReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistedReducer
})