import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="block-top cart">
            <div className="container cart-content">
                <div className="title cart-title">
                    <span className="title-decor cart-title__decor">Cart</span>
                    <h1 className="title-text cart-title__text">Cart</h1>
                </div>
                <button className="cart-btn--clear">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2.5 5H4.16667H17.5"
                            stroke="#B6B6B6"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                            stroke="#B6B6B6"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.33337 9.16667V14.1667"
                            stroke="#B6B6B6"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11.6666 9.16667V14.1667"
                            stroke="#B6B6B6"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>Empty cart</span>
                </button>
                <ul className="cart-list">
                    <li className="cart-item">
                        <div className="cart-item__img">
                            <img
                                src="https://i.postimg.cc/TwGwMDfz/4sezona.png"
                                alt="Four Seasons"
                            />
                        </div>
                        <div className="cart-item__info">
                            <h4 className="cart-item__title">Four Seasons</h4>
                            <p className="cart-item__desc">
                                mozzarella, gorgonzola, taleggio cheese, fontina
                                cheese, smoked, provola branza, salam calabrez
                                picant
                            </p>
                            <div className="cart-item__options cart-options">
                                <p className="cart-options__item cart-options--type">
                                    Dough:
                                    <span>Thin</span>
                                </p>
                                <p className="cart-options__item cart-options--size">
                                    Size:
                                    <span>50cm</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart-item__wrapper">
                            <div className="cart-item__count cart-count">
                                <button className="cart-count__btn btn--minus">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                    </svg>
                                </button>
                                <span className="cart-count__txt">5</span>
                                <button className="cart-count__btn btn--plus">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="cart-item__price">50$</div>
                        </div>
                        <button
                            className="cart-item__btn--delete"
                            title="delete"
                        >
                            <span className="visually-hidden">Delete</span>
                        </button>
                    </li>
                    <li className="cart-item">
                        <div className="cart-item__img">
                            <img
                                src="https://i.postimg.cc/TwGwMDfz/4sezona.png"
                                alt="Four Seasons"
                            />
                        </div>
                        <div className="cart-item__info">
                            <h4 className="cart-item__title">Four Seasons</h4>
                            <p className="cart-item__desc">
                                mozzarella, gorgonzola, taleggio cheese, fontina
                                cheese, smoked, provola branza, salam calabrez
                                picant
                            </p>
                            <div className="cart-item__options cart-options">
                                <p className="cart-options__item cart-options--type">
                                    Dough:
                                    <span>Thin</span>
                                </p>
                                <p className="cart-options__item cart-options--size">
                                    Size:
                                    <span>50cm</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart-item__wrapper">
                            <div className="cart-item__count cart-count">
                                <button className="cart-count__btn btn--minus">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                    </svg>
                                </button>
                                <span className="cart-count__txt">5</span>
                                <button className="cart-count__btn btn--plus">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="cart-item__price">50$</div>
                        </div>
                        <button
                            className="cart-item__btn--delete"
                            title="delete"
                        >
                            <span className="visually-hidden">Delete</span>
                        </button>
                    </li>
                    <li className="cart-item">
                        <div className="cart-item__img">
                            <img
                                src="https://i.postimg.cc/TwGwMDfz/4sezona.png"
                                alt="Four Seasons"
                            />
                        </div>
                        <div className="cart-item__info">
                            <h4 className="cart-item__title">Four Seasons</h4>
                            <p className="cart-item__desc">
                                mozzarella, gorgonzola, taleggio cheese, fontina
                                cheese, smoked, provola branza, salam calabrez
                                picant
                            </p>
                            <div className="cart-item__options cart-options">
                                <p className="cart-options__item cart-options--type">
                                    Dough:
                                    <span>Thin</span>
                                </p>
                                <p className="cart-options__item cart-options--size">
                                    Size:
                                    <span>50cm</span>
                                </p>
                            </div>
                        </div>
                        <div className="cart-item__wrapper">
                            <div className="cart-item__count cart-count">
                                <button className="cart-count__btn btn--minus">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                    </svg>
                                </button>
                                <span className="cart-count__txt">5</span>
                                <button className="cart-count__btn btn--plus">
                                    <svg
                                        width="10"
                                        height="10"
                                        viewBox="0 0 10 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" />
                                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="cart-item__price">50$</div>
                        </div>
                        <button
                            className="cart-item__btn--delete"
                            title="delete"
                        >
                            <span className="visually-hidden">Delete</span>
                        </button>
                    </li>
                </ul>
                <div className="cart-total">
                    <p className="cart-total__item total--count">
                        Total:
                        <span>5 pcs</span>
                    </p>
                    <p className="cart-total__item total--price">
                        Order Price:
                        <span>50$</span>
                    </p>
                </div>
                <div className="cart-actions">
                    <Link
                        to="/"
                        className="btn btn-transparent cart-actions__btn btn--back"
                    >
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 13L1 6.93015L6.86175 1"
                                stroke="#D3D3D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Back to menu
                    </Link>
                    <button className="btn btn-solid cart-actions__btn btn--checkout">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
