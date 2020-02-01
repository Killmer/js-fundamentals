// DAY 2

// 1) filter messages with id property of type String
let result;

const messages = [{id: 1}, {id: "2"}, {id: 3}];

console.log(
  messages.filter(obj => {
    return typeof obj.id === "string" && obj.id !== "";
  }),
);

////////////////////////// END //////////////////////////

// 2) map this array to get an array of names => ['Dima', 'Oleg']

const developers = [
  {name: "Dima", skills: "junior"},
  {name: "Oleg", skills: "middle"},
];

result = developers.map(obj => {
  return obj.name;
});

console.log(result);

////////////////////////// END //////////////////////////

// 3) get sum of all numbers in array:

const array = [14, 4, 5, 21, 13];

result = array.reduce((acc, number) => {
  const sum = acc + number;
  return sum;
});

console.log(result);

////////////////////////// END //////////////////////////

// 4) get rid of duplicated words in this array:

const array = ["get", "go", "some", "get", "some", "food", "go", "food"];

var filteredArr = array.filter(function(item, index) {
  if (array.indexOf(item) == index) return item;
});

const unique = array.reduce((uniq, item) => {
  if (!uniq.includes(item)) {
    uniq.push(item);
  }
  return uniq;
}, []);

console.log("Filtered Array: " + filteredArr);

// ES6 short variant
arr.filter((item, index, self) => self.indexOf(item) == index);

////////////////////////// END //////////////////////////

//  5) transform object into an array of strings representing capitalized object values in reversed order, like this: ['MALE', 26, 'TED'];

const obj = {
  name: "Ted",
  age: 26,
  sex: "male",
};

const newArray = Object.values(obj)
  .reverse()
  .map(el => {
    if (typeof el == "string") {
      return el.toUpperCase();
    }
    return el;
  });

console.log(newArray);
