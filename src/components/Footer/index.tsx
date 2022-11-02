import React from 'react';
import { Social } from '../Social';

import './Footer.sass';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <Social />
            </div>
        </footer>
    );
};
