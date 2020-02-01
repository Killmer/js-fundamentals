// DAY 3

const superHeroes = [
  {
    name: "Flash",
    powers: ['speed']
  },
  {
    name: "Superman",
    powers: ['speed', 'fly', 'x-ray sight', 'super strength', 'ultimate armor']
  },
  {
    name: "Batman",
    powers: ['money', 'gudgets']
  },
  {
    name: "Iron Man",
    powers: ['Iron armor','inteligence', 'blaster', 'rocket', 'fly']
  },
  {
    name: "Wolwarein",
    powers: ['regeneration', 'claws']
  },
  {
    name: "Thor",
    powers: ['fly', 'thunder']
  },
];

const Avengers = [
  {
    name: "Iron Man",
    powers: ['Iron armor', 'inteligence', 'blaster', 'rocket', 'fly']
  },
  {
    name: "Thor",
    powers: ['fly', 'thunder' , 'immortality']
  },
  {
    name: "Captain America",
    powers: ['super strength', 'agility', 'regenaration', 'vibranium shield']
  },
  {
    name: "Black widow",
    powers: []
  },
  {
    name: "HawkEye",
    powers: ['archery']
  },
  {
    name: "Hulk",
    powers: ['super strength', 'immortality']
  },
];
// 1) create function getAvengers(heroes, avengers) which get list of super heroes and list of avengers and return only avengers.
// Here is Avengers list:



 const getAvengers = (heroes, avengers) => {
   return heroes.filter(hero => {
        let isInArray = false;
        avengers.forEach(avenger => {
            if (avenger.name === hero.name) {
              isInArray = true;
            }
        });
        return isInArray;
   })
 }

 const getAvengers = (heroes, avengers) => {
  const avengersNames =  avengers.map(avenger => avenger.name);
  return heroes.filter(hero => {
       return avengersNames.includes(hero.name);
  })
 }



 console.log(getAvengers(superHeroes, Avengers));

////////////////////////// END //////////////////////////

