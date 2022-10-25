import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_DB } = process.env;

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async params => {
        const { category, order, sortBy, search, productsLimit } = params;

        const { data } = await axios.get(
            `${REACT_APP_DB}?p=1&l=${productsLimit}&${category}&sortBy=${sortBy}&order=${order}&${search}`
        );
        return data;
    }
);

const initialState = {
    items: [],
    status: 'loading',
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: {
        [fetchProducts.pending]: state => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = 'success';
        },
        [fetchProducts.rejected]: state => {
            state.status = 'error';
            state.items = [];
        },
    },
});

export const productsSelector = state => state.products;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
