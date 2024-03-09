export function filterOptions(data) {
  let filterOptions = document.getElementById("filter");
  const categoriesSet = new Set(data.map((item) => item.category));
  const categories = Array.from(categoriesSet);

  categories.forEach((category) => {
    let option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    filterOptions.appendChild(option);
  });
}
