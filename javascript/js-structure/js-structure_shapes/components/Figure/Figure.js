import getRandomColor from "../../utils/randomColor.js";

function Figure(className) {
  const circle = document.createElement("div");
  circle.classList.add(className);
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}

export default Figure;
