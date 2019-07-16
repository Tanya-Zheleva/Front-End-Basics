import { RESET } from './actionTypes/RESET';

export function reset(payload) {
    return {
        type: RESET,
        payload
    };
}