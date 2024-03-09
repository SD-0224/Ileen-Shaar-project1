export function applyFiltersAndSort(data, filter, sort) {
  let filteredData =
    filter === "Default"
      ? data
      : data.filter((item) => item.category === filter);

  if (sort !== "Default") {
    filteredData = filteredData.sort((a, b) => a[sort].localeCompare(b[sort]));
  }
  return filteredData;
}
