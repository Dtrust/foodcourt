import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryID: 0,
    productsLimit: 9, //products per page
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
        setFilters(state, action) {
            state.productsLimit = +action.payload.productsLimit;
            state.sort = action.payload.sort;
            state.categoryID = Number(action.payload.categoryID);
        },
    },
});

export const {
    setCategoryID,
    setSort,
    updateProductsLimit,
    setProductsLimit,
    setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
