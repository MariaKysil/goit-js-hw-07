const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList = "valid";
  } else {
    inputRef.classList = "invalid";
  }
}
