document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loadingIndicator").style.display = "block";

  fetch("https://tap-web-1.herokuapp.com/topics/list")
    .then((response) => response.json())
    .then((data) => {
      let sort = "Default";
      let filter = "Default";
      let searchTerm = "";
      let dataCopy = data.slice();

      document.getElementById("loadingIndicator").style.display = "none";

      let filterOptions = document.getElementById("filter");
      const categoriesSet = new Set(data.map((item) => item.category));
      const categories = Array.from(categoriesSet);

      categories.forEach((category) => {
        let option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        filterOptions.appendChild(option);
      });

      let searchTimeout;

      document
        .getElementById("searchInput")
        .addEventListener("input", (event) => {
          clearTimeout(searchTimeout);
          searchTerm = event.target.value.trim().toLowerCase();

          searchTimeout = setTimeout(() => {
            searchTopics(searchTerm);
          }, 300);
        });

      function searchTopics(searchTerm) {
        updateData(applyFiltersAndSort(searchTerm));
      }

      document.getElementById("filter").addEventListener("change", (event) => {
        filter = event.target.value;
        updateData(applyFiltersAndSort(searchTerm));
      });

      document.getElementById("sort").addEventListener("change", (event) => {
        sort = event.target.value;
        updateData(applyFiltersAndSort(searchTerm));
      });

      function applyFiltersAndSort(searchTerm = "") {
        let filteredData =
          filter === "Default"
            ? dataCopy
            : dataCopy.filter((item) => item.category === filter);

        if (searchTerm) {
          filteredData = filteredData.filter((item) =>
            Object.values(item).some(
              (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchTerm.toLowerCase())
            )
          );
        }

        if (sort !== "Default") {
          filteredData = filteredData.sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }

        return filteredData;
      }

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
