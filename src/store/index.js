import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import notificationReducer from "./notificationSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        noti: notificationReducer,
    },
});

export default store;