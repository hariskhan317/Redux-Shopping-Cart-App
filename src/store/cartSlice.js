import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false
    },
    reducers: {
        replaceCart: (state, action) => {
            state.itemList = action.payload.itemList;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addToCart: (state, action) => {
            state.changed = true;
            const newItem = action.payload;
            // to Check if item is presant
            const existingItem = state.itemList.find((item) => item.id === newItem.id)
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
                state.totalQuantity++;
            }
        },
        removeFromCart: (state, action) => {
            state.changed = true;
            const id = action.payload;
            const existingItem = state.itemList.find((item) => item.id === id);
            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
         },
        setShowCart: (state) => {
            state.showCart = !state.showCart;
    },
    }
})

export const { addToCart, removeFromCart, setShowCart } = cartSlice.actions;
export default cartSlice.reducer;