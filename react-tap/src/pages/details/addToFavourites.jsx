import React from "react";
import styles from "./detailsCard.module.css";

function AddToFavourites() {
  return (
    <div className={styles.addFavouritesContainer}>
      <div className={styles.favouritesContainer}>
        <h4>Interested about this topic?</h4>
        <button className={styles.addToFavouritesButton}>
          <span>Add to favourites</span>
          <ion-icon name="heart-outline"></ion-icon>
        </button>
        <h5>Unlimited Credits</h5>
      </div>
    </div>
  );
}

export default AddToFavourites;
