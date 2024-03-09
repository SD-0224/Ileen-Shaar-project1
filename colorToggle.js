let colorMode = localStorage.getItem("colorMode") || "light";
const colorModeButton = document.getElementById("darkModeToggle");
const colorschemeLink = document.getElementById("colorscheme");

export function updateButtonAndColorscheme() {
  const buttonText = colorMode === "light" ? "Dark Mode" : "Light Mode";
  const icon = colorMode === "light" ? "moon-outline" : "sunny-outline";

  colorModeButton.innerHTML = `<ion-icon name="${icon}"></ion-icon> <span class="button-text" id="buttonText">${buttonText}</span>`;
  colorschemeLink.href =
    colorMode === "light"
      ? "colorModes/light-colors.css"
      : "colorModes/dark-colors.css";
}

export function toggleColorMode() {
  colorMode = colorMode === "light" ? "dark" : "light";
  updateButtonAndColorscheme();
  localStorage.setItem("colorMode", colorMode);
}
