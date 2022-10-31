import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v1 as uuidv1 } from 'uuid';

import { ProductOptions } from './ProductOptions';
import { BuyButton } from '../index';

import {
    selectCartItemByID,
    selectCartProductGroup,
} from '../../store/cart/selectors';
import { CartItemType } from '../../store/cart/types';
import { buyNow } from '../../store/cart/slice';

import './ProductBlock.sass';

type ProductBlockProps = {
    id: string;
    name: string;
    price: number;
    ing: string;
    imageUrl: string;
    types: [{ id: number; typeName: string }];
    sizes: [];
};

export const ProductBlock: React.FC<ProductBlockProps> = props => {
    const dispatch = useDispatch();
    const { id, name, price, ing, imageUrl, types, sizes } = props;

    const [activeType, setActiveType] = React.useState(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const cartItem = useSelector(selectCartItemByID(id));

    const productGroup = useSelector(selectCartProductGroup(id));

    const cartItemCount = productGroup ? productGroup.count : 0;
    const cartItemID = cartItem ? cartItem.id : uuidv1();

    const addItemToCart = () => {
        const item: CartItemType = {
            id: cartItemID,
            productID: id,
            name,
            price,
            ing,
            imageUrl,
            type: types[activeType].typeName,
            size: sizes[activeSize],
            count: 0,
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
