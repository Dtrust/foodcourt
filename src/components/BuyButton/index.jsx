import React from 'react';
import classNames from 'classnames';

import './BuyButton.sass';

const BuyButton = props => {
    const { addItemToCart, cartItemCount, btnText, cssClass } = props;

    return (
        <button
            className={classNames(
                'btn btn-solid',
                'buy-btn',
                cssClass ? cssClass : ''
            )}
            onClick={addItemToCart}
        >
            <span>{btnText}</span>
            <span
                className={classNames('buy-btn__count', {
                    'visually-hidden': !cartItemCount,
                })}
            >
                {cartItemCount}
            </span>
        </button>
    );
};

export default BuyButton;
