import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryID: 0,
    productsLimit: 9,
    sort: {
        name: 'Popularity ↓',
        sortProperty: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryID(state, action) {
            state.categoryID = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
        },
        updateProductsLimit(state) {
            state.productsLimit = state.productsLimit + 9;
        },
        setProductsLimit(state, action) {
            state.productsLimit = action.payload;
        },
    },
});

export const { setCategoryID, setSort, updateProductsLimit, setProductsLimit } =
    filterSlice.actions;

export default filterSlice.reducer;
