export type CartItemType = {
    id: string;
    productID: string;
    name: string;
    price: number;
    ing: string;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
};

export type CartGroupType = {
    id: string;
    count: number;
};

export interface CartSliceState {
    totalPrice: number;
    totalCount: number;
    items: CartItemType[];
    groups: CartGroupType[];
}
