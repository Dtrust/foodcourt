import React from 'react';
import { Link } from 'react-router-dom';

import './CartEmpty.sass';
import cartEmptyImg from '../../assets/images/empty-cart.png';

export const CartEmpty: React.FC = () => {
    return (
        <div className="block-top empty">
            <img className="empty-img" src={cartEmptyImg} alt="empty cart" />
            <Link className="btn btn-solid cart-empty__btn" to={'/'}>
                Go to Home page
            </Link>
        </div>
    );
};
