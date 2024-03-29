import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer, Header, Location } from '../components';

const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
                <Location />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
