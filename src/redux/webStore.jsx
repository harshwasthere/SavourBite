import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const webStore = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default webStore;
