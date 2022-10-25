import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { buyNow, cartItemSelectorByID } from '../../store/slices/cartSlice';

import ProductOptions from './ProductOptions';

import './ProductBlock.sass';
import { BuyButton } from './../index';

const ProductBlock = props => {
    const dispatch = useDispatch();
    const { id, name, price, ing, imageUrl, types, sizes } = props;

    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const cartItem = useSelector(cartItemSelectorByID(id));
    const cartItemCount = cartItem ? cartItem.count : 0;

    const addItemToCart = () => {
        const item = {
            id,
            name,
            price,
            ing,
            imageUrl,
            type: types[activeType].typeName,
            size: sizes[activeSize],
        };

        dispatch(buyNow(item));
    };

    return (
        <div className="product" title={name}>
            <Link key={id} to={`/product/${id}`} title={name}>
                <div className="product-img">
                    <img className="product-img" src={imageUrl} alt={name} />
                </div>
                <h4 className="product-title">{name}</h4>
                <p className="product-desc">{ing}</p>
            </Link>
            <ProductOptions
                types={types}
                sizes={sizes}
                activeSize={activeSize}
                setActiveSize={setActiveSize}
                activeType={activeType}
                setActiveType={setActiveType}
            />
            <div className="product-bottom">
                <p className="product-price">
                    <span>{price}$</span>
                </p>
                <div className="product-bottom__wrap">
                    <BuyButton
                        addItemToCart={addItemToCart}
                        cartItemCount={cartItemCount}
                        btnText="Buy Now"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductBlock;
