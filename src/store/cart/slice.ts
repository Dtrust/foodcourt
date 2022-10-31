import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocalStorageCart } from '../../utils/getLocalStorageCart';
import { CartItemType, CartSliceState } from './types';
import {
    calcCartTotalCount,
    calcCartTotalPrice,
} from '../../utils/calcCartTotal';

const { items, totalPrice, totalCount, groups } = getLocalStorageCart();

const initialState: CartSliceState = {
    totalCount,
    totalPrice,
    items,
    groups,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        buyNow(state, action: PayloadAction<CartItemType>) {
            const isItemAdded = state.items.find(
                obj =>
                    obj.type === action.payload.type &&
                    obj.size === action.payload.size &&
                    obj.name === action.payload.name
            );

            const productID = state.groups.find(
                obj => obj.id === action.payload.productID
            );

            if (productID) {
                productID.count++;
            } else {
                state.groups.push({ id: action.payload.productID, count: 1 });
            }

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
        incItem(state, action: PayloadAction<string>) {
            const item = state.items.find(obj => obj.id === action.payload);
            if (item) {
                const productID = state.groups.find(
                    obj => obj.id === item.productID
                );
                if (productID) {
                    productID.count++;
                }
                item.count++;
                state.totalCount++;
                state.totalPrice = calcCartTotalPrice(state.items);
            }
        },
        decItem(state, action: PayloadAction<string>) {
            const item = state.items.find(obj => obj.id === action.payload);
            if (item && item.count > 1) {
                const productID = state.groups.find(
                    obj => obj.id === item.productID
                );
                if (productID) {
                    productID.count--;
                }
                item.count--;
                state.totalCount--;
                state.totalPrice = calcCartTotalPrice(state.items);
            }
        },
        removeItem(state, action: PayloadAction<CartItemType>) {
            state.items = state.items.filter(
                obj => obj.id !== action.payload.id
            );
            state.groups = state.groups.filter(
                obj => obj.id !== action.payload.productID
            );
            if (state.items.length === 0) {
                state.items = [];
                state.totalPrice = 0;
                state.totalCount = 0;
            }
            state.totalCount = calcCartTotalCount(state.items);
            state.totalPrice = calcCartTotalPrice(state.items);
        },
        clearCart(state) {
            state.items = [];
            state.groups = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const { buyNow, removeItem, incItem, decItem, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
