export enum StatusEnum {
    LOADING = 'Loading',
    SUCCESS = 'Success',
    ERROR = 'Error',
}

export type ProductOptionsType = {
    id: number;
    typeName: string;
};

export type ProductItemType = {
    id: string;
    name: string;
    price: number;
    ing: string;
    imageUrl: string;
    types: ProductOptionsType[];
    sizes: number[];
    rating: number;
};

export type SearchProductParams = {
    category: string;
    order: string;
    sortBy: string;
    search: string;
    productsLimit: number;
};

export interface ProductsSliceState {
    items: ProductItemType[];
    status: StatusEnum;
}
