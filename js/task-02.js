'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const foodIngredients = ingredients.map(ingredient => {
  let items = document.createElement('li');
  items.classList.toggle('item');
  items.textContent = ingredient;
  return items;
});
list.append(...foodIngredients);
console.log(list);
