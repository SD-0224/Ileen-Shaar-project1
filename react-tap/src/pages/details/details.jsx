import { CreateDetails } from "./createDetails";
import { DetailsCard } from "./detailsCard";
import { DetailsContainer } from "./detailsContainer";

export function Details({ data }) {
  return (
    <DetailsContainer>
      <CreateDetails details={data} />
      <DetailsCard details={data}></DetailsCard>
    </DetailsContainer>
  );
  //   createDetailsElement(data);
  //   createDetailsCardElement(data);
  //   generateSubtopicsList(data.topic, data.subtopics);
}
