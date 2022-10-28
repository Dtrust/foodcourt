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
            const itemID = state.items.find(
                obj => obj.id === action.payload.id
            );
            const itemOption = state.items.find(
                obj => obj.type === action.payload.type
            );
            const itemSize = state.items.find(
                obj => obj.size === action.payload.size
            );

            //ToDo need fix this process {
            // 	Possible cartItemModel
            // 	totalPrice: 0,
            // 	totalCount: 0
            // 	products: [
            // 		{
            // 			id: '',
            // 			name: '',
            // 			ing: '',
            // 			imageUrl: '',
            // 			items: [
            // 				id: hash,
            // 				type: ''
            // 				size: ''
            // 				price: ''
            // 				count: ''
            // 			]
            // 		}
            // 	]
            //
            // }

            if (itemID) {
                itemID.count++;
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
                item.count++;
                state.totalCount++;
                state.totalPrice = calcCartTotalPrice(state.items);
            }
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

export const { buyNow, removeItem, incItem, decItem, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
