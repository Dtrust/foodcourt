export enum StatusEnum {
    LOADING = 'Loading',
    SUCCESS = 'Success',
    ERROR = 'Error',
}

export type Product = {
    id: string;
    name: string;
    price: number;
    ing: string;
    imageUrl: string;
    types: [{ id: string; typeName: string }];
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
    items: Product[];
    status: StatusEnum;
}
