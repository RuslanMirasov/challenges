console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

function getCorrentTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

addButton.addEventListener("click", () => {
  const currentTime = getCorrentTime();
  const newMessageEl = document.createElement("li");
  newMessageEl.classList.add("toast-container__message");
  newMessageEl.innerHTML = `
    <b>I'm a new toast message.</b><br/>
    Created at <b style="color:#3f0097;">${currentTime}</b>
  `;
  toastContainer.append(newMessageEl);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
