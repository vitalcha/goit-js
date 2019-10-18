import users from "./users.js";
console.log("users :", users);

// Задание 1
// Получить массив имен всех пользователей (поле name).

//  const getUserNames = users => {
//    const userArr = users.map(el => el.name);
//    return userArr;
//   //  let usersArr = [];
//   //  users.forEach(el => usersArr.push(el.name))
//   //  return usersArr;
//  };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
//===================================================================
// Задание 2
// Получить массив объектов пользователей по цвету глаз
//(поле eyeColor).

//  const getUsersWithEyeColor = (users, color) => {
//   return users
//   .filter((el) => el.eyeColor === color )
//   // .map((users) =>users.name)
//  };

//  console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
//=======================================================================

// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// const getUsersWithGender = (users, gender) => {
//   return users
//   .filter((el) => el.gender === gender)
//   .map((el) => el.name);
// };

// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//===================================================
// Задание 4

// Получить массив только неактивных
// пользователей (поле isActive).

//  const getInactiveUsers = users => {
//   const usersArr = users.filter((el) => el.isActive === false)
//   return usersArr;
//  };

//  console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
//===========================================================
// Задание 5
// Получить пользоваля (не массив) по email
//(поле email, он уникальный).

//  const getUserWithEmail = (users, email) => {
//   const usersArr = users.
//   find((el) => el.email === email)
//   // .map((el) => el.name)
//   return usersArr;
//  };

//  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
//  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//=================================================================
// Задание 6
// Получить массив пользователей попадающих
//в возрастную категорию от min до max лет (поле age).

//  const getUsersWithAge = (users, min, max) => {
//   const ageUsers = users.filter((el) => el.age >= min && el.age <= max)
//   return ageUsers;
//  };

//  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

//  console.log(getUsersWithAge(users, 30, 40));
// // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//======================================================
// Задание 7
// Получить общую сумму баланса
//(поле balance) всех пользователей.

// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce(
//     (totalBalance, user) => totalBalance + user.balance,
//     0
//   );

//   return totalBalance;
// };

// console.log(calculateTotalBalance(users)); // 20916

//===================================================
// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

//  const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
//     // .some(friend => friend === friendName))
//     .map(user => user.name)
//  };

//  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
//  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//================================================================
// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//        const FriendsCount = users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)
//        return FriendsCount
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
//==================================================================
// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не
// должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.


// const getSortedUniqueSkills = (array) =>{
//   const skills = [];
//   array.forEach(element => {
//     skills.push(... element.skills)
//   });
//   console.log('skills :', skills);
//   const unique = [];
//   skills.forEach(el =>){

//   }
// }
// console.log(getSortedUniqueSkills(users));

// const getSortedUniqueSkills = array => {
//   const unique =  array
//     .reduce((acc, el) => {
//       acc.push(...el.skills);
//       return acc;
//     }, [])
//     .reduce((acc, el) => {
//       !acc.includes(el) && acc.push(el);
//       return acc;
//     }, [])
//     .sort();
//   console.log("unique :", unique);
// };
// getSortedUniqueSkills(users);