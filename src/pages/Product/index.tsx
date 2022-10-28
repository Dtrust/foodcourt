import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';

import { BuyButton, ProductOptions } from '../../components';

import { useAPPDispatch } from '../../store/store';
import { CartItemType } from '../../store/cart/types';
import { selectCartItemByID } from '../../store/cart/selectors';
import { buyNow } from '../../store/cart/slice';

import './Product.sass';
import { ProductItemType } from '../../store/product/types';

const { REACT_APP_DB } = process.env;

const Product: React.FC = () => {
    const [product, setProduct] = React.useState<ProductItemType>();
    const [activeType, setActiveType] = React.useState<number>(0);
    const [activeSize, setActiveSize] = React.useState(0);

    const navigate = useNavigate();
    const dispatch = useAPPDispatch();

    const { id } = useParams();
    const cartItem = useSelector(selectCartItemByID(String(id)));
    const cartItemCount = cartItem ? cartItem.count : 0;
    const cartItemID = cartItem ? cartItem.id : uuidv1();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchProduct() {
            try {
                const { data } = await axios.get(`${REACT_APP_DB}/${id}`);
                setProduct(data);
            } catch (err) {
                alert('no product');
                navigate('/');
            }
        }
        fetchProduct();
    }, [id, navigate]);

    if (!product) {
        return <>'Loading...'</>;
    }

    const addItemToCart = () => {
        const item: CartItemType = {
            id: cartItemID,
            productID: product.id,
            name: product.name,
            price: product.price,
            ing: product.ing,
            imageUrl: product.imageUrl,
            type: product.types[activeType].typeName,
            size: product.sizes[activeSize],
            count: 0,
        };
        dispatch(buyNow(item));
    };

    return (
        <section className="block-top product-page">
            <div className="container product-page__content">
                <div className="title">
                    <span className="title-decor">{product.name}</span>
                    <h1 className="title-text">{product.name}</h1>
                </div>
                <div className="product-page__wrap">
                    <img
                        className="product-page__img"
                        src={product.imageUrl}
                        alt={product.name}
                    />
                    <div className="product-page__info product-info">
                        <div className="product-info__wrap">
                            <h4 className="product-info__title">Ingredients</h4>
                            <p className="product-info__desc">{product.ing}</p>
                        </div>
                        <div className="product-info__wrap product-info__price">
                            <h4 className="product-info__title">Price:</h4>
                            <p className="product-info__desc product-info__price-count">
                                {product.price}$
                            </p>
                        </div>
                        <div className="product-info__wrap">
                            <h4 className="product-info__title">
                                Choose options
                            </h4>
                            <ProductOptions
                                types={product.types}
                                sizes={product.sizes}
                                activeSize={activeSize}
                                setActiveSize={setActiveSize}
                                activeType={activeType}
                                setActiveType={setActiveType}
                            />
                        </div>
                        <div className="product-info__wrap product-actions">
                            <BuyButton
                                addItemToCart={addItemToCart}
                                cartItemCount={cartItemCount}
                                cssClass="product-page__btn"
                                btnText="Add to Cart"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
