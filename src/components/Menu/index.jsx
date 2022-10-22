import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import qs from 'qs';

import {
    setCategoryID,
    updateProductsLimit,
    setProductsLimit,
    setFilters,
} from '../../store/slices/filterSlice';

import { Categories, Product, Sort, Skeleton } from '../index';

import './Menu.sass';
import { SearchContext } from '../../App';
import { sortOptions } from '../Sort';

const { REACT_APP_DB } = process.env;

const Menu = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isParams = useRef(false);
    const isMounted = useRef(false);

    const { categoryID, sort, productsLimit } = useSelector(
        state => state.filterSlice
    );

    const sortProperty = sort.sortProperty;

    const { searchValue } = useContext(SearchContext);

    const [products, setProducts] = useState([]);
    const [productsLength, setProductsLength] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = id => {
        dispatch(setCategoryID(id));
    };

    const category = categoryID > 0 ? `category=${categoryID}` : '';
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortProperty.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    const goods = products.map(obj => <Product key={obj.id} {...obj} />);

    const loadProducts = () => {
        axios
            .get(
                `${REACT_APP_DB}?p=1&l=${productsLimit}&${category}&sortBy=${sortBy}&order=${order}&${search}`
            )
            .then(res => {
                setProducts(res.data);
                setIsLoading(false);
            });
    };

    const fetchProducts = () => {
        setIsLoading(true);

        if (!productsLength) {
            const loadProductsLength = async () => {
                await fetch(`${REACT_APP_DB}`)
                    .then(res => res.json())
                    .then(items => {
                        setProductsLength(items.length);
                        console.log('request');
                    });
            };
            loadProductsLength();
        }
        loadProducts();
    };

    // If first render, then check url-params and save to redux
    useEffect(() => {
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

    useEffect(() => {
        if (!isParams.current) {
            fetchProducts();
        }

        isParams.current = false;
    }, [categoryID, sortProperty, productsLimit, searchValue]);

    useEffect(() => {
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
        if (productsLength > productsLimit) {
            dispatch(updateProductsLimit());
            dispatch(setProductsLimit);
        }
    };

    return (
        <section id="menu" className="block menu">
            <div className="container menu-content">
                <div className="title menu-title">
                    <span className="title-decor menu-title__decor">Menu</span>
                    <h2 className="title-text menu-title__text">Menu</h2>
                </div>
                <div className="menu-categories categories">
                    <Categories
                        categoryID={categoryID}
                        onChangeCategory={onChangeCategory}
                    />
                </div>
                <div className="menu-sort">
                    <Sort />
                </div>
                <div className="menu-products">
                    {isLoading
                        ? [...new Array(productsLimit)].map((_, index) => (
                              <Skeleton key={index} />
                          ))
                        : goods}
                </div>
                <div className="menu-showmore">
                    {productsLength > productsLimit ? (
                        <button
                            onClick={loadMore}
                            className="btn btn-transparent menu-showmore__btn"
                        >
                            {isLoading ? 'loading...' : 'Show more'}
                        </button>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </section>
    );
};

export default Menu;
