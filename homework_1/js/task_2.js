// задание 1

//  Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре,
//  получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре,
//  получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// 'use strict';

// const name = 'Generator';
// let price = 1000;

// console.log(`You choice ${name}. Price for a piece - ${price} credits.`);

// price = 5000;
// console.log(`You choice ${name}. Price for a piece - ${price} credits.`);


// задание 2


// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) 
// и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение 
// "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;

// const total = 100;
// const ordered = 50;
// const input = prompt('где закладки');

// const result = ordered < total  &&  ordered === total;
// console.log(result);

// console.log(input = prompt ('Заказ оформлен, с вами свяжется менеджер'));
// const input = prompt('На складе недостаточно товаров!');
// const input = prompt('Заказ оформлен, с вами свяжется менеджер');
// let total = 100;
// let ordered = 50;

// 'use strict';

// const total = 100;
// let ordered = 50;


// if(ordered > total) {
//  console.log('На складе недостаточно товаров!');
//  } else {
//  console.log('Заказ оформлен, с вами свяжется менеджер');
//  }

// Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const userInput = prompt('Password');
// if (userInput === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else if (userInput === null) {
//   message = 'Отменено пользователем!';
// } else {
//   message = 'Доступ запрещен, неверный пароль';
// }
// alert(message);
// console.log(userInput);


/*/Задание 4

На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку.
Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).
 
При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь
хочет купить и сохранить в переменную.
Напиши скрипт который:

Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
Проверяет сможет ли пользователь оплатить заказ:
если сумма к оплате превышает количество кредитов на счету, выводи в консоль 
сообщение 'Недостаточно средств на счету!'.
в противном случае необходимо посчитать остаток кредитов на счету и вывести 
сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.
*/

// let credits = 23580;
// const pricePerDroid = 3000;

// const userInput = prompt('Сколько');

// if(userInput === null) {
//   alert = ('cencel user');
// }
// else{
//   let totalPrice = pricePerDroid * userInput;
  
//   if(totalPrice <= credits) {
//     credits = credits - totalPrice;
//         console.log(`вы купили ${userInput} дроидов, и у вас осталось ${credits}`);
//   }
//   else {
//     console.log('у вас нет денег');
//   }
// }

// 5 задание

// const CHINA = 'Китай';
// const CHINA_price = 100;
// const CHILI = 'Чили';
// const CHILI_price = 250;
// const AUSTRALIA = 'Австралия';
// const AUSTRALIA_price = 170;
// const INDIA = 'Индия';
// const INDIA_price = 80;
// const YMAIKA = 'Ямайка';
// const YMAIKA_price = 120;

// let userInput = prompt('Choose country of delivery');

// switch(userInput.toLowerCase()) {
//  case CHINA.toLowerCase():
//  alert(`Delivery in ${CHINA} will cost ${CHINA_price} credits`);
//  break;
//  case CHILI.toLowerCase():
//  alert(`Delivery in ${Chili} will cost ${CHILI_price} credits`);
//  break;
//  case AUSTRALIA.toLowerCase():
//  alert(`Delivery in ${AUSTRALIA} will cost ${AUSTRALIA_price} credits`);
//  break;
//  case INDIA.toLowerCase():
//  alert(`Delivery in ${INDIA} will cost ${INDIA_price} credits`);
//  break;
//  case YMAIKA.toLowerCase():
//  alert(`Delivery in ${YMAIKA} will cost ${YMAIKA_price} credits`);
//  break;
//  default:
//  alert('In your country delivery is not available');
// }
// console.log(userInput);


// Задание 6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

let input;
let total = 0;
let an;
while (input !== null) {
 input = prompt('Введите число');
 an = Number(input);
 if (Number.isNaN(an)) {
   continue;
 } else {
 total += an;
 }
}
alert(`Общая сумма чисел равна ${total}`);
console.log(total);