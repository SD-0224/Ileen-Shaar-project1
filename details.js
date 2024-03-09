import { getCardIdFromURL } from "./cardId.js";
import { fetchData } from "./fetch-url.js";
import { renderDetails } from "./renderDetails.js";

const loadingIndicator = document.getElementById("loadingIndicator");
loadingIndicator.style.display = "block";

const cardId = getCardIdFromURL();
const data = await fetchData(
  `https://tap-web-1.herokuapp.com/topics/details/${cardId}`
);

loadingIndicator.style.display = "none";
renderDetails(data);
