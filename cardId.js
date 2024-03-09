export function getCardIdFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("cardId");
}
