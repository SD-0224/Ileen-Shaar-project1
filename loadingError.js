export function displayLoadingError() {
  const mainContainer = document.querySelector("main");
  const errorLoading = document.createElement("div");
  errorLoading.classList.add("errorLoadingMsg");
  errorLoading.innerText = "Something went wrong. Web topics failed to load.";
  mainContainer.appendChild(errorLoading);
}
