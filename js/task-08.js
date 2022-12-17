'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', onSearch);
console.log(form);
function onSearch(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  console.log(email);
  console.log(password);
  if (email.value === '' || password.value === '') {
    return alert('Усі поля повинні бути заповнені.');
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
