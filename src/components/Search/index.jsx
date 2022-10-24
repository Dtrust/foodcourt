import React from 'react';
import debounce from 'lodash.debounce';

import classNames from 'classnames';

import './Search.sass';

import icons from '../../assets/images/icons.svg';
import { SearchContext } from '../../App';

const Search = ({ isMobileSearchActive, cssClass, handleFocus }) => {
    const [localValue, setLocalValue] = React.useState();
    const { setSearchValue } = React.useContext(SearchContext);

    const updateSearchValue = React.useCallback(
        debounce(str => {
            setSearchValue(str);
            window.location.href = '/#menu';
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
