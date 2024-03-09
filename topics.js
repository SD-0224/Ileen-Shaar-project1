import { fetchData } from "./fetch-url.js";
import { filterOptions } from "./filterOptions.js";
import { setupSearchEventListener } from "./search.js";
import { applyFiltersAndSort } from "./filterAndSort.js";
import { updateData } from "./updateData.js";

document.getElementById("loadingIndicator").style.display = "block";

const data = await fetchData("https://tap-web-1.herokuapp.com/topics/list");
document.getElementById("loadingIndicator").style.display = "none";
filterOptions(data);
let sort = "Default";
let filter = "Default";
let searchTerm;

const searchInput = document.getElementById("searchInput");
setupSearchEventListener(searchInput, fetchData);

document.getElementById("filter").addEventListener("change", (event) => {
  filter = event.target.value;
  updateData(applyFiltersAndSort(searchTerm || data, filter, sort));
});

document.getElementById("sort").addEventListener("change", (event) => {
  sort = event.target.value;
  updateData(applyFiltersAndSort(searchTerm || data, filter, sort));
});

export function searchTopics(data) {
  searchTerm = data.slice();
  updateData(applyFiltersAndSort(searchTerm, filter, sort));
}

updateData(data);
