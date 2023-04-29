import { configureStore } from "@reduxjs/toolkit";
import { messageReducer, userReducer } from "./reducer";


const store = configureStore({
    reducer:{
        auth:userReducer,
        message:messageReducer
    },
})

export default store;