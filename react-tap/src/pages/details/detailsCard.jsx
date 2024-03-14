import { LayoutContainer } from "../../shared/components/layoutContainer";
import AddToFavourites from "./addToFavourites";
import styles from "./detailsCard.module.css";
import DetailsCardInfo from "./detailsCardInfo";
import ImageComponent from "./image";

export function DetailsCard({ details }) {
  return (
    <LayoutContainer className={styles.detailsCardContainer}>
      <div className={styles.detailsCard}>
        <ImageComponent src={details.image} alt="" />
        <div className={styles.detailsCardInfo}>
          <DetailsCardInfo topic={details.topic} name={details.name} />

          <AddToFavourites />
        </div>
      </div>
    </LayoutContainer>
  );
}
