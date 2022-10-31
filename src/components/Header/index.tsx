import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import { selectCart } from '../../store/cart/selectors';

import './Header.sass';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import icons from '../../assets/images/icons.svg';

const menuItems = [
    { id: 0, name: 'Menu', link: '#menu' },
    { id: 1, name: 'About', link: '#about' },
    // { id: 2, name: 'FeedBacks', link: '#feedbacks' },
    { id: 3, name: 'Contacts', link: '#contacts' },
];

const phoneNumber = '+38 (050) 111 22 33';

export const Header: React.FC = () => {
    const location = useLocation();

    const { items, totalPrice, totalCount, groups } = useSelector(selectCart);

    const [scroll, setScroll] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const isMounted = React.useRef(false);

    // const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    React.useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify({ items, groups });
            localStorage.setItem('foodCourt-cart', json);
        }
        isMounted.current = true;
    }, [totalPrice, totalCount, items]);

    const openMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);

        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = 'auto';
        }
    };

    const isNavLinkActive = (anchor: string) => {
        if (location.hash === anchor) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <header
            className={classNames(
                'header',
                scroll ? 'header--scroll' : '',
                isMobileMenuOpen ? 'active' : ''
            )}
        >
            <div className="container header-content">
                <div className="header-wrap">
                    <div className="logo header-logo">
                        <Link to="/">
                            <Logo />
                            <span className="visually-hidden">Logo</span>
                        </Link>
                    </div>

                    <nav className="nav header-nav">
                        <button
                            onClick={openMobileMenu}
                            className="nav-btn burger"
                            aria-label="menu"
                        >
                            <span className="burger-line nav-btn__top" />
                            <span className="burger-line nav-btn__middle" />
                            <span className="burger-line nav-btn__bottom" />
                        </button>
                        <ul className="header-nav__list">
                            {menuItems.map(({ id, name, link }) => (
                                <li
                                    key={id}
                                    className="header-nav__item"
                                    onClick={closeMobileMenu}
                                >
                                    <HashLink
                                        className={classNames(
                                            'header-nav__link',
                                            isNavLinkActive(link)
                                                ? 'active'
                                                : ''
                                        )}
                                        smooth
                                        to={`/${link}`}
                                        title={name}
                                    >
                                        {name}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="header-wrap">
                    {location.pathname !== '/cart' ? (
                        <div className="header-cart">
                            <Link to="/cart" className="informer" title="cart">
                                <div className="informer-wrap">
                                    {totalCount > 0 && (
                                        <p className="informer-total">
                                            <span className="informer-total__price">
                                                {totalPrice}
                                            </span>
                                            <span className="informer-total__mount">
                                                $
                                            </span>
                                        </p>
                                    )}
                                </div>
                                <svg
                                    className={'informer-icon'}
                                    width="25"
                                    height="25"
                                >
                                    <use href={`${icons}#cart`} />
                                </svg>
                                {totalCount > 0 && (
                                    <span className="informer-count">
                                        {totalCount}
                                    </span>
                                )}
                            </Link>
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="header-phone">
                        <a
                            className="header-nav__link header-phone__link"
                            title="phone"
                            href={`tel:${phoneNumber}`}
                        >
                            <svg
                                className={'header-phone__icon'}
                                width="15"
                                height="15"
                            >
                                <use href={`${icons}#phone`} />
                            </svg>
                            <span>{phoneNumber}</span>
                        </a>
                        <button
                            className="header-phone__callback"
                            title="callback"
                        >
                            <svg
                                className={'callback-icon'}
                                width="30"
                                height="30"
                            >
                                <use href={`${icons}#phone`} />
                            </svg>
                            <span className="visually-hidden">Callback</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
