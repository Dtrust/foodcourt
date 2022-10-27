import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, SortProperties, SortPropertiesEnum } from './types';

const initialState: FilterSliceState = {
    categoryID: 0,
    productsLimit: 9,
    searchValue: '',
    sort: {
        name: 'Popularity ↓',
        sortProperty: SortPropertiesEnum.RATING_DESC,
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryID(state, action: PayloadAction<number>) {
            state.categoryID = action.payload;
        },
        updateProductsLimit(state) {
            state.productsLimit = state.productsLimit + 9;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setSort(state, action: PayloadAction<SortProperties>) {
            state.sort = action.payload;
        },
        setProductsLimit(state, action: PayloadAction<number>) {
            state.productsLimit = action.payload;
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            if (Object.keys(action.payload).length) {
                state.productsLimit = +action.payload.productsLimit;
                state.sort = action.payload.sort;
                state.categoryID = Number(action.payload.categoryID);
            } else {
                state.categoryID = 0;
                state.sort = {
                    name: 'Popularity ↓',
                    sortProperty: SortPropertiesEnum.RATING_DESC,
                };
            }
        },
    },
});

export const {
    setCategoryID,
    updateProductsLimit,
    setSearchValue,
    setSort,
    setProductsLimit,
    setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
