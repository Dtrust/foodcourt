import React, { useState } from 'react';
import classNames from 'classnames';

import './Categories.sass';

const Categories = () => {
    const categories = [
        { id: 0, name: 'All' },
        { id: 1, name: 'Meat' },
        { id: 2, name: 'Vegetarians' },
        { id: 3, name: 'Grill' },
        { id: 4, name: 'Spicy' },
        { id: 5, name: 'Closed' },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <ul className="categories-list">
            {categories.map(({ id, name }, index) => (
                <li key={id} className="categories-item">
                    <button
                        onClick={() => setActiveIndex(index)}
                        className={classNames(
                            'btn btn-transparent categories-item__btn',
                            activeIndex === index ? 'active' : ''
                        )}
                        title={name}
                    >
                        {name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Categories;
