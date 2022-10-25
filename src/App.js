import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Cart, Home, Product, NotFound } from './pages';

import './sass/app.sass';
import MainLayout from './layouts/MainLayout';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/foodcourt" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
