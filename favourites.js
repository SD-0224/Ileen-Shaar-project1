import { generateStarsHTML } from "./generateStars.js";

const favouritesSection = document.getElementById("favourites-section");
const favouritesContainer = document.querySelector(
  ".favourite-cards-container"
);

export function toggleFavouritesSection() {
  if (
    favouritesSection.style.display === "none" ||
    favouritesSection.style.display === ""
  ) {
    favouritesSection.style.display = "flex";
    loadFavourites();
  } else favouritesSection.style.display = "none";
}

export function loadFavourites() {
  document.getElementById("favourites-section").style.display = "flex";
  const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
  favouritesContainer.innerHTML = "";

  storedFavourites.forEach((element) => {
    const starsHTML = generateStarsHTML(element.rating);
    favouritesContainer.innerHTML += `
      <div class="favourite-cards">
        <img src="logos/${element.image}" alt="" />
        <h2>${element.topic}</h2>
        <div class="favourite-cards-star">
          ${starsHTML}
        </div>
      </div>`;
  });
}
