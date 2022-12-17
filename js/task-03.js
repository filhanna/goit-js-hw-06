'use strict';
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');
images.forEach(image => {
  let li = document.createElement('li');
  let img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.style = 'width:500px ; height:300px';
  li.appendChild(img);
  list.appendChild(li);
});
list.style = 'list-style-type:none; display:flex; gap:10px';
