console.clear();

import Figure from "./components/Figure/Figure.js";

const root = document.getElementById("root");
const circle = Figure("circle");
const square = Figure("square");
const pentagon = Figure("pentagon");

root.append(circle, square, pentagon);
