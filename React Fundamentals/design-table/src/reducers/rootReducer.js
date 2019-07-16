import { SEARCH } from '../actions/actionTypes/SEARCH';
import { RESET } from '../actions/actionTypes/RESET';

const ids = ['1', '2', '3', '4', '5'];

const initialState = {
    searchText: '',
    searchCol: '',
    gridData: ids,
    columnConfig: ['Name', 'Age', 'Address'],
    data: {
        '1': {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        '2': {
            key: '2',
            name: 'Joe Black',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
        '3': {
            key: '3',
            name: 'Jim Green',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        },
        '4': {
            key: '4',
            name: 'Jim Red',
            age: 32,
            address: 'London No. 2 Lake Park',
        },
        '5': {
            key: '5',
            name: 'Danny Evans',
            age: 23,
            address: 'Sofia, Mladost',
        },
    }
};

export function rootReducer(state = initialState, action) {
    if (action.type === SEARCH) {
        let filteredIds = [];
        const {searchCol, searchText} = action.payload;

        for (const id of ids) {
            if (state.data[id][searchCol].toString().toLowerCase().indexOf(searchText) !== -1) {
                filteredIds.push(id);
            }
        }

        return Object.assign({}, state, {
            searchText: searchText,
            searchCol: searchCol,
            gridData: filteredIds
        });
    } else if (action.type === RESET) {
        return Object.assign({}, state, {
            searchText: '',
            searchCol: '',
            gridData: ids
        });
    }

    return state;
}