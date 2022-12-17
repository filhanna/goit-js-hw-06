'use strict';
const buttonPlus = document.querySelector("[data-action='decrement']");
const buttonMinus = document.querySelector("[data-action='increment']");
const value = document.querySelector('#value');

let counterValue = 0;

const increment = () => {
  counterValue += 1;

  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  value.textContent = counterValue;
};

buttonPlus.addEventListener('click', decrement);
buttonMinus.addEventListener('click', increment);
