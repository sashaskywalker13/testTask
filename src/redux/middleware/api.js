import { SUCCESS, REQUEST, FAILURE } from '../constants';

export default (store) => (next) => async (action) => {
    if (!action.url) return next(action);

    const { url, type } = action;
    next({ type: type + REQUEST });

    try {
        const response = await fetch(url, {
            method: 'GET',
        });
        const result = await response.json();
        next({ type: type + SUCCESS, result });
    } catch(error) {
        next({ type: type + FAILURE, error });
    }
};