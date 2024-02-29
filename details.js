const urlParams = new URLSearchParams(window.location.search);

const cardId = urlParams.get("cardId");

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loadingIndicator").style.display = "block";

  fetch(`https://tap-web-1.herokuapp.com/topics/details/${cardId}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("loadingIndicator").style.display = "none";
      updateData(data);
    })
    .catch((error) => {
      document.getElementById("loadingIndicator").style.display = "none";

      const errorLoading = document.createElement("div");
      errorLoading.classList.add("errorLoadingMsg");
      errorLoading.innerText =
        "Something went wrong. Web topics failed to load.";
      document.querySelector("main").appendChild(errorLoading);
    });

  function updateData(data) {
    const container = document.querySelector(".detail-container");
    const details = document.createElement("div");
    details.classList.add("details");

    //  container.innerHTML = "";

    details.innerHTML = `
                        <h3 class="category">${data.category}</h3>
                        <h2 class="topic">${data.topic}</h2>
                         <div class="rating">
                            ${generateStarsHTML(data.rating)}
                           </div>
                          <p class="lang-description">
                               ${data.description}
                           </p>
                
                        `;

    container.appendChild(details);

    const detailscard = document.createElement("div");
    detailscard.classList.add("detailsCard-container");

    detailscard.innerHTML = `
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
        <button>
          Add to Favourites <ion-icon name="heart-outline"></ion-icon>
        </button>
        <h5>Unlimited Credits</h5>
      </div>
    </div>
    </div>
  </div>
    `;

    container.appendChild(detailscard);

    const subtopics = document.createElement("li");
    subtopics.classList.add("subtopics");

    subtopics.innerHTML = `
    <h2>${data.topic} Sub Topics</h2>
    ${generateSubtopics(data.subtopics)}
    `;

    container.appendChild(subtopics);
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

  function generateStarsHTML(starIcons) {
    let starsHTML = "";

    for (let i = 0; i < 5; i++) {
      if (i < starIcons) {
        starsHTML += `<ion-icon name="star"></ion-icon>`;
      } else {
        starsHTML += '<ion-icon name="star-outline"></ion-icon>';
      }
    }

    return starsHTML;
  }
});
