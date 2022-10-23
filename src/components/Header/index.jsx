import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import { Search } from '../../components';

import './Header.sass';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import icons from '../../assets/images/icons.svg';

const Header = ({ searchValue, setSearchValue }) => {
    const menuItems = [
        { id: 0, name: 'Menu', link: '#menu' },
        { id: 1, name: 'About', link: '#about' },
        // { id: 2, name: 'FeedBacks', link: '#feedbacks' },
        { id: 3, name: 'Contacts', link: '#contacts' },
    ];

    const { totalPrice } = useSelector(state => state.cart);
    // const totalCartCount = items.reduce((sum, item) => sum + item.count, 0);
    const totalCartCount = useSelector(state => state.cart.totalCount);

    const phoneNumber = '+38 (050) 111 22 33';

    const [isMobileSearchActive, setIsMobileSearchActive] =
        React.useState(false);

    const [scroll, setScroll] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

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

    const mobileSearchFocus = React.useRef(null);

    const handleMobileSearch = () => {
        mobileSearchFocus.current.focus();
        setIsMobileSearchActive(!isMobileSearchActive);
    };

    const location = useLocation();

    const isNavLinkActive = anchor => {
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

                <Search
                    isMobileSearchActive={isMobileSearchActive}
                    cssClass={'header-search'}
                    handleFocus={mobileSearchFocus}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <div className="header-wrap">
                    <div className="header-cart">
                        <Link to="/cart" className="informer" title="cart">
                            <div className="informer-wrap">
                                <p className="informer-total">
                                    <span className="informer-total__price">
                                        {totalPrice}
                                    </span>
                                    <span className="informer-total__mount">
                                        $
                                    </span>
                                </p>
                            </div>
                            <svg
                                className={'informer-icon'}
                                width="25"
                                height="25"
                            >
                                <use href={`${icons}#cart`} />
                            </svg>
                            <span className="informer-count">
                                {totalCartCount}
                            </span>
                        </Link>
                    </div>

                    <div className="header-phone">
                        <a
                            className="header-nav__link header-phone__link"
                            title="phone"
                            href={`tel:${phoneNumber}`}
                        >
                            <svg
                                className={'header-phone__icon'}
                                width="20"
                                height="20"
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

                    <button
                        className="header-search__btn"
                        onClick={handleMobileSearch}
                    >
                        <svg className="search-icon" width="20" height="20">
                            <use href={`${icons}#search`} />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
