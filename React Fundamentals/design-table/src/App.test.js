import { rootReducer } from './reducers/rootReducer';

let state;
const data = {
  '1': {
    key: '1',
    name: 'John Brown',
    age: '32',
    address: 'New York No. 1 Lake Park',
  }
}

beforeEach(() => {
  state = {
    searchText: '',
    searchCol: '',
    gridData: ['1'],
    data: data,
  }

  return state;
});

describe('rootReducer', () => {
  it('should return inital state', () => {
    expect(
      rootReducer(undefined, {}))
      .toMatchSnapshot();
  });

  it('should handle resset', () => {
    expect(
      rootReducer(undefined, { type: 'RESET' }))
      .toMatchSnapshot();
  });

  it('should handle search', () => {
    expect(
      rootReducer(state, { type: 'SEARCH', payload: {searchText: 'j', searchCol: 'name'} })
    ).toMatchSnapshot();
  })
});
