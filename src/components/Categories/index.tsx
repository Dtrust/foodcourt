import React from 'react';
import classNames from 'classnames';

import './Categories.sass';

type CategoriesProps = {
    categoryID: number;
    onChangeCategory: (index: number) => void;
};

const categories = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Meat' },
    { id: 2, name: 'Vegetarians' },
    { id: 3, name: 'Grill' },
    { id: 4, name: 'Spicy' },
    { id: 5, name: 'Closed' },
];

const Categories: React.FC<CategoriesProps> = React.memo(
    ({ categoryID, onChangeCategory }) => {
        return (
            <ul className="categories-list">
                {categories.map(({ id, name }, index) => (
                    <li key={id} className="categories-item">
                        <button
                            onClick={() => onChangeCategory(index)}
                            className={classNames(
                                'btn btn-transparent categories-item__btn',
                                categoryID === index ? 'active' : ''
                            )}
                            title={name}
                        >
                            {name}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
);

export default Categories;
