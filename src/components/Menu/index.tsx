import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'qs';

import {
    setCategoryID,
    updateProductsLimit,
    setProductsLimit,
    setFilters,
    filterSelector,
} from '../../store/slices/filterSlice';

import { Categories, ProductBlock, Sort, Skeleton, Search } from '../index';
import { sortOptions } from '../Sort';
import {
    fetchProducts,
    productsSelector,
} from '../../store/slices/productsSlice';

import './Menu.sass';

const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isParams = React.useRef(false);
    const isMounted = React.useRef(false);

    const { categoryID, sort, productsLimit, searchValue } =
        useSelector(filterSelector);

    const sortProperty = sort.sortProperty;
    const { items, status } = useSelector(productsSelector);

    const onChangeCategory = (id: string) => {
        dispatch(setCategoryID(id));
    };

    const category = categoryID > 0 ? `category=${categoryID}` : '';
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortProperty.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    // If first render, then check url-params and save to redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortOptions.find(
                obj => obj.sortProperty === params.sortProperty
            );

            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );

            isParams.current = true;
        }
    }, []);

    React.useEffect(() => {
        if (!isParams.current) {
            dispatch(
                // @ts-ignore
                fetchProducts({
                    category,
                    order,
                    sortBy,
                    search,
                    productsLimit,
                })
            );
        }

        isParams.current = false;
    }, [categoryID, sortProperty, productsLimit, searchValue]);

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                categoryID,
                productsLimit,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryID, sortProperty, productsLimit, searchValue]);

    const loadMore = () => {
        dispatch(updateProductsLimit());
        dispatch(setProductsLimit);
    };

    const skeleton = (productsLimit: number) =>
        [...new Array(productsLimit)].map((_, index) => (
            <Skeleton key={index} />
        ));
    const products = items.map((obj: any) => (
        <ProductBlock key={obj.id} {...obj} />
    ));

    return (
        <section id="menu" className="block menu">
            <div className="container menu-content">
                <div className="title menu-title">
                    <span className="title-decor menu-title__decor">Menu</span>
                    <h2 className="title-text menu-title__text">Menu</h2>
                </div>
                {status === 'error' ? (
                    <div className="error">
                        <p className="error-msg">
                            Sorry, products does't load, please try again later
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="menu-categories categories">
                            <Categories
                                categoryID={categoryID}
                                onChangeCategory={onChangeCategory}
                            />
                        </div>
                        <div className="menu-wrap">
                            <div className="menu-sort">
                                <Sort />
                            </div>
                            <Search />
                        </div>
                        <div className="menu-products">
                            {status === 'loading'
                                ? skeleton(productsLimit)
                                : products}
                        </div>
                        <div className="menu-showmore">
                            {items.length >= productsLimit ? (
                                <button
                                    onClick={loadMore}
                                    className="btn btn-transparent menu-showmore__btn"
                                >
                                    {status === 'loading'
                                        ? 'loading...'
                                        : 'Show more'}
                                </button>
                            ) : (
                                ''
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Menu;
