export function getAnimal(animals) {
  if (!animals) {
    return `I do not like animals at all!`;
  }

  return animals === "cats" ? `I totally love cats!` : `I like ${animals}!`;
}
