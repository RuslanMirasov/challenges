console.clear();

import Circle from "./components/Circle/Circle.js";

const root = document.getElementById("root");
const circle = Circle("circle");
const square = Circle("square");
const pentagon = Circle("pentagon");

root.append(circle, square, pentagon);
