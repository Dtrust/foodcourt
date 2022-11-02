import React from 'react';

import './Loader.sass';

export const Loader: React.FC = () => {
    return (
        <section className="loader">
            <div className="loader-bar">
                <div />
                <div />
                <div />
            </div>
        </section>
    );
};
