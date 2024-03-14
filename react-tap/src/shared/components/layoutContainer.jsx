import React from "react";
import styles from "./layoutContainer.module.css";

export function LayoutContainer({ className, children }) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
