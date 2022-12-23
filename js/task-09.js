'use strict';

const buttonToClick = document.querySelector('.change-color');
const spanWithColor = document.querySelector('.color');

buttonToClick.addEventListener('click', () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanWithColor.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
