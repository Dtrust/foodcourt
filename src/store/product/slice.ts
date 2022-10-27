import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductItemType, ProductsSliceState, StatusEnum } from './types';
import { fetchProducts } from './actions';

const initialState: ProductsSliceState = {
    items: [],
    status: StatusEnum.LOADING,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<ProductItemType[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.status = StatusEnum.LOADING;
            state.items = [];
        });
        builder.addCase(
            fetchProducts.fulfilled,
            (state, action: PayloadAction<ProductItemType[]>) => {
                state.items = action.payload;
                state.status = StatusEnum.SUCCESS;
            }
        );
        builder.addCase(fetchProducts.rejected, state => {
            state.status = StatusEnum.ERROR;
            state.items = [];
        });
    },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
