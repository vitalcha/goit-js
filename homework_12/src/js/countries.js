// import fetchCountries from './fetchCountries.js';

// const input = document.querySelector('.input');
// const ul = document.querySelector('.country')
// let inputValue = '';

// function getCountry(inputValue) {
//   return new Promise ((resolve, reject) => {
//     resolve(inputValue)
//   });
// }

// // input.addEventListener('change', (e) => {
// //   inputValue = e.target.value;
// //   // console.log(inputValue);
// //   getCountry(inputValue)
// //   .then(fetchCountries)
// //   .then(data => console.log(data))
// // })

// // добавляем слушателя

// input.addEventListener('input', (e) => {
//     inputValue = e.target.value;
//     console.log(e.target.value);
//     fetchCountries(e.target.value)
//     // .then(data => data.filter(item => item.name.includes('')))
//     .then(data =>
//       data.reduce((acc, item) =>
//     {
//      acc += `<li>${item.name}</li>`
//      return acc;
//     }, ''))

//     .then(string => ul.innerHTML = string)
// })
//       `<li>${item.name}</li>))
// .then(data => data.map(item => {ul.innerHTML =
//       `<li>${item.name}</li>
// `

import fetchCountries from './fetchCountries';
import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
import debounce from 'lodash.debounce';

const input = document.querySelector('.input');
console.log(input);
const ul = document.querySelector('.country');
console.log(ul);
input.addEventListener('input',
debounce( e => { console.log('debounce');
  fetchCountries(e.target.value)
    .then(data => {
      if (data.length <= 11 && data.length !== 1) {
        PNotify.defaults.icons = 'material';
        PNotify.error({
          title: 'Too many matches found.',
          text: 'Please enter a more specific query!',
          addClass: 'custom nonblock',
          delay: 2000,
          icon: true,
        });
        return data.reduce((acc, item) => {
          acc += `<li>${item.name}</li>`;
          return (ul.innerHTML = acc);
        }, '');
      } else if (data.length === 1) {
        return data.reduce((acc, item) => {
          acc += `<h2 class="coutry__title">${
            item.name
          }</h2><div class="country__wrapper">
          <div class="left__side">
          <p><span style="font-weight: bold">Capital: </span>${item.capital}</p>
          <p><span style="font-weight: bold">Population: </span>${
            item.population
          }</p>
          <p><span style="font-weight: bold">Languages: </span>
          <ul>
          ${item.languages.reduce((acc, cur) => {
            return (acc += `<li>${cur.name}</li>`);
          }, '')}
          </ul></p>
          </div>
          <div class="right__side"><img src="${
            item.flag
          }" width="500" height="400" alt="Flag"></div>`;
          return (ul.innerHTML = acc);
        }, '');
      } else {
        return '';
      }
    })
    .catch(err => console.log(err));
}, 1000));

