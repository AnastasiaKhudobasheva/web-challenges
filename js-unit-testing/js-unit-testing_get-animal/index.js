export function getAnimal(animal) {
  if (animal === undefined) {
    return "I do not like animals at all!";
  }

  if (animal === "cats") {
    return "I totally love cats!";
  }

  return `I like ${animal}!`;
}
