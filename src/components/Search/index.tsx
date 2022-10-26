import React from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import classNames from 'classnames';

import { setSearchValue } from '../../store/slices/filterSlice';

import './Search.sass';

import icons from '../../assets/images/icons.svg';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [localValue, setLocalValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const updateSearchValue = React.useCallback(
        debounce(str => {
            dispatch(setSearchValue(str));
        }, 750),
        []
    );

    const onChangeInput = (e: any) => {
        setLocalValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setLocalValue('');
        inputRef.current?.focus();
    };

    return (
        <div className={classNames('search')}>
            <input
                ref={inputRef}
                value={localValue}
                onChange={onChangeInput}
                className={classNames('search-field')}
                placeholder="Search pizzas"
            />
            {localValue ? (
                <svg
                    onClick={onClickClear}
                    className="search-icon search-clear"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            ) : (
                <svg className="search-icon" width="20" height="20">
                    <use href={`${icons}#search`} />
                </svg>
            )}
        </div>
    );
};

export default Search;
