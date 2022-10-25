import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryID: 0,
    productsLimit: 9, //products per page
    searchValue: '',
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
        updateProductsLimit(state) {
            state.productsLimit = state.productsLimit + 9;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
        setSort(state, action) {
            state.sort = action.payload;
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

export const filterSelector = state => state.filter;

export const {
    setCategoryID,
    updateProductsLimit,
    setSearchValue,
    setSort,
    setProductsLimit,
    setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
