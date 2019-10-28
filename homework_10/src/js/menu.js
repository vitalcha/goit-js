// import menuArr from './menuArr.js';
import menuTemplate from '../templates/dishes.hbs';
import menuArr from './menuArr.json'
console.log(menuArr);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuItems = menuTemplate(menuArr);
console.log(menuItems);

const menuDishes = document.querySelector('#menu');
console.log(menuDishes);
menuDishes.insertAdjacentHTML('afterbegin', menuItems);


const menu = document.querySelector('#menu');
const body = document.querySelector('body');
const input = document.querySelector('.switch__input');
input.addEventListener('input', changeTheme);
let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark-theme'){
body.classList.add(currentTheme);
input.checked=true;
}
function changeTheme() {
   if (input.checked) {
  body.classList.add('dark-theme');
  localStorage.setItem('theme', 'dark-theme');
   }
   else {
  body.classList.toggle('dark-theme');
  localStorage.setItem('theme', 'light-theme');
}
}

