import { LOAD_PRODUCTS, INCREMENT, DECREMENT } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });

export const loadProducts = () => ({
    type: LOAD_PRODUCTS,
    url: 'products.json',
})