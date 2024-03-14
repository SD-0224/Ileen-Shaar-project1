import styles from "./DropDown.module.css";
import { SortFilterSelect } from "./sortFilterSelect";
import { useId } from "react";

export function DropDown() {
  const sortId = useId();
  const filterId = useId();

  const sortOptions = [
    { value: "Default", label: "Default" },
    { value: "topic", label: "Topic" },
    { value: "name", label: "Author" },
  ];

  const filterOptions = [{ value: "Default", label: "Default" }];

  return (
    <div className={styles.dropDown}>
      <SortFilterSelect id={sortId} label="Sort By" options={sortOptions} />
      <SortFilterSelect
        id={filterId}
        label="Filter By"
        options={filterOptions}
      />
    </div>
  );
}
