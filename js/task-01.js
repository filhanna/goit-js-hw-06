'use strict';
const list = document.querySelector('#categories').children;

console.log(`Number of ${list.length} categories:`);

[...list].forEach(categories => {
  console.log(`Category: ${categories.children[0].textContent}`);
  console.log(`Elements: ${categories.children[1].children.length}`);
});
