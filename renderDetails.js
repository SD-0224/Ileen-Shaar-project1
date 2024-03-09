import {
  detailsFavouritesButton,
  favouritesButtonText,
} from "./addRemoveFavourites.js";
import { generateStarsHTML } from "./generateStars.js";

export function renderDetails(data) {
  const container = document.querySelector(".detail-container");
  const details = createDetailsElement(data);
  const detailsCard = createDetailsCardElement(data);
  const subtopic = generateSubtopicsList(data.topic, data.subtopics);

  container.appendChild(details);
  container.appendChild(detailsCard);
  container.appendChild(subtopic);

  document
    .querySelector(".addToFavourites-button")
    .addEventListener("click", function (event) {
      detailsFavouritesButton(data);
    });
}

function generateSubtopicsList(topic, subtopics) {
  const subtopicList = document.createElement("li");
  subtopicList.classList.add("subtopics");

  subtopicList.innerHTML = `
    <h2>${topic} Sub Topics</h2>
    ${generateSubtopics(subtopics)}
    `;
  return subtopicList;
}

function generateSubtopics(subtopics) {
  let subtopicsHTML = "";

  subtopics.forEach((subtopic) => {
    subtopicsHTML += ` <ul>
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        ${subtopic}
      </ul>`;
  });

  return subtopicsHTML;
}

function createDetailsElement(data) {
  const details = document.createElement("div");
  details.classList.add("details");

  details.innerHTML = `
    <h3 class="category">${data.category}</h3>
    <h2 class="topic">${data.topic}</h2>
    <div class="rating">${generateStarsHTML(data.rating)}</div>
    <p class="lang-description">${data.description}</p>
  `;

  return details;
}

function createDetailsCardElement(data) {
  const detailsCard = document.createElement("div");
  detailsCard.classList.add("detailsCard-container");

  detailsCard.innerHTML = `
    <div class="details-card">
      <img src='logos/${data.image}' alt="" />
      <div class="details-card-info">
        <div class="headline">
          <p class="lang-author">
            <div class="details-card-category">${data.topic}</div>
            <div class="by"> by</div>
            <div class="author-name">${data.name}</div>
          </p>
        </div>
        <div class="add-favourites-container">
          <div class="favourites-container">
            <h4>Interested about this topic?</h4>
            <button class='addToFavourites-button'>
              <span>${favouritesButtonText(
                data.id
              )}</span> <ion-icon name="heart-outline"></ion-icon>
            </button>
            <h5>Unlimited Credits</h5>
          </div>
        </div>
      </div>
    </div>
  `;

  return detailsCard;
}
