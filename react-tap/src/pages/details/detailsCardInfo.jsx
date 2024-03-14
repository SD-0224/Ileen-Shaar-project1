import React from "react";
import styles from "./detailsCard.module.css";

function DetailsCardInfo({ topic, name }) {
  return (
    <div className={styles.detailsCardInfo}>
      <div className={styles.headline}>
        <div className={styles.langAuthor}>
          <div className={styles.detailsCardCategory}>{topic}</div>
          <div className={styles.by}> by</div>
          <div className={styles.authorName}>{name}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCardInfo;
