import styles from "./welcome-shape.module.css";

export function WelcomeShape() {
  return (
    <>
      <div className={styles.greenTriangle}></div>
      <div className={styles.blueTriangle}></div>
    </>
  );
}
