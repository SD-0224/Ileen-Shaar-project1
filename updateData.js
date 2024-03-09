import { generateStarsHTML } from "./generateStars.js";

export function updateData(data) {
  const container = document.querySelector(".cards-container");

  container.innerHTML = "";

  data.forEach((card) => {
    const cardElement = document.createElement("a");
    cardElement.href = `details.html?cardId=${card.id}`;
    cardElement.classList.add("card");

    cardElement.innerHTML = `
                <img src="logos/${card.image}" alt="" />
                <div class="card-info">
                  <h3 class="card-category">${card.category}</h3>
                  <h2 class="card-topic">${card.topic}</h2>
                  <div class="stars">
                    ${generateStarsHTML(card.rating)}
                  </div>
                  <div class="card-author">
                    <p>Author: ${card.name}</p>
                  </div>
                </div>
              `;

    cardElement.addEventListener("click", function (event) {
      event.preventDefault();
      const updatedHref = this.href;
      window.location.href = updatedHref;
    });

    container.appendChild(cardElement);
  });
}
