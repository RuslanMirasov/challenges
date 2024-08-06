console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const currentHour = new Date().getHours();
  return currentHour < 6
    ? "Good Night"
    : currentHour < 12
    ? "Good Morning"
    : currentHour < 18
    ? "Good Afternoon"
    : currentHour < 22
    ? "Good Evening"
    : "Good Night";
}

function getDayColor() {
  const currentDay = new Date().getDay();
  console.log(currentDay);
  return currentDay === 1
    ? "darkgray"
    : currentDay === 6 || currentDay === 0
    ? "hotpink"
    : "lightblue";
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
