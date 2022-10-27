import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Product, SearchProductParams } from './types';

const { REACT_APP_DB } = process.env;

export const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async (params: SearchProductParams) => {
        const { category, order, sortBy, search, productsLimit } = params;

        const { data } = await axios.get<Product[]>(
            `${REACT_APP_DB}?p=1&l=${productsLimit}&${category}&sortBy=${sortBy}&order=${order}&${search}`
        );
        return data;
    }
);
