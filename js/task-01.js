'use strict';

const totalCategori = document.querySelectorAll('.item');
console.log(`Number of ${totalCategori.length} categories:`);

const categoriesArray = [...totalCategori]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArray);
