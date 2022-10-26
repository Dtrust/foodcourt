import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.sass';
import image from '../../assets/images/error404.png';

const NotFound = () => {
    return (
        <div className="block-top notfound">
            <img className="notfound-img" src={image} alt="error page" />
            <Link className="btn btn-solid notfound-btn" to={'/'}>
                Go to Home page
            </Link>
        </div>
    );
};

export default NotFound;
