import styles from "./search.module.css";

export function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <ion-icon name="search-outline"></ion-icon>
      <input id="searchInput" type="text" placeholder="Search the website..." />
    </div>
  );
}
