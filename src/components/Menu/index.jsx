import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryID } from '../../store/slices/filterSlice';

import { Categories, Product, Sort, Skeleton } from '../index';

import './Menu.sass';
import { SearchContext } from '../../App';

const { REACT_APP_DB } = process.env;

const Menu = () => {
    const dispatch = useDispatch();

    const { categoryID, sort } = useSelector(state => state.filterSlice);
    const sortProperty = sort.sortProperty;

    const { searchValue } = useContext(SearchContext);

    const [products, setProducts] = useState([]);
    const [productsLength, setProductsLength] = useState(0);
    const [limit, setLimit] = useState(9);
    const [isLoading, setIsLoading] = useState(true);

    const onChangeCategory = id => {
        dispatch(setCategoryID(id));
    };

    const category = categoryID > 0 ? `category=${categoryID}` : '';
    const order = sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortProperty.replace('-', '');
    const search = searchValue ? `search=${searchValue}` : '';

    const goods = products.map(obj => <Product key={obj.id} {...obj} />);

    useEffect(() => {
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

        const loadProducts = () => {
            fetch(
                `${REACT_APP_DB}?p=1&l=${limit}&${category}&sortBy=${sortBy}&order=${order}&${search}`
            )
                .then(res => res.json())
                .then(items => {
                    setProducts(items);
                    setIsLoading(false);
                });
        };
        loadProducts();
    }, [categoryID, sortProperty, limit, searchValue]);

    const loadMore = () => {
        if (productsLength > limit) {
            setLimit(limit => limit + 9);
            console.log('more');
        } else {
            console.log('end');
            return;
        }
        console.log(productsLength);
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
                        ? [...new Array(limit)].map((_, index) => (
                              <Skeleton key={index} />
                          ))
                        : goods}
                </div>
                <div className="menu-showmore">
                    {productsLength > limit ? (
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
