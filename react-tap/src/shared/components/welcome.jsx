import styles from "./welcome.module.css";
import { WelcomeShape } from "./welcome-shape";
import { WelcomeSectionContent } from "./welcome-content";

export function WelcomeSection() {
  return (
    <div className={styles.welcomeContainer}>
      <WelcomeShape />
      <div className={styles.welcome}>
        <WelcomeSectionContent />
      </div>
    </div>
  );
}
