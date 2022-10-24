import { configureStore } from '@reduxjs/toolkit';

import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import products from './slices/productsSlice';

const store = configureStore({
    reducer: {
        filter,
        cart,
        products,
    },
});

export default store;
