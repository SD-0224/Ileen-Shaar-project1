export function generateStarsHTML(starIcons) {
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    starsHTML += `<ion-icon name="${
      i < starIcons ? "star" : "star-outline"
    }"></ion-icon>`;
  }

  return starsHTML;
}
