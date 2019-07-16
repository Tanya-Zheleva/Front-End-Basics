export default function getFiltredData(state) {
  let filteredData = [];

  for (const key of state.gridData) {
    filteredData.push(state.data[key])
  }

  return filteredData;
}