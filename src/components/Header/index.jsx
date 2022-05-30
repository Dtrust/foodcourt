import React, { useState, useEffect } from 'react';
import './Header.sass';
import classNames from 'classnames';

const Header = () => {
    const menuItems = [
        { id: 0, name: 'Menu', link: '#menu' },
        { id: 1, name: 'About', link: '#about' },
        { id: 2, name: 'FeedBacks', link: '#feedbacks' },
        { id: 3, name: 'Contacts', link: '#contatcs' },
    ];

    const phoneNumber = '+38 (050) 111 22 33';

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <header
            className={classNames('header', scroll ? 'header--scroll' : '')}
        >
            <div className="container header-content">
                <div className="logo header-logo">
                    <a className="header-logo__link" href="#" title="Logo">
                        <span>Service Name</span>
                    </a>
                </div>

                <nav className="nav header-nav">
                    <ul className="header-nav__list">
                        {menuItems.map(({ id, name, link }) => (
                            <li key={id} className="header-nav__item">
                                <a
                                    className="header-nav__link"
                                    href={link}
                                    title={name}
                                >
                                    {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-phone">
                    <a className="header-phone__link" title="phone">
                        {phoneNumber}
                    </a>
                    <button className="header-phone__callback" title="callback">
                        Callback
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
