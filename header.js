document.addEventListener("DOMContentLoaded", function () {
  let colorMode = localStorage.getItem("colorMode") || "light";

  let colorModeButton = document.getElementById("darkModeToggle");
  let colorModeButtonText = document.getElementById("buttonText");
  let colorschemeLink = document.getElementById("colorscheme");

  let favouritesButton = document.getElementById("favourites");
  let favouritesSection = document.getElementById("favourites-section");

  updateButtonAndColorscheme();

  colorModeButton.addEventListener("click", toggleColorMode);

  favouritesButton.addEventListener("click", toogleFavouritesSection);

  function updateButtonAndColorscheme() {
    if (colorMode === "light") {
      colorModeButtonText.textContent = "Dark Mode";
      colorschemeLink.href = "light-colors.css";
    } else {
      colorModeButtonText.textContent = "Light Mode";
      colorschemeLink.href = "dark-colors.css";
    }
  }

  function toggleColorMode() {
    colorMode = colorMode === "light" ? "dark" : "light";

    updateButtonAndColorscheme();

    localStorage.setItem("colorMode", colorMode);
  }

  function toogleFavouritesSection() {
    if (
      favouritesSection.style.display === "none" ||
      favouritesSection.style.display === ""
    ) {
      favouritesSection.style.display = "flex";
    } else {
      favouritesSection.style.display = "none";
    }
  }
});
