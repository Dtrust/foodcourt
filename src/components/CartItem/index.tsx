import React from 'react';
import { Link } from 'react-router-dom';

import { ProductCount } from '../ProductBlock/ProductCount';
import { useAPPDispatch } from '../../store/store';
import { incItem, decItem, removeItem } from '../../store/cart/slice';

import './CartItem.sass';

type CartItemProps = {
    id: string;
    productID: string;
    name: string;
    price: number;
    ing: string;
    imageUrl: string;
    count: number;
    type: string;
    size: number;
};

export const CartItem: React.FC<CartItemProps> = props => {
    const { id, productID, name, price, ing, imageUrl, count, type, size } =
        props;
    const dispatch = useAPPDispatch();

    const incProduct = () => {
        dispatch(incItem(id));
    };

    const decProduct = () => {
        dispatch(decItem(id));
    };

    const removeProduct = () => {
        dispatch(removeItem(props));
    };

    return (
        <div className="cart-item">
            <div className="cart-item__img">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="cart-item__info">
                <div className="cart-info">
                    <div className="cart-info__wrap">
                        <Link
                            key={id}
                            to={`/product/${productID}`}
                            title={name}
                        >
                            <h4 className="cart-item__title">{name}</h4>
                        </Link>
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
                </div>
                <p className="cart-item__desc">{ing}</p>
            </div>
            <div className="cart-item__wrapper">
                <ProductCount
                    decProduct={decProduct}
                    incProduct={incProduct}
                    cartItemCount={count}
                />
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
