// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

// const myCategory = document.querySelector('#categories');
// const liItem = document.querySelectorAll('.item');
// console.log(` `);
//  console.log('liItem :', liItem);
// liItem.forEach(el => {
//   // console.log(el.querySelector('h2').textContent);
//   // console.log('количество', el.querySelectorAll('ul>li').length);
//   console.log(`Категория : ${el.querySelector('h2').textContent}, количество элементов - ${el.querySelectorAll('ul>li').length}`);
// })

//======================================================================================================
//Задание 2

// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания
// DOM-узлов используй document.createElement().

// const ulProducts = document.querySelector('#ingredients');
// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];

// console.log(ulProducts);

// ingredients.forEach((el) =>  {
//  const li = document.createElement('li')
//  li.textContent = el
//  ulProducts.append(li) 
// })

// console.log(ulProducts);

// const fragment = document.createDocumentFragment();
// ingredients.forEach((el) =>  {
//    const li = document.createElement('li')
//     li.textContent = el
//    fragment.append(li) 
// })

// ulProducts.appendChild(fragment);
// console.log(ulProducts);



//==================================================
//Задание 3
//Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

//Все элементы галереи должны добавляться в DOM за одну операцию вставки.
//Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];
// let imgStr = '';
// const ul = document.querySelector('#galary');
// images.forEach(el =>{
//   const img = document.createElement('img');
//   img.src = el.url
//   imgStr += `<li> <img src=${el.url}></li>`
// })
// ul.insertAdjacentHTML('afterbegin',imgStr)

// console.log(imagesStr);

// const list = document.querySelector('#gallery');
// let imgStr = '';
// images.forEach(el => {
// const img = document.createElement('img');
// img.src = el.url;
// imgStr += `<li><img src=${el.url} alt=${el.alt}></li>`;
// });
// list.insertAdjacentHTML('afterbegin', imgStr);

//=====================================================
//task 4

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// const newValue = document.querySelector("#value");
// const increment = document.querySelector('button[data-action="increment"]');
// const decrement = document.querySelector('button[data-action="decrement"]');

// newValue.textContent = 0;
// increment.addEventListener("click", () => newValue.textContent= +(newValue.textContent) +100);
// decrement.addEventListener("click", () => newValue.textContent= +(newValue.textContent) -100);



//task 5
//===============================================================
//Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// function getName (){
//   output.textContent = input.value;
//   if(input.value === "") {
//     output.textContent = "незнакомец";
//   }
  
// }

// input.addEventListener('input', getName)

//task 6
//==================================================================================

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// const input = document.getElementById('validation-input');
// input.addEventListener ('input', () => {
//     if (input.value.length === 6) {
//         input.classList.remove('invalid')
//         input.classList.add('valid')
//     } else {
//         input.classList.add('invalid')
//     }
// })


//task 7
//==========================================================
// Напиши скрипт, который реагирует на изменение значения
//  input#font-size-control (событие input) и изменяет инлайн-стиль
//   span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const valInput = document.getElementById('font-size-control');
const valText = document.getElementById('text');

valInput.addEventListener ('input', function() {
valText.style.fontSize =  valInput.value + 'px' //  `${valInput.value}px`
}) 
