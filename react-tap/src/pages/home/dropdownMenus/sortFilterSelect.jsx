import React from "react";
import styles from "./sortFilterSelect.module.css";

export function SortFilterSelect({ label, options }) {
  return (
    <div className={styles.sortFilter}>
      <label>{label}</label>
      <select name="sort" id="sort">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
