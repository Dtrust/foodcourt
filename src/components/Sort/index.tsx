import React from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import './Sort.sass';
import { SortProperties, SortPropertiesEnum } from '../../store/filter/types';
import { setSort } from '../../store/filter/slice';

type SortItem = {
    name: string;
    sortProperty: SortPropertiesEnum;
};

type SortProps = {
    value: SortProperties;
};

type ClickOutside = MouseEvent & {
    path: Node[];
};

export const sortOptions: SortItem[] = [
    { name: 'Popularity ↑', sortProperty: SortPropertiesEnum.RATING_ASC },
    { name: 'Popularity ↓', sortProperty: SortPropertiesEnum.RATING_DESC },
    { name: 'Price ↑', sortProperty: SortPropertiesEnum.PRICE_ASC },
    { name: 'Price ↓', sortProperty: SortPropertiesEnum.PRICE_DESC },
    { name: 'Name ↑', sortProperty: SortPropertiesEnum.NAME_ASC },
    { name: 'Name ↓', sortProperty: SortPropertiesEnum.NAME_DESC },
];

export const Sort: React.FC<SortProps> = React.memo(({ value }) => {
    const dispatch = useDispatch();

    const sortRef = React.useRef<HTMLDivElement>(null);

    const [openSort, setOpenSort] = React.useState(false);

    const onSelectOption = (obj: SortItem) => {
        dispatch(setSort(obj));
        setOpenSort(false);
    };

    React.useEffect(() => {
        const handleClickOutsideSort = (event: MouseEvent) => {
            const _event = event as ClickOutside;

            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setOpenSort(false);
            }
        };

        document.body.addEventListener('click', handleClickOutsideSort);

        return () => {
            document.body.removeEventListener('click', handleClickOutsideSort);
        };
    }, []);

    return (
        <div
            ref={sortRef}
            className={classNames('sort', openSort ? 'active' : '')}
        >
            <div className="sort-label">
                <svg
                    className="sort-label__icon"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" />
                </svg>
                <span className="sort-label__title">Sort by:</span>
                <button
                    onClick={() => setOpenSort(!openSort)}
                    className="sort-label__btn"
                >
                    {value.name}
                </button>
            </div>
            {openSort && (
                <div className="sort-popup">
                    <ul className="sort-popup__list">
                        {sortOptions.map((obj, index) => (
                            <li
                                key={index}
                                onClick={() => onSelectOption(obj)}
                                className={classNames(
                                    'sort-popup__item',
                                    value.sortProperty === obj.sortProperty
                                        ? 'active'
                                        : ''
                                )}
                            >
                                <span>{obj.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
