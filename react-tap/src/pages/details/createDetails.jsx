import { generateStarsHTML } from "../../shared/components/generateStarsHTML";
import styles from "./createDetails.module.css";

export function CreateDetails({ details }) {
  return (
    <div className={styles.details}>
      <h3 className={styles.category}>{details.category}</h3>
      <h2 className={styles.topic}>{details.topic}</h2>
      <div className={styles.rating}>{generateStarsHTML(details.rating)}</div>
      <p className={styles.langDescription}>{details.description}</p>
    </div>
  );
}
