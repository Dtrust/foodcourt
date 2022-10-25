import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import classNames from 'classnames';

import { setSearchValue } from '../../store/slices/filterSlice';

import './Search.sass';

import icons from '../../assets/images/icons.svg';

const Search = ({ isMobileSearchActive, cssClass, handleFocus }) => {
    const dispatch = useDispatch();
    const [localValue, setLocalValue] = React.useState();

    const updateSearchValue = React.useCallback(
        debounce(str => {
            // window.location.href = '/#menu';
            dispatch(setSearchValue(str));
        }, 750),
        []
    );

    const onChangeInput = e => {
        setLocalValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    return (
        <div
            className={classNames(
                'search',
                cssClass,
                isMobileSearchActive ? 'active' : ''
            )}
        >
            <input
                ref={handleFocus}
                value={localValue}
                onChange={onChangeInput}
                className={classNames('search-field')}
                placeholder="Search pizzas"
            />
            <svg className="search-icon" width="20" height="20">
                <use href={`${icons}#search`} />
            </svg>
        </div>
    );
};

export default Search;
