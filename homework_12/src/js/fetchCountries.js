// import countryTemplate from '../template/country.hbs';
// const basicUrl = 'https://restcountries.eu/rest/v2/name/${name}';

// const input = document.querySelector('input');
// const countryFind = ""
// input.addEventListener('change', countryFind)


// fetch(`${basicUrl}`)
//   .then(response => response.json())
//   .then(resData => {
//     console.log('get resData', resData);

//   })
export default function fetchCountries(searchQuery) {
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
  .then(resp => resp.json())
  .then(resData => console.log(resData));
 };
