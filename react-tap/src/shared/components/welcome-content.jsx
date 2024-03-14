import React from "react";
import styles from "./welcome-content.module.css";

export function WelcomeSectionContent() {
  return (
    <div className={styles.welcomeSection}>
      <p>Welcome to our website!</p>
      <h3>We have a new design that's fresh, modern, and easy to use.</h3>
    </div>
  );
}
