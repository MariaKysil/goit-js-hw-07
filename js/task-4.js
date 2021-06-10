const counterValue = document.querySelector("#value");
console.log(counterValue);
const incrementBtn = document.querySelector('[data-action="increment"]');
console.log(incrementBtn);
const decrementBtn = document.querySelector('[data-action="decrement"]');
console.log(decrementBtn);

const counter = {
  value: 0,

  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
};

incrementBtn.addEventListener("click", () => {
  counter.increment();
  counterValue.textContent = counter.value;
});

decrementBtn.addEventListener("click", () => {
  counter.decrement();
  counterValue.textContent = counter.value;
});
