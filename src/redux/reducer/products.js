import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    products: {},
}

export default (state = initialState, action) => {
    const { type, result, error } = action;

    switch (type) {
        case LOAD_PRODUCTS + REQUEST: 
        return {
            ...state,
            loading: true,
            error: null,
        }
        case LOAD_PRODUCTS + SUCCESS: 
        return {
            ...state,
            loading: false,
            loaded: true,
            products: result.reduce((acc, item) => ({ ...acc, [item.productId]: item }), {}),
        }
        case LOAD_PRODUCTS + FAILURE: 
        return {
            ...state,
            loading: false,
            loaded: false,
            error,
        };
        default:
            return state;
    }
};