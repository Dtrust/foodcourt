import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    totalCount: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        buyNow(state, action) {
            const isItemAdded = state.items.find(
                obj => obj.id === action.payload.id
            );

            if (isItemAdded) {
                isItemAdded.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }

            state.totalCount++;

            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0);
        },
        decItem(state, action) {
            const item = state.items.find(obj => obj.id === action.payload);
            if (item && item.count > 0) {
                item.count--;
                state.totalCount--;
                state.totalPrice = state.totalPrice - item.price;
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            if (state.items.length === 0) {
                state.items = [];
                state.totalPrice = 0;
                state.totalCount = 0;
                console.log(state.items.length);
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const cartSelector = state => state.cart;

export const cartItemSelectorByID = id => state =>
    state.cart.items.find(obj => obj.id === id);

export const { buyNow, removeItem, decItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
