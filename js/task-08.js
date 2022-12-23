'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', onSearch);
console.log(form);
function onSearch(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === '' || password.value === '') {
    return alert('Усі поля повинні бути заповнені.');
  }

  const result = {
    email: email.value,
    password: password.value,
  };
  console.log(result);
  evt.currentTarget.reset();
}
