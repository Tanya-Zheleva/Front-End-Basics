import { SEARCH } from '../actions/actionTypes/SEARCH';
import { RESET } from '../actions/actionTypes/RESET';

const data = {
    '1': {
        key: '1',
        name: 'John Brown',
        age: '32',
        address: 'New York No. 1 Lake Park',
    },
    '2': {
        key: '2',
        name: 'Joe Black',
        age: '42',
        address: 'London No. 1 Lake Park',
    },
    '3': {
        key: '3',
        name: 'Jim Green',
        age: '32',
        address: 'Sidney No. 1 Lake Park',
    },
    '4': {
        key: '4',
        name: 'Jim Red',
        age: '32',
        address: 'London No. 2 Lake Park',
    },
    '5': {
        key: '5',
        name: 'Danny Evans',
        age: '23',
        address: 'Sofia, Mladost',
    },
    '6': {
        key: '6',
        name: 'Harry Potter',
        age: '17',
        address: 'Hogwarts'
    },
    '7': {
        key: '7',
        name: 'Iva Ivanova',
        age: '21',
        address: 'Gabrovo'
    },
    '8': {
        key: '8',
        name: 'Iva Georgieva',
        age: '33',
        address: 'Novi Sad'
    }
};

const columnsConfig = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '30%'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: '30%'
    },
];

const dataKeys = Object.keys(data);

const pagination = {
    defaultPageSize: 3,
    showSizeChanger: true,
    pageSizeOptions: ['3', '6', '9'],
};

const initialState = {
    searchText: '',
    searchCol: '',
    gridData: dataKeys,
    gridColumns: columnsConfig,
    data: data,
    pagination: pagination
};

export function rootReducer(state = initialState, action) {
    if (action.type === SEARCH) {
        const { searchCol, searchText } = action.payload;
        let filteredKeys = state.gridData
            .filter(id => state.data[id][searchCol].toLowerCase().indexOf(searchText) !== -1);

        return Object.assign({}, state, {
            searchText: searchText,
            searchCol: searchCol,
            gridData: filteredKeys
        });
    } else if (action.type === RESET) {
        return Object.assign({}, state, {
            searchText: '',
            searchCol: '',
            gridData: dataKeys
        });
    }

    return state;
}