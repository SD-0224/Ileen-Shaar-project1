import { generateStarsHTML } from "../generateStarsHTML";
import styles from "./favourites-cards.module.css";

export function FavouritesCards({ content }) {
  return (
    <div className={styles.favouriteCards}>
      <img src={content.image} alt="" />
      <h2>{content.topic}</h2>
      <div className={styles.favouriteCardsStars}>
        {generateStarsHTML(content.rating)}
      </div>
    </div>
  );
}
