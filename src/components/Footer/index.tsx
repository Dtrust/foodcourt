import React from 'react';
import { Social } from '../Social';

import './Footer.sass';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <Social />
            </div>
        </footer>
    );
};
