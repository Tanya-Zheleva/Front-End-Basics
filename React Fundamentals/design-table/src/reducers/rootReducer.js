import { SEARCH } from '../actions/actionTypes/SEARCH';
import { RESET } from '../actions/actionTypes/RESET';

const initialState = {
    searchText: '',
};

export function rootReducer(state = initialState, action) {
    if (action.type === SEARCH) {
        return Object.assign({}, state, {
            searchText: action.payload
        });
    } else if (action.type === RESET) {
        return state;
    }

    return state;
}