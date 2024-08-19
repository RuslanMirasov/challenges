// let getNameAndCountry = ({ name, country }) => [name, country];

// let getRelocatedCity = (
//   city1,
//   city2 = { name: "Berlin", country: "Germany" }
// ) => {
//   let [, country] = getNameAndCountry(city2);
//   return {
//     ...city1,
//     country,
//   };
// };

function getNameAndCountry(city) {
  const nameAndCountry = [city.name, city.country];
  return nameAndCountry;
}

function getRelocatedCity(city1, city2) {
  if (!city2) {
    city2 = { name: "Berlin", country: "Germany" };
  }

  const nameAndCountry = getNameAndCountry(city2);
  const country = nameAndCountry[1];

  const relocatedCity = {};
  for (const key in city1) {
    relocatedCity[key] = city1[key];
  }
  relocatedCity.country = country;

  return relocatedCity;
}

const city1 = { name: "Mariupol", country: "Ukraine" };
const city2 = { name: "Berlin", country: "Germany" };

console.log(getRelocatedCity(city1, city2));
