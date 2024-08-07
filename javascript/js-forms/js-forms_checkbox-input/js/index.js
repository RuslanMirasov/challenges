console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMassege = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccessMassege() {
  successMassege.setAttribute("hidden", "");
}

function showSuccessMassege() {
  successMassege.removeAttribute("hidden");
}

hideTosError();
hideSuccessMassege();

tosCheckbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    hideTosError();
    return;
  }
  showTosError();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  // --v-- write your code here --v--
  const tos = event.target.elements.tos.checked;
  if (!tos) {
    showTosError();
    hideSuccessMassege();
    return;
  }
  hideTosError();
  showSuccessMassege();
  event.target.reset();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
