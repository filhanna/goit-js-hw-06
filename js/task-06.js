'use strict';

const inputVal = document.querySelector('#validation-input');
const totalLength = inputVal.dataset.length;
inputVal.addEventListener('blur', inputValidation);

function inputValidation(event) {
  if (event.currentTarget.value.length === Number(totalLength)) {
    inputVal.classList.remove('invalid');
    inputVal.classList.add('valid');
  } else {
    inputVal.classList.remove('valid');
    inputVal.classList.add('invalid');
  }
}
