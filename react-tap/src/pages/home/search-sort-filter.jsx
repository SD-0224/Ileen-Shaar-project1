import { LayoutContainer } from "../../shared/components/layoutContainer";
import { SearchBar } from "./search";
import styles from "./search-sort-filter.module.css";
import { DropDown } from "./dropdownMenus/DropDown";

export function SearchSortFilter() {
  return (
    <LayoutContainer>
      <form className={styles.searchSortFilter}>
        <SearchBar />
        <DropDown />
      </form>
    </LayoutContainer>
  );
}
