console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

/* Buttons */
const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');
const lightModeButton = document.querySelector('[data-js="light-mode-button"]');
const togglekModeButton = document.querySelector('[data-js="toggle-button"]');

/* Listeners */
darkModeButton.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

lightModeButton.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

togglekModeButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
