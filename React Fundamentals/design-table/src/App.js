import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import { connect } from 'react-redux';
import { search } from './actions/search';
import { reset } from './actions/reset';
import getEntryData from './selectors/getEntryData';

const mapStateToProps = state => {
  const getEntryDataWrapped = (id) => getEntryData(state, id);

  return {
    searchText: state.searchText,
    getEntryData: getEntryDataWrapped,
    searchCol: state.searchCol,
    gridData: state.gridData,
    gridColumns: state.gridColumns,
    pagination: state.pagination
  };
}

const mapDispatchToProps = {
  search,
  reset
};

class App extends React.Component {
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => this.searchInput = node}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.props.searchText]}
        autoEscape
        textToHighlight={text.toString()} />
    ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();

    const payload = {
      searchText: selectedKeys[0],
      searchCol: dataIndex
    };

    this.props.search(payload);
  };

  handleReset = clearFilters => {
    clearFilters();
    this.props.reset();
  };

  render() {
    const { getEntryData, gridData, gridColumns, pagination } = this.props;

    const columns = gridColumns.map(x => {
      return { ...x, ...this.getColumnSearchProps(x.key) }
    });

    const dataSource = gridData.map(getEntryData);

    return <Table pagination={pagination} columns={columns} dataSource={dataSource} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);