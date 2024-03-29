import React from 'react';
import classNames from 'classnames';

import './ProductOptions.sass';
import { ProductOptionsType } from '../../store/product/types';

type ProductOptionsProps = {
    types: ProductOptionsType[];
    sizes: number[];
    activeSize: number;
    setActiveSize: any;
    activeType: number;
    setActiveType: any;
};

export const ProductOptions: React.FC<ProductOptionsProps> = props => {
    const {
        types,
        sizes,
        activeSize,
        setActiveSize,
        activeType,
        setActiveType,
    } = props;

    // const [activeType, setActiveType] = React.useState(0);
    // const [activeSize, setActiveSize] = React.useState(0);

    return (
        <div className="product-options">
            <div className="product-options__item">
                {types.map(({ id, typeName }) => (
                    <button
                        key={id}
                        onClick={() => setActiveType(id)}
                        className={classNames(
                            'product-options__btn',
                            activeType === id ? 'active' : ''
                        )}
                    >
                        {typeName}
                    </button>
                ))}
            </div>
            <div className="product-options__item">
                {sizes.map((size, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSize(index)}
                        className={classNames(
                            'product-options__btn',
                            activeSize === index ? 'active' : ''
                        )}
                    >
                        {size}cm
                    </button>
                ))}
            </div>
        </div>
    );
};
