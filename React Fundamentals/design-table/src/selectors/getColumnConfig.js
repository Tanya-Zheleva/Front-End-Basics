export default function getColumnConfig(state) {
    const columns = [];
    let width = 100 / state.columnConfig.length;

    for (const col of state.columnConfig) {
      let lowerCaseCol = col.toLowerCase();

      const currentCol = {
        title: col,
        dataIndex: lowerCaseCol,
        key: lowerCaseCol,
        width: `${width}%`
      };

      columns.push(currentCol);
    }

    return columns;
}