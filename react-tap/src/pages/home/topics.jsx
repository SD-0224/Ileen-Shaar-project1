import styles from "./topics.module.css";
import { LayoutContainer } from "../../shared/components/layoutContainer";
import { TopicContent } from "./topic-content";
import { SearchSortFilter } from "./search-sort-filter";
import { Favourites } from "../../shared/components/favourites/favourites";

export function Topics({ topics }) {
  return (
    <LayoutContainer>
      <SearchSortFilter />
      <div className={styles.cardsContainer}>
        {topics.map((topic, index) => (
          <TopicContent key={index} topic={topic} />
        ))}
      </div>
      <Favourites
        storedFavourites={[
          {
            topic: "HTML",
            image: "ajax.gif",
            rating: 4,
          },
          {
            topic: "CSS",
            image: "accessibility.png",
            rating: 4,
          },
        ]}
      />
    </LayoutContainer>
  );
}
