'use strict';
const scrollInput = document.getElementById('font-size-control');
const spanText = document.getElementById('text');

scrollInput.addEventListener('input', changeInput);

function changeInput(evt) {
  spanText.style.fontSize = scrollInput.value + 'px';
}
