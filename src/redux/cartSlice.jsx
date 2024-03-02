import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        restaurantId: null,
        items: [],
        restaurantData: null,
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const { restaurantId, itemId, itemData, restaurantData, itemPrice } = action.payload;

            if (state.restaurantId === null) {
                state.restaurantId = restaurantId;
                state.restaurantData = restaurantData;
            }

            const existingItemIndex = state.items.findIndex((item) => item.itemId === itemId);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count++;
                state.totalPrice += itemPrice;
            } else {
                state.items.push({ itemId: itemId, count: 1, itemData: itemData });
                state.totalPrice += itemPrice;
            }
        },
        removeItem: (state, action) => {
            const { itemId, itemPrice } = action.payload;

            const existingItemIndex = state.items.findIndex((item) => item.itemId === itemId);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].count--;

                if (state.items[existingItemIndex].count === 0) {
                    state.items.splice(existingItemIndex, 1);
                }

                if (state.items.length === 0) {
                    state.restaurantId = null;
                    state.restaurantData = null;
                }
                state.totalPrice -= itemPrice;
            }
        },
        clearCart: () => {
            return { restaurantId: null, items: [], restaurantData: null, totalPrice: 0 };
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
