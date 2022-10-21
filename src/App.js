import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Location, Footer } from './components';
import { Cart, Home, NotFound } from './pages';

import './sass/app.sass';

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('');

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Location />
                <Footer />
            </div>
        </SearchContext.Provider>
    );
}

export default App;
