// // Створіть масив styles з елементами 'jazz' і 'blues'
// // Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// // Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// // Напишіть функцію logItems(array), яка приймає масив як аргумент
// // і виводить у консоль кожен його елемент у форматі:
// // "<номер елемента> - <значення елемента>".
// // Використайте цикл for для перебору елементів масиву.
// // Нумерація елементів повинна починатися з 1 (а не з 0).


// // const styles = ["jazz", "blues"];
// // styles.push("rock-n-roll");
// // console.log(styles);

// // const index = styles.indexOf("blues");
// // if (index !== -1) {
// //     // styles[index] = "classic";
// //     styles.splice(index, 1, "classic");
// //     console.log(styles);
    
// // }



// // function logItems(array) {
// //     for (let i = 0; i <= array.length - 1; i++) {
// //         console.log(`${i + 1} - ${array[i]}`);
        
// //     }
// // }
// // logItems(styles);



// // Напишіть функцію checkLogin(array), яка:
// // Приймає масив логінів як аргумент.
// // Запитує ім'я користувача через prompt.
// // Перевіряє, чи є введене ім'я у переданому масиві.
// // Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// // Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     let name = prompt("Please enter your name");
//     if (array.includes(name)) {
//     return alert (`Welcome, ${name}!`)
//     } else {
//         return alert ("User not found")
//     }
// }

// console.log(checkLogin(logins));


// // Напишіть функцію, яка сумуватиме сусідні числа
// // і пушитиме їх в новий масив.

// // const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// // уточнення: складати необхідно перше число з другим, потім друге - з третім,
// // третє - з четвертим і так до кінця.
// // В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const newArr = [];
// let sum = 0;
// for (let i = 0; i < someArr.length - 1; i++) {

//     sum = someArr[i] + someArr[i + 1];
//     newArr.push(sum);
    
// }
// console.log(newArr);


// // Напишіть функцію findSmallestNumber(numbers),
// // яка шукає найменше число в масиві.
// // Додайте перевірку, що функція отримує саме масив, і
// // якщо функція отримує масив - поверніть з функції найменше число,
// // в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];


// function findSmallestNumber(args) {
//     if (!Array.isArray(args)) {
//         console.log('Sory, it is not an array!');
//         return
//     }
//     console.log(Math.min(...args));
    
// };

// findSmallestNumber(numbers);
// findSmallestNumber(4);

// // Напишіть функцію findLongestWord(string), яка
// // приймає довільний рядок, що складається лише зі слів, розділених
// // пробілами (параметр string), і повертатиме найдовше слово у реченні.

// // Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// // console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

// function findLongestWord(string) {
//     const array = string.split(" ");
//     console.log(array);
//     let theLongestWord = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (theLongestWord.length < array[i].length){
//         theLongestWord = array[i];
//             return theLongestWord;
//         }
//     }
// };

// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// // Напишіть скрипт, який для об'єкту user, послідовно:
// // 1 - додасть поле mood зі значенням 'happy',
// // 2 - замінить hobby на 'skydiving',
// // 3 - замінить значення premium на false,
// // 4 - виведе зміст об'єкта user у форматі
// // '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
    
// };


// // Є об'єкт, в якому зберігаються зарплати команди
// // Напишіть код для додавання усіх зарплат та
// // збережіть його результат в змінній sum.
// // Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
// };
  
// const zeroSalary = [];

// function sumAllSalaries (salaries) {
//     const allSalaries = Object.values(salaries);
//     let sum = 0;
//     for (const salary of allSalaries) {
//         sum += salary;
//         // console.log(sum);
//     }
//     if (sum === 0) {
//         return 0;
//     };
//     return sum;
// }

// console.log(sumAllSalaries(salaries));
// console.log(sumAllSalaries(zeroSalary));


// // Створіть об'єкт calculator з наступними методами:
// // read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// // sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// // mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// // винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// // Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// // методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     sum() {
//         if (this.exist() === true) {
//             const sum = this.a + this.b;
//             return sum;
//         } else {
//             return 'No such propeties';
//         }
//     },
//     mult() {
//             if(this.exist() === true) {
//             return this.a * this.b;
//         } else {
//             return 'No such propeties';
//         }
//     },
//     exist() {
//         return this.a !== undefined && this.b !== undefined;
//     }
// }


// // Напишіть функцію calcTotalPrice(fruits, fruitName),
// // яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// // Функція рахує і повертає загальну вартість фрукта
// // з таким ім'ям, ціною та кількістю з об'єкта.

// // Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// // назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];
  

// function calcTotalPrice(fruits, fruitName) {
//     let total = 0;
//     for (const fruit of fruits) {
//         if (fruitName === fruit.name) {
//             const item = fruit.price * fruit.quantity;
//             total += item;
//         }
        
//     }
// return total;
// }

// console.log(calcTotalPrice(fruits, "Банан"));



// const arr = [2, 4, 6];
// const result = arr.filter((el) => el * 2);
// console.log(result);


// let link = 'bhjhtf?';
// if(!link.endsWith('/')) {
//     link += '/';
// }
 
// console.log(link);


// let url = 'my-site20/0//';
// const isMySite = url.includes('my-site');
// const includesSlash = url.endsWith('/');

// url = isMySite && !includesSlash ? url + '/' : url ;

// console.log(url);
