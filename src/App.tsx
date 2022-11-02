import React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

import Home from './pages/Home';
import { Loader } from './components';

import './sass/app.sass';
import MainLayout from './layouts/MainLayout';

const Cart = loadable(
    () => import(/* webpackChunkName: "Cart" */ './pages/Cart'),
    {
        fallback: <Loader />,
    }
);

const Product = loadable(
    () => import(/* webpackChunkName: "Product" */ './pages/Product'),
    {
        fallback: <Loader />,
    }
);

const NotFound = loadable(
    () => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'),
    {
        fallback: <Loader />,
    }
);

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:productID" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
