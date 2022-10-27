import { CartItemType } from '../store/cart/types';

export const calcCartTotalPrice = (items: CartItemType[]) => {
    return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

export const calcCartTotalCount = (items: CartItemType[]) => {
    return items.reduce((sum, obj) => obj.count + sum, 0);
};
