export enum SortPropertiesEnum {
    RATING_DESC = 'rating',
    RATING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
    NAME_DESC = 'name',
    NAME_ASC = '-name',
}
export type SortProperties = {
    name: string;
    sortProperty: SortPropertiesEnum;
};

export interface FilterSliceState {
    categoryID: number;
    productsLimit: number; //products per page
    searchValue: string;
    sort: SortProperties;
}
