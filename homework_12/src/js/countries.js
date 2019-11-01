import './fetchCountries.js'
import fetchCountries from './fetchCountries.js';


 const input = document.querySelector('.input');
let inputValue = '';


function getCountry(inputValue) {
  return new Promise ((resolve, reject) => {
    resolve(inputValue)
  });
}


const ul = document.querySelector('country')
// input.addEventListener('change', (e) => {
//   inputValue = e.target.value;
//   // console.log(inputValue);
//   getCountry(inputValue)
//   .then(fetchCountries)
//   .then(data => console.log(data))
// })
input.addEventListener('change', (e) => {
    inputValue = e.target.value;
    getCountry(inputValue)
    .then(fetchCountries)
    .then(data => data.map(item => {ul.innerHTML =
    `<li>${item.name}</li>
    `})
    )
})

