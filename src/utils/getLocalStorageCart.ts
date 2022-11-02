import { calcCartTotalCount, calcCartTotalPrice } from './calcCartTotal';

export const getLocalStorageCart = () => {
    const cartData = localStorage.getItem('foodCourt-cart');
    const storageData = cartData ? JSON.parse(cartData) : [];
    const items = storageData.items ? storageData.items : [];
    const groups = storageData.groups ? storageData.groups : [];
    const totalPrice = calcCartTotalPrice(items) || 0;
    const totalCount = calcCartTotalCount(items) || 0;

    return {
        groups,
        items,
        totalPrice,
        totalCount,
    };
};
