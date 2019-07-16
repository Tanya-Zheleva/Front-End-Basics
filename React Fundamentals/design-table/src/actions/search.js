import { SEARCH } from './actionTypes/SEARCH';

export function search(payload) {
    return {
        type: SEARCH,
        payload
    };
}