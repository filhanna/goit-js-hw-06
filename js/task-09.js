'use strict';

const buttonChange = document.querySelector('.change-color');
const color = document.querySelector('.color');

buttonChange.addEventListener('click', () => {
  document.body.style.backgroundColor = color.textContent;
  color.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
