import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorageCart } from '../../utils/getLocalStorageCart';
import { CartItemType, CartSliceState } from './types';
import { calcCartTotalPrice } from '../../utils/calcCartTotal';

const { items, totalPrice, totalCount } = getLocalStorageCart();

const initialState: CartSliceState = {
    totalCount,
    totalPrice,
    items,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        buyNow(state, action: PayloadAction<CartItemType>) {
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

            state.totalPrice = calcCartTotalPrice(state.items);
        },
        decItem(state, action: PayloadAction<string>) {
            const item = state.items.find(obj => obj.id === action.payload);
            if (item && item.count > 1) {
                item.count--;
                state.totalCount--;
                state.totalPrice = calcCartTotalPrice(state.items);
            }
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            if (state.items.length === 0) {
                state.items = [];
                state.totalPrice = 0;
                state.totalCount = 0;
            }
        },
        clearCart(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const { buyNow, removeItem, decItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
