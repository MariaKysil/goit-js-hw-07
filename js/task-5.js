const inputRef = document.querySelector("#name-input");
const headingRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  headingRef.textContent = event.currentTarget.value;
}
