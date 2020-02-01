let array = [ // створення массиву через [] скобки
    "Яблоко",
    "Апельсин",
    "Слива",
];

let arrayByConstructor = new Array(); // створення масиву через конструктор
let arrayEmptySpaces = new Array(20); // створює массив пустих елементів з вказаною довжиною

array[3] = "Груша"; // додавання елементу у массива
array[2] = "Мандарин"; // перевизначення елементу массива


let stringsArray = ["Яблоко", "Апельсин", "Слива"]; // массив однотипних елементів

let anythingArray = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ]; // массив елементів різного типу

let matrix = [ // багатомірний массив
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// -----------------------------------------
// дії які руйнують внутрішню оптимізацію массива
let arrSlow = [1,2,3,4];

arrSlow.test = 5; // додавання не числових свойств
delete arrSlow[1]; // видалення свойств
arrSlow[1000] = 1000; // створення пустих значень в середині массиву

arrSlow[1000] = 1000; // заповнення значень массиву в оберненому порядку
arrSlow[999] = 999;

// -----------------------------------------
// перебори

let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) { // класичний цикл for
    // console.log( 'For:',arr[i] );
}

for (let fruit of arr) { // цикл for...of рекомендований для роботи ітерабельними об'єктами
    // console.log( 'ForOf:', fruit );
}

for (let key in arr) {                  // не рекомендовано використовувати оскільки у нього можуть потрапляти не тільки числові свойства,
                                        // наприклад при роботі з псевдо-масивами
    // console.log( 'ForIn:', arr[key] );
}

// -----------------------------------------
// приведення до строкі - toString

console.log( 'toString example: ', '[] + 1 =',[] + 1, '/ [1] + 1 =',[1] + 1, '/ [1,2] + 1 =', [1,2] + 1 ); // приклади методу toString


// -----------------------------------------
// МЕТОДИ МОССИВІВ
// додавання/видалення елементів
// -----------------------------------------
// push, pop, shift, unshift methods
let cars = ['BMW', 'Audi', 'Mercedes'];
// console.log('CARS:', cars);

cars.push('Porsche','Tesla'); // push (...items) – додає елементи в кінец та модифікує массив
// console.log('CARS after push:', cars);

const popReturn = cars.pop(); // pop() – видаляє елемент з кінця, модифікує массив та повертає видалений елемент
// console.log('CARS after pop:', cars);
// console.log('POP method return:',popReturn);

const shiftReturn = cars.shift(); // shift() – видаляє елемент з початку, модифікує массив та повертає видалений елемент
// console.log('CARS after shift:', cars);
// console.log('SHIFT method return:',shiftReturn);

cars.unshift('Porsche','Tesla'); // unshift(...items) – додає елементи на початок
// console.log('CARS after unshift:', cars);

// -----------------------------------------
// splice method

let words = ["Я", "изучаю", "JavaScript"];

words.splice(1, 1); // починаючи з позиції 1, видалити 1 элемент
words.splice(0, 3, "Давай", "танцевать"); // видалити 3 перших елемента та замінити їх двома новими
words.splice(2, 0, "сложный", "язык"); // додав 2 елемента починаючи з другого індексу
words.splice(-1, 0, "сложный", "язык"); // -1 індекси починають роботу з кінця массиву

let removed = words.splice(0, 2); // повертає массив видалених елементів та модифікує початковий массив
console.log('Splice method return',removed);

// -----------------------------------------
// slice

let test = ["t", "e", "s", "t"];
test.slice(1, 3); // повертає новий масив  елементів - ['e','s'] (копіює з 1 по 3 не включно)
test.slice(-2); // починає рахувати з кінця
const testCopy = test.slice(); // робить копію массиву

// -----------------------------------------
// concat

let numbers = [1, 2];

// створити массив з: arr і [3,4]
console.log( numbers.concat([3, 4]) ); // 1,2,3,4

// створити массив з: arr і [3,4] і [5,6]
console.log( numbers.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// створити массив з: arr і [3,4], і додати елементи 5 и 6
console.log( numbers.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

// перебор елеметів массиву
// -----------------------------------------
// forEach

let names = ['Діма', 'Ярік', 'Олег', 'Стас'];
names.forEach(function(name, index, array) { // здійснює перебор по масиву, нічого не повертає, все що повертається ігнорується
  //  console.log(name, index, array);
});

// пошук по массиву
// -----------------------------------------
// indexOf
let arrIndex = [1, 0, false];

console.log( arrIndex.indexOf(0) ); // повертає індекс елементу 1 або -1 якщо елемент не знайдено
console.log( arrIndex.indexOf(null) ); // елементь не знайдено повертає -1
console.log( arrIndex.indexOf(NaN) ); // -1 (повинен бути 0, але === перевірка на рівність не працює для NaN)

// lastIndexOf 
console.log( arrIndex.lastIndexOf(false) ); // повертає індекс елементу 2 але здійснює пошук з права на ліво

// includes
console.log( arrIndex.includes(1) ); //  шукає елемент у массиві та повертає true чи false
console.log( arrIndex.includes(NaN) ); // повертає true, includes працює для NaN

// find

let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let user = users.find((item, index , array) => item.id == 1);  // якщо true - повертає элемент і перебор зупиняється
                                                               // якщо всі ітерації виявились false повертає undefined
console.log(user);

// finsIndex 

let userIndex = users.findIndex((item, index , array) => item.id == 1) // якщо true - повертає індекс на якому був знайдений елемент і перебор зупиняється
                                                                       // якщо всі ітерації виявились false повертає -1 
console.log(userIndex);

// filter

let filteredUsers = users.filter((item, index , array) => item.id < 3); // повертає новий массив елементів, які відповідають умові

// перетворення та упорядкування массиву
// -----------------------------------------
// map

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length); // повертає новий масив елементів
console.log(lengths) // [5, 7, 6]

//sort

let arrayNumbers = [ 1, 2, 15 ];
arrayNumbers.sort(); //  метод змінює масив та сортує його елементи, але порівнює їх як строки тому результат [1, 15, 2]
console.log('after sort():', arrayNumbers );  // 1, 15, 2 - елементи приводяться в строки при порівнянні. Для строк застосовується лексикографічнийий порядок, і виходить що "2" > "15"

arrayNumbers.sort( (a, b) => a - b ); // додаємо функцію порівняння щоб отримати правильний результат
console.log( 'after sort(fn):', arrayNumbers );

// reverse

arrayNumbers = [1, 2, 3, 4, 5];
arrayNumbers.reverse(); // 5,4,3,2,1 змінює порядок елементів массиву на протилежний


