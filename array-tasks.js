// // let brothers = ["Oleg", "Dima", "Sasha"];
// // const people = [
// //   {
// //     name: "Oleg",
// //     age: 27,
// //   },
// //   {
// //     name: "Dima",
// //     age: 27,
// //   },
// //   {
// //     name: "Sasha",
// //     age: 32,
// //   },
// //   {
// //     name: "Andrey",
// //     age: 17,
// //   },
// // ];

// // Array.forEach()

// // const updatedBrothers = brothersObj.forEach(brother => {
// //   console.log(brother.age);
// //   brother.age += 10;
// //   console.log(brother.age);
// //   return brother.age;
// // });

// // Array.map()
// // const newObj = brothers.map((brotherName, index) => {
// //   return {
// //     name: brotherName,
// //     index: index,
// //   };
// // })
// // console.log(newObj);

// // Array.filter()
// //
// // const adults = people.filter(adult => {
// //   return adult.age >= 18;
// // });
// //
// // // Array.reduce()
// //
// // const obj = {
// //   "key1": "value1",
// //   "key2": "value2",
// //   "key3": "value3",
// // }
// //
// // const objResult = {
// //   "value1": "key1",
// //   "value2": "key2",
// //   "value3": "key3",
// // }
// // const objAfterReduce = Object.entries(obj).reduce((acc, [key, value]) => {
// //   acc[value] = key;
// //   return acc
// // }, {});
// //
// // const objectEntiresResult = [
// //   ["key1", "value1"],
// //   ["key2", "value2"],
// //   ["key3", "value3"],
// //  ];
// //
// // console.log('##########' );
// // console.log('Result accumulator: ', objAfterReduce);


// //Day #1
// // filter all numbers that are greater then 22 from such an array:
// //
// // const numbers = [10, 2, 44, 16, 126, 213, 4, 5, 22, 124, 45];
// //
// // const result = numbers.filter((number) => {
// //   return number > 22;
// // });
// //
// // console.log(result);

// // get a new array containing strings of full names (first + middle + last) out of this array

// // const people = [
// //   {
// //     name: {
// //       first: "Sam",
// //       middle: "Junior",
// //       last: "Clark",
// //     }
// //   },
// //   {
// //     name: {
// //       first: "Ted",
// //       middle: "Eleanor",
// //       last: "Mosby",
// //     }
// //   },
// //   {
// //     name: {
// //       first: "Marshal",
// //       middle: "Awesome",
// //       last: "Erickson",
// //     }
// //   },
// //   {
// //     name: {
// //       first: "Oleg",
// //       last: "Lytvyn",
// //     }
// //   },
// // ];
// //
// // const result = people.map((person) => {
// //   if (!person.name.middle) {
// //     const fullName = `${person.name.first} ${person.name.last}`;
// // //   return fullName;
// //   }
// //   const fullName = `${person.name.first} ${person.name.middle} ${person.name.last}`;
// //   return fullName;
// // });
// //
// // console.log(result);



// // filter templates with status draft:
//   const templates = [
//     {
//       id: 12,
//       status: 'draft',
//     },
//     {
//       id: 9,
//       status: 'draft',
//     },
//     {
//       id: 1,
//       status: 'done',
//     },
//     {
//       id: 8,
//       status: 'done',
//     },
//     {
//       id: 13,
//       status: 'done',
//     },
//   ];

//   const result = templates.filter((obj) => {
//     return obj.status === 'draft';
//   });

//   console.log(result);



