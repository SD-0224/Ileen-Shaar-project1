import styles from "./detailsContainer.module.css";

export function DetailsContainer({ children }) {
  return <div className={styles.detailsContainer}>{children}</div>;
}
