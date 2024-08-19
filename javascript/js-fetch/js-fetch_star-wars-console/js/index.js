console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Log all data
    console.log("Data: ", data);

    // Log all names list
    const allNames = data.results.map((person) => person.name);
    console.log("All names: ", allNames);

    // Log all persones with brown hair
    const personsWithBrownHair = data.results.filter((person) =>
      person.hair_color.includes("brown")
    );
    console.log("Peoples with brown hair: ", personsWithBrownHair);

    // R2-D2 eye color
    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    console.log("R2-D2 eye color: ", r2d2.eye_color);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(url);
