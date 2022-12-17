'use strict';
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
let html = '';
ingredients.forEach(ingredient => {
  html += `<li class="item">${ingredient}</li>`;
});
list.innerHTML = html;
