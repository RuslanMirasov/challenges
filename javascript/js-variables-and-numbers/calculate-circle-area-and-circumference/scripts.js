const radius = 5;

const circleArea = Math.PI * Math.pow(radius, 2);
const circumference = 2 * Math.PI * radius;

console.log(`For a circle with a radius of ${radius} units:`);
console.log(
  `- The area is approximately ${circleArea.toFixed(2)} square units.`
);
console.log(
  `- The circumference is approximately ${circumference.toFixed(2)} units.`
);
