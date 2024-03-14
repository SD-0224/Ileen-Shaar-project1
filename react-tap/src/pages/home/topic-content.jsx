import React from "react";
import styles from "./topics.module.css";
import { generateStarsHTML } from "../../shared/components/generateStarsHTML";

export function TopicContent({ topic }) {
  return (
    <a href="/details" className={styles.card}>
      <img src={topic.image} alt="" />
      <div className={styles.cardInfo}>
        <h3 className={styles.cardCategory}>{topic.category}</h3>
        <h2 className={styles.cardTopic}>{topic.topic}</h2>
        <div className={styles.stars}>{generateStarsHTML(topic.rating)}</div>
        <div className={styles.cardAuthor}>
          <p>Author: {topic.name}</p>
        </div>
      </div>
    </a>
  );
}
