import React, { useState } from 'react';
import classNames from 'classnames';

import './Product.sass';

const Product = props => {
    const { name, price, ing, imageUrl, types, sizes, category, rating } =
        props;

    let [productCount, setProductCount] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const addProduct = () => setProductCount(productCount + 1);

    return (
        <div className="product" title={name}>
            <div className="product-img">
                <img className="product-img" src={imageUrl} alt={name} />
            </div>
            <h4 className="product-title">{name}</h4>
            <p className="product-desc">{ing}</p>
            <div className="product-selector">
                <div className="product-selector__item">
                    {types.map(({ id, typeName }) => (
                        <button
                            key={id}
                            onClick={() => setActiveType(id)}
                            className={classNames(
                                'product-selector__btn',
                                activeType === id ? 'active' : ''
                            )}
                        >
                            {typeName}
                        </button>
                    ))}
                </div>
                <div className="product-selector__item">
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSize(index)}
                            className={classNames(
                                'product-selector__btn',
                                activeSize === index ? 'active' : ''
                            )}
                        >
                            {size}cm
                        </button>
                    ))}
                </div>
            </div>
            <div className="product-bottom">
                <p className="product-price">
                    <span>{price}$</span>
                </p>
                <div className="product-bottom__wrap">
                    <button
                        className="btn btn-solid product-btn"
                        onClick={addProduct}
                    >
                        {productCount ? (
                            <svg
                                className="product-btn__icon"
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                        ) : (
                            ''
                        )}
                        <span>Buy Now</span>
                        <span
                            className={classNames('product-btn__count', {
                                'visually-hidden': !productCount,
                            })}
                        >
                            {productCount}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
