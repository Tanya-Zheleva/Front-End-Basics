import React from 'react';
import { Table, Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';
import './App.css';
import { connect } from 'react-redux';
import { search } from './actions/search';
import { reset } from './actions/reset';
import getEntryData from './selectors/getEntryData';
import getColumnConfig from './selectors/getColumnConfig';

const mapStateToProps = state => {
  const getEntryDataWrapped = (id) => getEntryData(state, id);

  return {
    searchText: state.searchText,
    data: state.data,
    getEntryData: getEntryDataWrapped,
    searchCol: state.searchCol,
    gridData: state.gridData,
    columnConfig: getColumnConfig(state)
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
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
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
        textToHighlight={text.toString()}
      />
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
    // const columns = [];
    // let width = 100 / this.props.columnConfig.length;

    // for (const col of this.props.columnConfig) {
    //   let lowerCaseCol = col.toLowerCase();

    //   const currentCol = {
    //     title: col,
    //     dataIndex: lowerCaseCol,
    //     key: lowerCaseCol,
    //     width: `${width}%`,
    //     ...this.getColumnSearchProps(lowerCaseCol),
    //   }

    //   columns.push(currentCol);
    // }

    const { getEntryData, gridData } = this.props;

    let columns = this.props.columnConfig.map(x => {
      return {
        ...x,
        ...this.getColumnSearchProps(x.key)
      }
    });

    const dataSource = gridData.map(getEntryData);

    return (
      <Table columns={columns} dataSource={dataSource} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
