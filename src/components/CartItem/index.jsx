import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem, decItem, removeItem } from '../../store/slices/cartSlice';

import './CartItem.sass';

const CartItem = ({ id, name, price, ing, imageUrl, count, type, size }) => {
    const dispatch = useDispatch();

    const incProduct = () => {
        dispatch(addItem({ id }));
    };

    const decProduct = () => {
        dispatch(decItem(id));
    };

    const removeProduct = () => {
        dispatch(removeItem(id));
    };

    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="cart-item__info">
                <h4 className="cart-item__title">{name}</h4>
                <p className="cart-item__desc">{ing}</p>
                <div className="cart-item__options cart-options">
                    <p className="cart-options__item cart-options--type">
                        Dough:
                        <span>{type}</span>
                    </p>
                    <p className="cart-options__item cart-options--size">
                        Size:
                        <span>{size}cm</span>
                    </p>
                </div>
            </div>
            <div className="cart-item__wrapper">
                <div className="cart-item__count cart-count">
                    <button
                        onClick={decProduct}
                        className="cart-count__btn btn--minus"
                    >
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
                    <span className="cart-count__txt">{count}</span>
                    <button
                        onClick={incProduct}
                        className="cart-count__btn btn--plus"
                    >
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
                <div className="cart-item__price">{price * count}$</div>
            </div>
            <button
                onClick={removeProduct}
                className="cart-item__btn--delete"
                title="delete"
            >
                <span className="visually-hidden">Delete</span>
            </button>
        </div>
    );
};

export default CartItem;
