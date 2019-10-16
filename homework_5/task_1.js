// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.
//В prototype функции-конструктора добавь метод getInfo(),
// который выводит в консоль значения полей login и email объекта который его вызвал.

// function Account(login, email) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function() {
//   return `Login ${this.login}, Email: ${this.email}`;
// };

// const mango = new Account("Mangozedog", "mango@dog.woof");
// console.log(mango.getInfo()); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account("Poly", "poly@mail.com");
// console.log(poly.getInfo()); // Login: Poly, Email: poly@mail.com

// Задание 2

// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку:
// User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers

// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({ name: "Mango", age: 2, followers: 20 });
// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({ name: "Poly", age: 3, followers: 17 });
// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Задание 3

// Напиши класс Storage,
// который будет создавать объекты для управления складом товаров.
//При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих


// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     for (let el of item)
    
//     return this.items.splice(this.items.indexOf(el),1);
//   }
// }
// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);
// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// Задание 4
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value; // '^.^'

// builder.pad('=');
// console.log(builder.value; // '=^.^='

// Задание 5
// Напиши класс Car с указанными свойствами и методами.

class Car {
   static getSpecs(car) {
  const {maxSpeed, speed, isOn, distance, price} = car;
  return console.log(`maxSpeed:  ${maxSpeed}, speed : ${speed}, isOn: ${isOn}, distance : ${distance}, price : ${price},` );
}

  // /*
  //  * Добавь статический метод `getSpecs(car)`,
  //  * который принимает объект-машину как параметр и выводит
  //  * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
  //  */

  // /*
  //  * Конструктор получает объект настроек.
  //  *
  //  * Добавь свойства будущеего экземпляра класса:
  //  *  speed - текущая скорость, изначально 0
  //  *  price - цена автомобиля
  //  *  maxSpeed - максимальная скорость
  //  *  isOn - заведен ли автомобиль, значения true или false. Изначально false
  //  *  distance - общий киллометраж, изначально 0
  //  */
constructor({maxSpeed, price}) {
  this.maxSpeed = maxSpeed;
  this._price = price;
  this.speed - 0;
  this.distance = 0;
  this.isOn = false;
}

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */
  get price(){
    return this._price;
   }

   set price(price){
    return this._price = price;
   }
  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn(isOn) {
    this.isOn = false;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff(isOn) {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if(this.speed + value <= this.maxSpeed){
      this.speed = this.speed + value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if(this.speed >=0){
      this.speed -= value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if(this.isOn)
    this.distance = this.speed * hours;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
