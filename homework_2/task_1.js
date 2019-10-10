// Задание 1

// Напиши функцию logItems(array), которая получает массив и использует
//  цикл for, который для каждого элемента массива будет выводить
//   в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива
//  ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
//   а для индекса 2 выведет '3 - Ajax'.

// Вызовы функции для проверки работоспособности твоей реализации.

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

const arr = [];
const logItems = function(arr) {
  for(let i = 0; i < arr.length; i +=1) {
    console.log(`'${i+1}- ${arr[i]}'`);
  }
  return arr;
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// work 2
//https://github.com/goitacademy/javascript-homework/tree/master/homework-02#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-2

// function calculateEngravingPrice(message, pricePerWorld) {
//   const arr = message.split(' ');
//   console.log('arr :', arr);
//   return arr.length * pricePerWorld;
// }

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

// console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100

// задание 3
//https://github.com/goitacademy/javascript-homework/tree/master/homework-02#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-3
// 'use strict'

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let maxWordsLength = words[0];

//   for(const word of words ) {
//     if(word.length > maxWordsLength.length) {
//       maxWordsLength = word
//     }
//   }
// return maxWordsLength
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// Задание 4
//https://github.com/goitacademy/javascript-homework/tree/master/homework-02#%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-4

// Напиши функцию formatString(string) принимающую строку в параметр string.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40-ка
//  символов и добавляет в конец строки троеточие '...', после чего возвращает укороченную версию.
// Вызовы функции для проверки работоспособности твоей реализации.

// const string = [];
// const formatString = function(string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return `${string.slice(0, 40)}...`;
//   }
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// вернется форматированная строка

// Задание 5
// Напиши функцию checkForSpam(str), принимающую 1 параметр string - строку. Функция проверяет
// ее на содержание слов spam и sale. Если нашли зарещенное слово то функция возвращает true,
// если запрещенных слов нет функция возвращает false. Слова в строке могут быть в произвольном регистре.

// Вызовы функции для проверки работоспособности твоей реализации.

// let string = "";
// const word = "spam";
// const word1 = "sale";
// const checkForSpam = function(string) {
//   return (
//     string.toLowerCase().includes(word) || string.toLowerCase().includes(word1)
//   );
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Задание 6
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число.
//  Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор,
// пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой,
//  необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//   Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
//  Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
//   Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
//    при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается
//    ввести число в prompt.

// let input;
// const numbers = [];
// let total = 0;

// while(input !== null) {
//   input = prompt('Ведите число');
//   if (!isNaN(input) && input !== null) {
//     numbers.push(+input);
//     console.log(numbers);

//   }else if (isNaN(input)){
//   alert ('Это не число, попробуйте еще раз!');
//   }
  
//   }for(const key of numbers){
//     total += key;
// }
// alert(`Общая сумма чисел равна ${total}`)


// work 7

// Есть массив logins с логинами пользователей. Напиши скрипт добавления логина в массив logins. Добавляемый логин должен:

// проходить проверку на длину от 4 до 16-ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login
// и верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон
// от 4-х до 16-ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый
//  логин как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина
//   еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть
//  строку 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяеть уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает
// строку 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает
//  строку 'Логин успешно добавлен!'

//  Принцип единственной ответственности функции - каждая функция делает что-то одно.
//  Это позволяет переиспользовать код и изменять логику работы функции только в одном месте,
//  не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false. Такие функции принято называть
//  начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
//  При этом для проверок условия добавления использует
//   результаты вызовов других функций - isLoginUnique и isLoginValid.

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const isLoginValid = function(login) {
//   // if(login.length >= 4 && login.length <= 16) {
//   //   return true;
//   // } else {
//   //   return false;}
//   //  это можно записать проще через retern/
//   return login.length >= 4 && login.length <= 16;
// };

// const isLoginUnique = function(allLogins, login) {
//   // return allLogins.includes(login) !== true;
//   return !allLogins.includes(login);
// };

// const addLogin = function(allLogins, login) {
//   if(!isLoginValid(login)) {
//     return alert('Ошибка! Логин должен быть от 4 до 16 символов');
//   }
//   if(!isLoginUnique (allLogins, login)) {
//     return alert('Такой логин уже используется!');
//   }

//   allLogins.push(login);
//   return alert('Логин успешно добавлен!');
// };

// addLogin(logins, prompt('Enter login'));
// console.log(logins);

// Вызовы функции для проверки
// addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
// addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
// addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'*/
