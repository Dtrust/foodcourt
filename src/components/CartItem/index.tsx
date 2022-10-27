import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductCount from '../ProductBlock/ProductCount';

import { buyNow, decItem, removeItem } from '../../store/cart/slice';

import './CartItem.sass';
import { CartItemType } from '../../store/cart/types';

type CartItemProps = {
    id: string;
    name: string;
    price: number;
    ing: string;
    imageUrl: string;
    count: number;
    type: string;
    size: number;
};

const CartItem: React.FC<CartItemProps> = ({
    id,
    name,
    price,
    ing,
    imageUrl,
    count,
    type,
    size,
}) => {
    const dispatch = useDispatch();

    const incProduct = () => {
        dispatch(buyNow({ id } as CartItemType));
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
                <Link key={id} to={`/product/${id}`} title={name}>
                    <h4 className="cart-item__title">{name}</h4>
                </Link>
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

export default CartItem;
