import { fetchData } from "./fetch-url.js";
import { searchTopics } from "./topics.js";

let searchTimeout;

export function setupSearchEventListener(searchInput) {
  searchInput.addEventListener("input", function (event) {
    clearTimeout(searchTimeout);
    const searchPhrase = event.target.value.trim().toLowerCase();

    searchTimeout = setTimeout(async () => {
      const data = await fetchData(
        `https://tap-web-1.herokuapp.com/topics/list?phrase=${searchPhrase}`
      );
      searchTopics(data);
    }, 300);
  });
}
