/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch. 

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

let fork = 0;

const copyInput = () => {
  const result = `${secondInput.value} ${firstInput.value}`;
  secondInput.value = result.trim();
};

const copyInputUppercase = () => {
  const result = `${secondInput.value} ${firstInput.value.toUpperCase()}`;
  secondInput.value = result.trim();
};

const switchInputs = () => {
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  firstInput.value = secondValue;
  secondInput.value = firstValue;
};

button.addEventListener("click", () => {
  fork = fork >= 3 ? 1 : fork + 1;
  if (fork === 1) {
    copyInput();
  } else if (fork === 2) {
    copyInputUppercase();
  } else {
    switchInputs();
  }
});
