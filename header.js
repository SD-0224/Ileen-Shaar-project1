import { toggleColorMode, updateButtonAndColorscheme } from "./colorToggle.js";
import { toggleFavouritesSection } from "./favourites.js";

updateButtonAndColorscheme();

const colorModeButton = document.getElementById("darkModeToggle");
const favouritesButton = document.getElementById("favourites");

colorModeButton.addEventListener("click", toggleColorMode);
favouritesButton.addEventListener("click", toggleFavouritesSection);
