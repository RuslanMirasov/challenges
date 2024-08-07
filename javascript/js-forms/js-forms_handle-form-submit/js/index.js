console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const currentForm = e.target;
  const data = new FormData(currentForm);
  const formData = {};

  data.forEach((value, key) => {
    if (value) {
      formData[key] = value;
    }
  });

  console.log(formData);

  const age = Number(formData.age) || 0;
  const badness = Number(formData.badness);
  const ageBadnessSum = age + badness;

  console.log(
    `The age-badness-sum of "${formData.firstName}" is "${ageBadnessSum}"`
  );

  form.reset();
  document.getElementById("first-name").focus();
});
