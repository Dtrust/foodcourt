import { calcCartTotalCount, calcCartTotalPrice } from './calcCartTotal';

export const getLocalStorageCart = () => {
    const cartData = localStorage.getItem('foodCourt-cart');
    const items = cartData ? JSON.parse(cartData) : [];
    const totalPrice = calcCartTotalPrice(items) || 0;
    const totalCount = calcCartTotalCount(items) || 0;

    return {
        items,
        totalPrice,
        totalCount,
    };
};
