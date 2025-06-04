console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userObject = Object.fromEntries(formData);
  console.log("User Data:", userObject);
  const ageBadness =
    Number(event.target.elements.age.value) +
    Number(event.target.elements.badness.value);
  console.log(
    "The age-badness-sum of",
    event.target.elements.firstName.value,
    "is",
    ageBadness
  );
  event.target.reset();
  event.target.elements.firstName.focus();
});
