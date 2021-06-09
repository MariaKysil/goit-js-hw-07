const listRef = document.querySelector("#categories");
console.log(`У списку ${listRef.children.length} категорії.`);

const itemsRef = document.querySelectorAll(".item");

itemsRef.forEach((element) => {
  console.log(`Категорія: ${element.firstElementChild.textContent}`);
  console.log(
    `Кількість елементів: ${element.lastElementChild.children.length}`
  );
});
