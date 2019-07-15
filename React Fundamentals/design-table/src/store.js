import { createStore } from 'redux';

const initialState = {
    searchText: '',
    allSearches: []
};

function rootReducer(state = initialState, action) {
    if (action.type === 'SEARCH') {
        return Object.assign({}, state, {
            searchText: action.payload,
            allSearches: state.allSearches.concat(action.payload)
        }
        );
    }

    return state;
}

const store = createStore(rootReducer);

export default store;