
// константи

const dynamicKey = prompt('Enter key name','dynamicKey');
const fullName2 = function() {
  return `${this.name} ${this.surname}`;
};

// символи
const literalObjID = Symbol('id');      // унікальний символ
const constructorObjID = Symbol('id');
const symbolID =  Symbol.for('id');           // символ у глобальному регістрі

// ----------------------------------------------------------------------------------

const literalObj = { // створення об'єкту через літерал

  // свойства об'єкта
  name: 'Tony',  // класичний приклад запису свойства у об'єкт

  'last name': 'Stark', // усі ключи свойств об'єкта можуть бути лише строками або символами

  23: 'twenty three', // ключі які не є строками автоматично приводяться до строк, отримаєм '23'

  1: 'this key always gonna me first', // цілочисленні ключи свойств об'єктів автоматично  сортуються,
                                       // тобто в переборі свойств ми спочатку отримаємо попорядку цілочисленні свойства,
                                       // а потім свойства у порядку додавання

  [dynamicKey]: 'can be changed',      // приклад динамічного свойства

  [symbolID]: 1,  // приклад запису свойства символа. (Без [] скобок НЕ ПРАЦЮВАТИМЕ, оскільки буде шукати строку symbolID)

  // методи об'єкта
  fullName() {                                  // сучасний синтаксис
    return `${this.name} ${this.surname}`;
  },
  // fullName: function() {                     // старий синтаксис
  //   return `${this.name} ${this.surname}`;
  // },

  fullName2,                                    // сучасний синтаксис
  // fullName2: fullName2,                      // старий синтаксис
};

console.log('literalObj', literalObj);

// -----------------------------------------------------------------------

const constructorObj = new Object({}); // створення об'єкту через конструктор Object

constructor.name = 'Tony';                  // додавання свойства за допомогою запису через точку
constructor['last name'] = 'Stark';         // додавання свойства за допомогою [] скобок
constructor[dynamicKey] = 'can be changed'; // додавання динамічного свойства значення якого береться з перемінної dynamicKey

constructor.fullName = function() {         // додавання методу у об'єкт
  return `${this.name} ${this.surname}`;
};

console.log('constructorObj', constructorObj);






// // Object.keys()
// const obj = {
//   page: "1",
//   id: 32,
// };

// Object.keys(obj); // ['page','id']

// // Object.values()
// Object.values(obj); // ['1', 32]

// // Object.entries()
// Object.entries(obj); // [ ['page', '1'], ['id', 32] ]

// // loop for each object and value
// Object.entries(obj).forEach(([key, value]) => {});

// // loop each object key
// for (let key in obj) {
//   if (obj.hasOwnProperty(key)) {
//       const value = obj[key]; // get value
//   }
// }
