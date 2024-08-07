console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const form = event.target.elements;

  const formData = {
    a: Number(form.numberA.value),
    b: Number(form.numberB.value),
    operator: form.operator.value,
  };

  switch (formData.operator) {
    case "addition":
      result = add(formData.a, formData.b);
      break;
    case "subtraction":
      result = subtract(formData.a, formData.b);
      break;
    case "multiplication":
      result = multiply(formData.a, formData.b);
      break;
    default:
      result = divide(formData.a, formData.b);
  }

  event.target.reset();
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
