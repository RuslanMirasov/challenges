console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaGain = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  output.innerHTML = Math.round(pizzaGain);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaGain = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  output.innerHTML = Math.round(pizzaGain);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  const areaS1 = Math.PI * (radius1 * radius1);
  const areaS2 = Math.PI * (radius2 * radius2);

  return ((areaS2 - areaS1) / areaS1) * 100;
}

// Task 2
function updatePizzaDisplay(pizzaElement, newSize) {
  const currentSize = (newSize / 24) * 100;
  pizzaElement.style.width = `${currentSize}px`;
}

// Task 3
function updateOutputColor(size1, size2) {
  const gain = calculatePizzaGain(size1, size2);
  if (gain > 0) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
