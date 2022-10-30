import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ProductItemType, SearchProductParams } from './types';

const { REACT_APP_DB } = process.env;

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async (params: SearchProductParams) => {
        const { category, order, sortBy, search, productsLimit } = params;

        const { data } = await axios.get<ProductItemType[]>(
            `${REACT_APP_DB}?p=1&l=${productsLimit}&${category}&sortBy=${sortBy}&order=${order}&search=${search}`
        );
        return data;
    }
);
