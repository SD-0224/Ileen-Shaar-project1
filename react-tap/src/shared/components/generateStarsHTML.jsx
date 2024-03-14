import React from "react";

export function generateStarsHTML(starIcons) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <ion-icon
        key={i}
        name={i < starIcons ? "star" : "star-outline"}
      ></ion-icon>
    );
  }

  return stars;
}
