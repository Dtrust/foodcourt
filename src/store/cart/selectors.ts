import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemByID = (id: string) => (state: RootState) =>
    state.cart.items.find(obj => obj.id === id);

export const selectCartProductGroup = (id: string) => (state: RootState) =>
    state.cart.groups.find(obj => obj.id === id);
