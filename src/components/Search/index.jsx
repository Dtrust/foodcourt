import React, { useContext } from 'react';

import classNames from 'classnames';

import './Search.sass';

import icons from '../../assets/images/icons.svg';
import { SearchContext } from '../../App';

const Search = ({ isMobileSearchActive, cssClass, handleFocus }) => {
    const { searchValue, setSearchValue } = useContext(SearchContext);

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
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className={classNames('search-field')}
                placeholder="Search by name"
            />
            <button className="search-btn">
                <svg className="search-icon" width="20" height="20">
                    <use href={`${icons}#search`} />
                </svg>
            </button>
        </div>
    );
};

export default Search;
