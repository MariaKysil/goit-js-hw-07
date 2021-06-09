const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const listRef = document.querySelector("#ingredients");
console.log(listRef);

const makeIngredientsList = (options) => {
  return options.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    return item;
  });
};

const elements = makeIngredientsList(ingredients);
listRef.append(...elements);
