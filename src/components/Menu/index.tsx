import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import qs from 'qs';

import { Categories, ProductBlock, Sort, Skeleton, Search } from '../index';
// import { sortOptions } from '../Sort';

import { useAPPDispatch } from '../../store/store';
import { selectFilter } from '../../store/filter/selectors';
import { selectProduct } from '../../store/product/selectors';
import {
    setCategoryID,
    updateProductsLimit,
    setProductsLimit,
} from '../../store/filter/slice';
import { fetchProducts } from '../../store/product/actions';
import { StatusEnum } from '../../store/product/types';

import './Menu.sass';

export const Menu = () => {
    const dispatch = useAPPDispatch();
    // const navigate = useNavigate();

    const isParams = React.useRef(false);
    // const isMounted = React.useRef(false);

    const { categoryID, sort, productsLimit, searchValue } =
        useSelector(selectFilter);

    const sortProperty = sort.sortProperty;
    const { items, status } = useSelector(selectProduct);

    const onChangeCategory = React.useCallback(
        (id: number) => {
            dispatch(setCategoryID(id));
        },
        [dispatch]
    );

    const category = categoryID > 0 ? `category=${categoryID}` : '';
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortProperty.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    // If first render, then check url-params and save to redux
    // React.useEffect(() => {
    //     if (window.location.search) {
    //         const params = qs.parse(
    //             window.location.search.substring(1)
    //         ) as unknown as SearchProductParams;
    //
    //         const sort = sortOptions.find(
    //             obj => obj.sortProperty === params.sortBy
    //         );
    //
    //         // if (sort) {
    //         //     params.sortBy = sort
    //         // }
    //         dispatch(
    //             setFilters({
    //                 searchValue: params.search,
    //                 categoryID: Number(params.category),
    //                 productsLimit: Number(params.productsLimit),
    //                 sort: sort || sortOptions[0],
    //             })
    //         );
    //     }
    //     isParams.current = true;
    // }, []);

    React.useEffect(() => {
        if (!items.length) {
            dispatch(
                fetchProducts({
                    category,
                    order,
                    sortBy,
                    search,
                    productsLimit: Number(productsLimit),
                })
            );
        }

        isParams.current = false;
    }, []);

    // React.useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             sortProperty: sort.sortProperty,
    //             categoryID,
    //             productsLimit,
    //         });
    //
    //         navigate(`?${queryString}`);
    //     }
    //     isMounted.current = true;
    // }, [categoryID, sortProperty, productsLimit, searchValue]);

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
                {status === StatusEnum.ERROR ? (
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
                                <Sort value={sort} />
                            </div>
                            <Search />
                        </div>
                        <div className="menu-products">
                            {status === StatusEnum.LOADING
                                ? skeleton(productsLimit)
                                : products}
                        </div>
                        <div className="menu-showmore">
                            {items.length >= productsLimit ? (
                                <button
                                    onClick={loadMore}
                                    className="btn btn-transparent menu-showmore__btn"
                                >
                                    {status === StatusEnum.LOADING
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
