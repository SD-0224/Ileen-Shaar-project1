import { loadFavourites } from "./favourites.js";

export function detailsFavouritesButton(data) {
  const span = document.querySelector(".addToFavourites-button span");
  const buttonText = span.textContent.trim();

  if (buttonText === "Add to Favourites") {
    span.textContent = "Remove from Favourites";
    addToFavourites(data);
  } else {
    span.textContent = "Add to Favourites";
    removeFromFavourites(data.id);
  }
  loadFavourites();
}

export function addToFavourites(data) {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  favourites.push({
    id: data.id,
    image: data.image,
    topic: data.topic,
    rating: data.rating,
  });
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

export function removeFromFavourites(id) {
  let favourites = JSON.parse(localStorage.getItem("favourites"));
  favourites = favourites.filter((item) => item.id !== id);
  localStorage.setItem("favourites", JSON.stringify(favourites));
}

export function favouritesButtonText(id) {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  const existingFavourite = favourites.find((item) => item.id === id);
  if (existingFavourite) {
    return "Remove from Favourites";
  } else {
    return "Add to Favourites";
  }
}
