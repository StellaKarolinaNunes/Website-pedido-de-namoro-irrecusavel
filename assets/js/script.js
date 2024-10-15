const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");
const popup = document.querySelector(".popup");
const unlockButton = document.querySelector(".unlock-button");
const buttonContainer = document.querySelector(".button-container");

yesButton.addEventListener("click", () => {
  window.location.href = "teamo.html";
});

noButton.addEventListener("mouseover", () => {
  const wrapperRect = buttonContainer.getBoundingClientRect();
  const naoBtnRect = noButton.getBoundingClientRect();
  const i = Math.floor(Math.random() * (wrapperRect.width - naoBtnRect.width));
  const j = Math.floor(
    Math.random() * (wrapperRect.height - naoBtnRect.height)
  );
  noButton.style.position = "absolute";
  noButton.style.left = i + "px";
  noButton.style.top = j + "px";
});

noButton.addEventListener("click", () => {
  popup.style.display = "block"; // Show the popup
});

unlockButton.addEventListener("click", () => {
  window.location.href = "erro.html"; // Redireciona para erro.html
});

function redirectToPage() {
  window.location.href = "teamo.html";
}
