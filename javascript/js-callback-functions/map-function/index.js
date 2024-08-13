const numbers = [1, 2, 3, 4, 5];

const double = (number) => {
  return number * 2;
};

const myMap = (numbers, double) => {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    result.push(double(numbers[i]));
  }
  return result;
};

console.log(myMap(numbers, double));
