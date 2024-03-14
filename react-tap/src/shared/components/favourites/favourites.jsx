import { LayoutContainer } from "../layoutContainer";
import { FavouritesCards } from "./favourites-cards";
import styles from "./favourites.module.css";

export function Favourites({ storedFavourites }) {
  return (
    <div className={styles.favouritesSection} id="favourites-section">
      <LayoutContainer>
        <div>My Favourite Topics</div>
        <div className={styles.favouriteCardsContainer}>
          {storedFavourites.map((element, index) => (
            <FavouritesCards key={index} content={element} />
          ))}
        </div>
      </LayoutContainer>
    </div>
  );
}
