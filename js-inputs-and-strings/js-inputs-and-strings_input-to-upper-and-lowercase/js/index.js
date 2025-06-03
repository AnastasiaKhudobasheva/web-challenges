console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowerCaseButton = document.querySelector('[data-js="button-lowercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", () => {
  input.value = input.value.toLowerCase();
});
