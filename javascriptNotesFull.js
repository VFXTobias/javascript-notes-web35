// Variables they a way to store information or data in JavaScript
// Note on naming varibales
// - they should not start with a capital letter
// variables must be letters a - z or _ or $
// camelCase (most devs do this)
// snake_case
// kabab-case - this is not allowed!

// var testingVar = 'testing our var!';
// // console.log(testingVar);
// testingVar = 'another thing';
// console.log(testingVar);

// // letTest = 'something else';

// const constTest = 'testing our const';
// constTest = 'some other thing';
// console.log(constTest);

{ // block of code
    var testingVar = 'testing our var!';
    const constTest = 'testing our const';
    let letTest = 'testing our let';
  } // think of these curly bracket as guard that doesn't let - let or const - escape // var can escape the curly brackets
  // console.log(letTest);
  // console.log(constTest);
  // console.log(testingVar);
  /*
  var
  - can be redecleared
  - can be dedefined (updated)
  - var is function scoped


  let
  - cannot be redecleared
  - can be dedefined (updated)
  - block scoped

  const
  - cannot be redecleared
  - cannot be redefined
  - block scoped

  */
  // I used const until I can't and then I would use let but never var


  // Functions
  // protect a block of code until they are invoked

  // Function Declearation
  // function stopVar(){
  //   var letMeOut = 'I want out!';
  //   return letMeOut; // returning the value
  //   // anything I write here will not run
  // }

  // console.log(stopVar());// invoking the function
  // paramaters are place holder values - we assign a value to the parameter when the function is invoked
  // the values that we pass into the function when it's invoked are called arguments and they are assigned to the parameter

  function add(num1, num2){
    return num1 + num2;
  }

  // console.log(add(3,4));
  // console.log(add('javaScript', ' is fun!'));

  // function expression
  const functionExpression = function(num1, num2){
    return num1 - num2;
  }

  // console.log(functionExpression(7,4));

  // ES6 Syntax - Arrow Functions
  // Do not use arrow functions inside of an object
  const arrowFunction = (num1, num2) => num1 * num2;

  // console.log(arrowFunction(2,4));


  // Conditionals
  // if states are the foundation of all logic in JavaScript - they expect a boolean (either true or false)

  // if(5 > 3){
  //   console.log('JavaScript is so much fun!!');
  // }

  //the condition here is 5 > 3 - this is true so the code runs - if it was false the code inside the curly brackets would not run

  //else if
  // in JS this is always 2 words

  // const weather = 'sunshine';

  // if(weather === 'rain'){
  //   console.log('dont forget your umbrella');
  // }else if( weather === 'snow'){
  //   console.log('bring your touque');
  // }else if(weather === 'sunshine'){
  //   console.log('dont forget sunscreen');
  // }else if(weather === 'windy'){
  //   console.log('bring a scarf');
  // }else if(weather === 'sunshine'){
  //   console.log('time for the beach!');
  // }else{
  //   console.log('be prepared for anything');
  // }

  // code will stop when it reaches a true conditional, even if there is more than one true conditional
  // else statement does not have a condition - if nothing else is true this will run

  function weather(forcast){
    if(forcast === 'rain'){
      console.log('dont forget your umbrella');
    }else if( forcast === 'snow'){
      console.log('bring your touque');
    }else if(forcast === 'sunshine'){
      console.log('dont forget sunscreen');
    }else if(forcast === 'windy'){
      console.log('bring a scarf');
    }else if(forcast === 'sunshine'){
      console.log('time for the beach!');
    }else{
      console.log('be prepared for anything');
    }
  }

  // weather('rain');
  // weather('sunshine');


  // !== does not equal
  // === equals
  // || OR
  // && and
  // PEDMAS
  // Parethesis ()
  // exponents
  // division / multiplication
  // addition / subtraction

  // let first = 'Brenson';
  // let last = 'Whorley';
  // first = 'Alexandra';
  // last = 'Myers';
  // first = 'Suzanne';

  // if(first === 'Suzanne' && last === 'Cabral' || first === 'Alexandra'){
  //   console.log('cool name!');
  // }

  // Loops

  // for loop
  // great for running a block of code n number of times
  // requires 3 things
  // initial expression - think of this as your setup for the code that you are going to write - the loop starts here
  // condtion // if the condition is true the loop will run one more time - if the condition is false the loop will stop running and move to the next line of code
  // increment expression - setting i to 0 and each time the loop runs i will increase by 1

  // for(let i = 0; i < 10; i++){
  //   console.log(i);
  // }

  // no semi colon after the incriment this will break the loop
  // const numbers = [1, 2, 3, 4, 5];

  // for(let i = 0; i < numbers.length; i++){
  //   // console.log(i);// what is the value of i
  //   // console.log(numbers.length);
  //   // console.log(numbers[i]);
  //   console.log(numbers[i] + 2);
  // }


  // while loop
  // while takes a condition and runs indefinately until that condition is false
  let javaScript = 'is fun';
  let i = 0;
  while(javaScript === 'is fun'){
    console.log('I love learning!');// this will be an infite loop
    // lets create an exit condition
    i++; // incrimenting i
    if(i > 5){ // if i is greater than 5
      javaScript = 'is NOT fun'; // updating the javaScript variable
    }
  }


// Arrays
// arrays are used for holding a list of items where order matters
// thing inside array is called an item and the position of the item is called an index
// index starts at zero

// const cities = ['Tel Aviv', 'Cape Town', 'New York', 'Kigali', 'Istanbul', 'Lisbon'];

// accessing data inside of an array
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[2]);
// console.log(cities[3]);
// console.log(cities[4]);
// console.log(cities[5]);

// how would I find out how many items are in the array (the arrays length)?

// console.log(cities.length);

// // grabbing the last item in the array
// console.log(cities[cities.length -1]);

// mutable vs immutable
// mutable = changes the original
// immutable = doesn't change the orginal

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers);

// const numbersBackwards = numbers.reverse();
// console.log(numbersBackwards);

// is the original array the same?

// console.log(numbers);

// immutable method
// const sample = numbers.slice(2,4);
// console.log(sample);

// console.log(numbers);

// make a copy of the original and use the mutable method on the copy
// const backwardsNumbers = [...numbers]; // spread
// // console.log(backwardsNumbers);

// backwardsNumbers.reverse();

// console.log(backwardsNumbers);
// console.log(numbers);

// Adding items to an array
// const cities = ['Tel Aviv', 'Cape Town', 'New York', 'Kigali', 'Istanbul', 'Lisbon'];


// // add an item to the begging of an array

// cities.unshift('Tbilsi');

// // console.log(cities);

// // adding an item to the end of an array

// cities.push('Tehran');

// // console.log(cities);

// // removing items from an array
// // remove the first item
// cities.shift();

// // console.log(cities);

// // remove the last item
// cities.pop();
// // console.log(cities);

// // Break out

// const myFavouriteCity = [...cities];
// // console.log(myFavouriteCity);
// myFavouriteCity.unshift('Sofia');
// console.log(myFavouriteCity);// checking that the city was added to the new array
// console.log(cities); // making sure we didn't mutate the original
// console.log(myFavouriteCity[0]); // logging the first city

// .splice()
// used for removing items at a specific index
// const cities = ['Tel Aviv', 'Cape Town', 'New York', 'Kigali', 'Istanbul', 'Lisbon'];

// // cities.splice(2,1); // I want remove the item at index 2 and I want to remove 1 item

// // console.log(cities);

// cities.splice(2,2);
// console.log(cities);

const apples = ['McIntosh', 'Honeycrisp', 'Granny Smith', 'Gala', 'Fuji', 'Golden Delicious', 'Pink Lady', 'Crab', 'Red Delicious', 'Caramel', 'Candy', 'another Delicious apple'];

//.includes()

// loop through this array - print out in the console if the item at each index inculdes the word delicious (true / false)

// for(let i = 0; i < apples.length; i++){
//   console.log(apples[i].includes('Delicious'));
// }

// Breakout

function searchType(arr, string){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes(string)){
      console.log(arr[i]);
    }
  }
}

// console.log(searchType(apples, 'Red')); // Red Delicious
// searchType(apples, 'Red');

// push items that match the string to a new array

function contains(arr, string){
  newarr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes(string)){
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

console.log(contains(apples, 'Delicious'));
// console.log(deliciousApples);


// Objects
// allow us to group together properties and values
// order doesn't matter
// everything in javascript is an object

// anatomy of an object

// const dog = {
//   // key / value pairs
//   name: 'Ada',
//   breed: 'Bali Dog',
//   age: 3,
//   colour: 'brindle',
//   favFood: 'Salmon',
//   // methods - functions that belong to an object
//   eat: function(){
//     return `${this.name} is a ${this.breed} and she likes to eat ${this.favFood}`;
//     // return this.name + ' is a ' + this.breed + ' and she likes to eat ' + this.favFood;
//   }
// };

// console.log(dog);
// console.log(dog.eat());
// dot notation
// console.log(dog.name);

// bracket notation
// if you are working with strings as your keys and those strings have spaces you will need to access your data with bracket notation
// console.log(dog['fav Food']);

// console.log(dog.eat); // referencing eat - not invoking

// console.log(dog.eat()); // invoking the function - 'this' belongs to the dog

// this keyword
// Implicit binding - 80% of use cases - it applies to objects with methods - when the function is invoked look to the left of the dot, that is what "this" refers to


// const dog = {
//   // key / value pairs
//   name: 'Ada',
//   breed: 'Bali Dog',
//   age: 3,
//   colour: 'brindle',
//   favFood: 'Salmon',
//   sister: {
//     name: 'Noa',
//     breed: 'Bali Dog',
//     age: 1,
//   },
//   // methods - functions that belong to an object
//   eat: function(){
//     return `${this.name} is a ${this.breed} and she likes to eat ${this.favFood}`;
//   }
// };


// how would I access Ada's sister name?
// console.log(dog.sister.name);


// we can put object in arrays

const places = [
    {city: 'Tel Aviv', country: 'Israel', region: 'Middle East'},
    {city: 'Toronto', country: 'Canada', region: 'North America'},
    {city: 'Tokyo', country: 'Japan', region: 'Asia'},
    {city: 'Bitburg', country: 'Germany', region: 'Europe'},
    {city: 'Brisbane', country: 'Australia', region: 'Oceania'},
    {city: 'Ancon', country: 'Panama', region: 'South America'},
    {city: 'Dar Es Salaam', country: 'Tanzania', region: 'Africa'},
    {city: 'Amman', country: 'Jordan', region: 'Middle East'},
    {city: 'Najaf', country: 'Iraq', region: 'Middle East'},
  ];

  // console.log(places);

  // console.log(places[1].country);

  // create a new array called middleEast
  // loop through the places array and push the city names of places that are in the middle to a the new array

  const middleEast = []; // creating an array that we are going to push to later
  for(let i = 0; i < places.length; i++){
    if(places[i].region === 'Middle East'){
      middleEast.push(places[i].city);
    }
  }

  // console.log(middleEast);

  // add a new object to the array
  // write a function that can add an object to any array

  function addPlace(array, city, country, region){
    array.push({city, country, region});
    return array;
  }

  // console.log(addPlace(places, 'Sofia', 'Bulgaria', 'Europe'));
  // console.log(addPlace(places, 'Hamilton', 'New Zealand', 'Oceania'));
  // console.log(addPlace(places, 'Guadalajara', 'Mexico', 'North America'));

  // write a function that change the region at a specific index

  function changeRegion(array, index, region){
    array[index].region = region;
    return array;
  }

  // console.log(changeRegion(places, 5, 'Central America'));

  // lets create a pet from a function, name, species , behaviour

  function createPet(obj, name, species, well_behaved){
    var obj = {name, species, well_behaved};
    return obj;
  }

  // console.log(createPet('petOne', 'Ada', 'Bali Dog', true));
  // console.log(createPet('petTwo', 'Noa', 'Bali Dog', true));
  // console.log(createPet('petThree', 'Zev', 'Barn Cat', false));
  // console.log(petOne);

  // SPRINT REVIEW

  // Responsive Design
  // viewport meta tag - this needs to be in the head of your HTML doc
  // media queries

  // max-width scales down
  // min-width scales up
  // @media(max-width: 800px){
    // code for this screen goes here
  // }

  // USE SCALABLE UNITS TO SIZE THINGS!!!!!

  // Accessibility
  // makes sure you are using semantic HTML
  // make sure alt attributes are filled out correctly
  // make sure you are using scalable units for font sizes


  // Intro to JS
  // variables - decleare using var, let, const
  // var - can be redecleared, can be updated, function scoped
  // let cannot be redecleared, can be updated, block scoped
  // const - cannot be redecleared, cannot be updated, block scoped
  // RULE OF THUMB - use const until you can't and then use let but never var

  // FUNCTION
  function functionName(param1, param2){
    return param1 + param2;
  }

  functionName(arg1, arg2);
  // arguments are the things we pass in, parameters are place holder values

  // Conditionals - foundation of all logic in javaScript

  // if(condtion goes here){
  //   code to run if condition is true;
  // }else if(another condition){
  //   code to run if this condtion is true;
  // }else{
  //   if nothing else is true then run this code;
  // }

  // Loops
  // for(let i = 0; i < array.length; i++){
  //   // code goes here
  // }

  // ARRAYS
  // order matters in an array
  // every item in an array is assigned an index and the index starts at 0
  // const array = [0, 1, 2, 3, 4, 5];
  // when you use array you have access to array methods
  // pay attention if the method is mutable and if you don't want to manipulate the orginal you need to make a copy
  // const copy = [...original];




// Scope
// answers the question of where are my variables and function available to me?
// Global Variables
// const cohort = 'web35';
// console.log(cohort);

/*
var
- can be redecleared;
- can be updated
-function scoped

let
- can not be redecleared
- can be updated
- block scoped

const
- can not be redecleared
- can not be updated
- block scoped
*/

// var school = 'Lambda';
// console.log(school);
// var school = 'another coding school';
// console.log(school);

// Function Scoping
// when variables are created inside of a function those variables will only ever be available inside of the function
// think of {} as gates - when you see them they keep variable in

// const track = 'web';

// function lambda(track){
//   const cohort = 'Web35';
//   // const track = 'UX';
//   console.log(track);
// }
// // console.log(cohort);
// lambda('DataScience');

// Block Scope
// let answer; // creating the variable here
// if(1 === 1){
//   answer = 'its true'; // updating the value
// }

// console.log(answer);

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }

// console.log(i);

// for(let k = 0; k < 5; k++){
//   console.log(k);
// }
// console.log(k)

// const dog = 'Ada';

// function callDog(dog){
//   console.log(dog);
// }

// function puppy(){
//   const dog = 'Noa';
//   return callDog('Fido');
// }

// puppy();

// functions are scoped the exact same way as variables

// function sayHi(name){
//   function yell(){
//     console.log(name.toUpperCase());
//   }
//   yell();
// }

// sayHi('Will');

// yell();

// if we create a function inside of another function - that function will only ever be available inside of that function



// HOISTING
// hoiting allows us to access functions / variables before they have been created
// function declearations and variable declearations - 2 things that are hoisted

// working();

// function working(){
//   console.log('it works!');
// }

// const working = () => console.log('it works!');

// function working(){
//   console.log('it works!');
//   console.log(add(1,2));
// }

// function add(num1, num2){
//   return num1 + num2;
// }


// some people set files up like this:

 // what does this file do?
// all function invocations


// how does this file do it?
// all functions
// console.log(myName);
// var myName = 'Brit';
// console.log(myName);

// 2 pass compiler - on the first pass we get references and on the second we get values assigned
// know about it but it's not great practice to use it


// Closures
// closures give us the ability to put functions together
// the ability to access functions from a parent level scope in child level scope even after the parent function has been terminated
// code that has been identifed else where the we can use later
// we can pass variables down but we can't pass them back up

// function country(countryName){
//   const lang1 = 'French';
//   const lang2 = 'English';
//   console.log(`${lang1} and ${lang2} are the offical languages of ${countryName}`);
//   debugger;
//   function province(provName){
//     // console.log(`${lang1} and ${lang2} are the offical languages of ${countryName} and the most populated provice is ${provName} and the national food is ${food}`);
//     debugger;
//     function city(cityName){
//       const food = 'maple syrup';
//       console.log(`${lang1} and ${lang2} are the offical languages of ${countryName} and the most populated provice is ${provName} and the national food is ${food}`);
//       debugger;
//     }// this closes the city
//     city('Ottawa');
//   }// this closes the provice
//   province('Ontario');
// }// this closes the country
// country('Canada');

// inner scope references variables in outer scope - that is what is referred to as a closure

// function game(sport){
//   let score = 0;
//   return function win(){
//     score ++; // incrimenting score by 1
//     return `Your ${sport} game score is ${score}`;
//   }
// }

// // private variables

// const hockeyGame = game('hockey');

// console.log(hockeyGame());
// console.log(hockeyGame());
// console.log(hockeyGame());

// const footBall = game('foot ball');

// console.log(footBall());

// // console.log(score);
// console.log(win());


// Callbacks and Higher Order Functions
// Higher Order Function receive other functions as parameters
// Callback functions are passed into higher order functions as arguments
// higher order functions are passed in // callback functions receive


// kitchen is our higher order function - our callback is going to be passed into chef
const kitchen = function(i1, i2, chef){
    return chef(i1, i2);
  }

  // call back functions
  const pizzaChef = function(i1, i2){
    return `I took ${i1} and I took ${i2} and I made you a pizza`;
  }

  const pastaChef = function(i1, i2){
    return `I took ${i1} and I took ${i2} and I made you spaghetti`;
  }

  console.log(kitchen('sauce', 'dough', pizzaChef));
  console.log(kitchen('sauce', 'dough', pastaChef));


  function calculator(num1, num2, cb){
    return cb(num1, num2);
  }

  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;

  console.log(calculator(5, 6, add));
  console.log(calculator(5, 6, subtract));
  console.log(calculator(5, 6, multiply));
  console.log(calculator(5, 6, divide));



  // HOF + Callback Functions
// higher order functions receive other functions as params
// callback functions are passed into other functions as args
// higher order function receive and callback function are passed in

// this is the HOF
function calc(num1, num2, cb){
    return cb(num1, num2)
    //add(4,6);
    //subtract(4,6);
    //multiply(4, 6);
    //divide(4,6);
  }

  // These are the callback function
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num2 - num1;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num2 / num1;

  // console.log(calc(4, 6, add));
  // console.log(calc(4, 6, subtract));
  // console.log(calc(4, 6, multiply));
  // console.log(calc(4, 6, divide));

  // Advanced Array Methods!!

  const cityData = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

  // .forEach()
  // must iterate through every item in an array without stopping
  // forEach doesn't return a new array
  // return is optional
  // if you are working with massive datasets a for loop may be better - if this starts to slow down the browser that's when you might consider a for loop instead

  // cityData.forEach(function(sparkles, unicorn){ // we can call these params anything - the first param is always going to refer to the current value, the second is always going to refer to the index
  //   console.log(sparkles.city);
  //   console.log(sparkles.state);
  //   console.log(unicorn);
  // });

  // Use .forEach to take the state initals and convert them to lowerCase and return them in a new array

  // const lowerCaseStates = [];

  // cityData.forEach(function(item){
  //   return lowerCaseStates.push(item.state.toLowerCase());
  // });

  // console.log(lowerCaseStates);

  //.map()
  // return a new array
  // does not manipulate the original array
  // used for converting data
  // needs the return keyword

  // const lowerCaseStates = cityData.map(function(item){
  //   return item.state.toLowerCase();
  // });

  // converted to arrow function

  // const lowerCaseState = cityData.map(item => item.state.toLowerCase());

  // console.log(lowerCaseState);

  // .filter()
  // returns a new array
  // does not manipulate the original
  // it filters out results into the new array
  // we need a return


  // const bigPops = cityData.filter(function(item){
  //   // true / false
  //   // if true - it's included in the new array
  //   // if false - it's excluded from the new array
  //   return item.population > 500000;
  // });

  // console.log(bigPops);

  // reduce()
  // returns a value not an array
  // does not manipulate the original
  // used for sums and products usually
  // could be used for anything

  // const totalLandArea = cityData.reduce(function(accumulator, item){
  //   console.log(`I am the accumulator ${accumulator}`);
  //   console.log(`I am the current value ${item.land_area}`)
  //   return accumulator + item.land_area;
  // },0);

  // console.log(`I am the total land area ${totalLandArea}`);

  // const totalLandArea = cityData.reduce(function(accumulator, item){
  //   console.log(`I am the accumulator ${accumulator}`);
  //   console.log(`I am the current value ${item.land_area}`)
  //   return accumulator * item.land_area;
  // },1);

  // console.log(`I am the total land area ${totalLandArea}`);

  const totalPop = cityData.reduce(function(acc, item){
    console.log(`accumulator: ${acc}`);
    console.log(`item: ${item.population}`);
    return acc + item.population;
  },0);

  console.log(totalPop);

  // Skeleton Syntax
  //forEach
  // array.forEach(function(item){
  //   console.log(item.thingIAmLookingAt);
  // });

  // // .map()
  // // usually coverting data
  // const newArray = array.map(function(item){
  //   return thingThatGoesInNewArray;
  // });

  // // .filter()
  // const newArray = array.filter(function(item){
  //   return ConditionThatCanBeTrueORFalse;
  //   //if it's true it's included / if false it's not
  // });

  // //.reduce()
  // const singleValue = array.reduce(function(accumulator, item){
  //   return accumulator + item.whateverItemYourAreWorkingWith;
  // },itinitalValue);




  // Window Binding - if none of the other rules apply "this" default to the window - unless you are using strict mode in which case it would return undefined
// 'use strict';

// dog = 'Ada'; // DONT DO THIS!

// console.log(dog);

// 'use strict';

// function ghost(){
//   console.log(this.boo);
// }

// const boo = '👻';

// ghost();

// Implicit Binding
// most common rule - found in about 80% of use cases
// when the function is invoked, look the left of the dot that is what this refers to
// only applies to objects with methods

// const myGhost = {
//   name: 'Casper',
//   boo: '👻boooo',
//   ghost: function(){
//     console.log(this.boo);
//   }
// }

// myGhost.ghost(); // look to the left of the dot, that's what 'this' refers to


// const petOne = {
//   name: 'Ada',
//   species: 'Bali Dog',
//   pronoun: 'her',
//   favFood: 'salmon',
//   eat: function(){
//     console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
//   }
// }

// const petTwo = {
//   name: 'Harris',
//   species: 'Dog',
//   pronoun: 'his',
//   favFood: 'anything that moves',
//   eat: function(){
//     console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
//   }
// }

// const petThree = {
//   name: 'Savannah',
//   species: 'cat',
//   pronoun: 'her',
//   favFood: 'chicken',
//   eat: function(){
//     console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
//   }
// }

// const petFour = {
//   name: 'Noodles',
//   species: 'Border Aussie',
//   pronoun: 'his',
//   favFood: 'steak',
//   eat: function(){
//     console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
//   }
// }

// const petFive = {
//   name: 'Scary',
//   species: 'Black Bear',
//   pronoun: 'her',
//   favFood: 'berries',
//   eat: function(){
//     console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
//   }
// }


// // petOne.eat(); // when the function is invoked - look to the left of the dot - that is what 'this' refers to
// // petTwo.eat();
// // petThree.eat();
// // petFour.eat();
// // petFive.eat();

// // person object

// const person = {
//   name: 'Brit',
//   age: 32,
//   location: 'Niagara Falls',
//   greet: function(){
//     console.log(`Hi my name is ${this.name}, I am from ${this.location} and I am ${this.age} years old`);
//   }
// }

// person.greet(); // look to the left of the dot that is what 'this' refers to


// Explicit Binding
// .call - will immediately invoke the function / .call you pass in arguments 1 by 1
// .apply - will immediately invoke the function / .apply pass in arguments as an array
// .bind - you pass in arguments 1 by 1, but it does not immediately invoke the function, it returns a brand new function that can be invoked later

// .call

// function ghost(){
//   console.log(this.boo);
// }

// const myGhost = {
//   name: 'Casper',
//   boo: '👻 booooo',
// }

// const otherGhost = {
//   name: 'Fatso',
//   boo: '😡 booo',
// }

// ghost.call(myGhost); // binding this to myGhost
// ghost.call(otherGhost); //binding this to otherGhost

// explicitly telling JS what the this keyword should refer to by the argument I am passing in when invoking the function with .call

// Bind

// function ghost(){
//   console.log(this.boo);
// }

// const myGhost = {
//   name: 'Casper',
//   boo: '👻 booooo',
// }

// const otherGhost = {
//   name: 'Fatso',
//   boo: '😡 booo',
// }

// const friendlyGhost = ghost.bind(myGhost); // creating a new function called friendlyGhost and binding myGhost to it
// const angryGhost = ghost.bind(otherGhost); // creating a new function called angryGhost and binding otherGhost to it

// friendlyGhost();
// angryGhost();

// Breakout

// function callOfTheWild(){
//   console.log(`${this.name} says ${this.sound}`);
// }

// const animal = {
//   name: 'Betsy',
//   species: '🐮',
//   sound: '🐮moooooooo',
// }

// const otherAnimal = {
//   name: 'Lary',
//   species: 'Llama',
//   sound: 'bahhhhhh 🦙',
// }

// callOfTheWild.call(animal); // invoking the function and binding the animal to it
// callOfTheWild.call(otherAnimal);

// New Binding
// using the 'new' keyword constructs a new object and 'this' point to it
// when a function is invoked as a constructor function using the 'new' keyword 'this' points to the new object that's created

// function Ghost(saying, name){
//   this.phrase = saying;
//   this.name = name;
// }

// const myGhost = new Ghost('Casper the friendly 👻', 'Casper'); // passing in the arguments 1 by 1

// console.log(myGhost.phrase);
// console.log(myGhost.name);

// function Ghost(attributes){
//   this.phrase = attributes.phrase;
//   this.name = attributes.name;
// }

// const myGhost = new Ghost({
//   phrase: 'Casper the friendly 👻',
//   name: 'Casper',
// });

// console.log(myGhost.phrase);
// console.log(myGhost.name);


// Prototypes + Constructor Functions!!
// constructor functions construct other objects!! // this is their whole life's purpose
// they give us the ability to pass methods across thousands of objects!
// Capitalized Function name - you will want to use a capital with constructor functions
// missing a return statement (this not a gaurantee)
// this

function Pet(attributes){
    this.name = attributes.name;
    this.species = attributes.species;
    this.pronoun = attributes.pronoun;
    this.favFood = attributes.favFood;
  }

  Pet.prototype.eat = function(){
    console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
  }

  function BabyPet(attributes){
    Pet.call(this, attributes);
    this.toy = attributes.toy; // this is a special attribute that belongs to the baby pets
  }

  // linking the Pet prototype with the BabyPet Prototype;
  BabyPet.prototype = Object.create(Pet.prototype);

  BabyPet.prototype.play = function(){
    console.log(`${this.name} plays with ${this.pronoun} ${this.toy}`);
  }

  const petOne = new Pet({
    name: 'Ada',
    species: 'Bali Dog',
    pronoun: 'her',
    favFood: 'salmon',
  });

  const petTwo = new Pet({
    name: 'Harris',
    species: 'Dog',
    pronoun: 'his',
    favFood: 'anything that moves',
  });

  const petThree = new Pet({
    name: 'Savannah',
    species: 'cat',
    pronoun: 'her',
    favFood: 'chicken',
  });

  const petFour = new BabyPet({
    name: 'Noodles',
    species: 'Border Aussie',
    pronoun: 'his',
    favFood: 'steak',
    toy: 'ball',
  });

  const petFive = new BabyPet({
    name: 'Scary',
    species: 'Black Bear',
    pronoun: 'her',
    favFood: 'berries',
    toy: 'trash can',
  });

  petOne.eat();
  petTwo.eat();
  petThree.eat();
  petFour.eat();
  petFive.eat();
  petFour.play();
  petFive.play();



// Constructor Function Review (the old)

// function Pet(attributes){
//   this.name = attributes.name;
//   this.phrase = attributes.phrase;
//   this.location = attributes.location;
// }

// Pet.prototype.speak = function(){
//   return `${this.name} says ${this.phrase}`;
// }

// class syntax
// class Pet{
//   constructor(spiderman){
//     this.name = spiderman.name;
//     this.phrase = spiderman.phrase;
//     this.location = spiderman.location;
//   }
//   // methods go here
//   speak(){
//     return `${this.name} says ${this.phrase}`;
//   }
//   talk(){
//     return `${this.name} says they are from ${this.location}`
//   }
// }

// //child the old way
// function Child(childAttrs){
//   Pet.call(this, childAttrs); // binding this to parent
//   // any special child attributes would go here
// }

// Child.prototype = Object.create(Pet.prototype); // telling the child to inherit the parent's methods

//fancy classs syntax way
// class Child extends Pet{ // who it's parent is
//   constructor(unicorn){
//     super(unicorn);
//     // any special attributes of the child go here
//   }
//   // any special methods for the child go here
// }

// /// create our objects

// const bigDog = new Pet({
//   name: 'Ada',
//   phrase: 'wooof wooof',
//   location: 'Canada',
// });


// const littleDog = new Child({
//   name: 'Noa',
//   phrase: 'bark bark',
//   location: 'Canada',
// });

// console.log(bigDog.speak());
// console.log(littleDog.speak());
// console.log(bigDog.talk());
// console.log(littleDog.talk());


// Classes
// classes are not hoisted - this means that if we are putting information above a class we have referenced it will not work!
// they use strict - prevents window binding, forces us to write cleaner code with error if we do not
// Methods are a special syntax
// the word constructor is visible

// Child Classes
// extends links up the dunder proto - it tells us where we came from
// extends tells super what to super to
// extends and super do what .call and object.create did

// class Parent{
//   constructor(name, location, work){
//     this.name = name;
//     this.location = location;
//     this.work = work;
//   }
//   job(){
//     return `${this.name} is a ${this.work}`;
//   }
// }

// const mom = new Parent('mom', 'USA', 'Computer Programmer');

class Parent{
  constructor(attributes){
    this.name = attributes.name;
    this.location = attributes.location;
    this.work = attributes.work;
  }
  job(){
    return `${this.name} is a ${this.work}`;
  }
}



class Child extends Parent{
  constructor(attributes){
    super(attributes);
    this.major = attributes.major;
  }
  study(){
    return `${this.name} is studying ${this.major}`;
  }
}


class GrandChild extends Child{
  constructor(attributes){
    super(attributes);
    this.toy = attributes.toy;
  }
  play(){
    return `${this.name} plays with their ${this.toy}`;
  }
}

class Pet extends GrandChild{
  constructor(attributes){
    super(attributes);
    this.food = attributes.food;
  }
  eat(){
    return `${this.name} eats ${this.food}`;
  }
}

const mom = new Parent({
  name: 'mom',
  location: 'USA',
  work: 'Computer Programmer',
});

const daughter = new Child({
  name: 'Sara',
  location: 'USA',
  work: 'student',
  major: 'Accounting',
});

const grandBaby = new GrandChild({
  name: 'Jake',
  location: 'crib',
  work: 'being a baby',
  major: 'first words',
  toy: 'raddle',
});

const fish = new Pet({
  name: 'Goldie',
  location: 'the fish bowl',
  work: 'swimming like its his job',
  major: 'bubble formations',
  toy:'sunken ship',
  food: 'fish food',
});

// console.log(mom.job());
// console.log(daughter.job());
// console.log(daughter.study());
// console.log(grandBaby.job());
// console.log(grandBaby.study());
// console.log(grandBaby.play());
// console.log(fish.job());
// console.log(fish.study());
// console.log(fish.play());
// console.log(fish.eat());

// REVIEW

// Functions
// parameters - are placeholder values - they don't get defined until the function is invoked
// arguments - are actual values - we pass them in, in place of parameters when the function is invoked

// function sayHi(name){
//   return `hello ${name}`;
// }

// sayHi('Brit'); // invoking the function and passing in the arugment

// callback functions + higher order functions
// the higher order function receives a cb function as a param
// callback function is passed into a higher order function as an argument

// function kitchen(ing1, ing2, chef){
//   return chef(ing1, ing2);
// }

// const kitchen = (ing1, ing2, chef) => chef(ing1, ing2);

// // const pizzaChef = function(ing1, ing2){
// //   return `I took ${ing1} and ${ing2} and I made you a Pizza 🍕`;
// // }

// const pizzaChef = (ing1, ing2) => `I took ${ing1} and ${ing2} and I made you a Pizza 🍕`;

// // const pastaChef = function(ing1, ing2){
// //   return `I took ${ing1} and ${ing2} and I made you Spaghetti 🍝`;
// // }

// const pastaChef = (ing1, ing2) => `I took ${ing1} and ${ing2} and I made you Spaghetti 🍝`;

// console.log(kitchen('sauce', 'dough', pastaChef));
// console.log(kitchen('sauce', 'dough', pizzaChef));

// // in this case the callback functions are the chefs and higher order function is the kitchen

// // Objects
// // skeleton of an object

// const object = {
//   key: value,

//   // methods
//   key: function(){
//     return `the thing the function does`;
//   }
// }

// methods are functions that belong to objects

// Arrays
// Order Matters!!
// the computer assigns an index to every item in the array, the index starts at 0

// const array = ['index 0', 'index 1', 'index 2'];

// .forEach()
// iterates through every item in an array without stopping
// it does not return a new array
// you do not need the return keyword

// array.forEach(function(item){
//   // do something here
//   // console.log(item.property);
// });

// // map
// // this of map when you need to convert data
// // returns a brand new array and it does not manipulate the original
// // you NEED a return

// const newArray = array.map(function(item){
//   return // something
// });

// // filter
// // when you want to filter data based on something that can be true or false
// // if its true its included if its false its excluded
// // it returns a new array
// // NEEDs a return

// const newArray = array.filter(function(item){
//   // this needs to be a condition
//   return item.property < 100000;
// });

// //.reduce()
// // used mostly for sum and products but could be used for anything
// // it returns a single value not an array
// // NEEDs a return

// const singleValue = array.reduce(function(accumulator, item){
//   return accumulator + item.number;
// },initalValue);


// // Prototype

// // parent skeleton

// function Parent(param){
//   // assign attributes here
//   this.attributes = param.attributes;
// }

// Parent.prototype.methodName = function(){
//   // return something here
// }

// // child skeleton
// function Child(param){
//   Parent.call(this, param);
//   // any special attributes for the child we would assign them here
// }

// Child.prototype = Object.create(Parent.prototype); // allow the child to use the parents methods

// // special method for child
// Child.prototype = function(){
//   // return something here
// }

// // Class Syntax Skeleton
// // Parent

// class Parent{
//   constructor(param){
//     // assign attributes here
//   }
//   // methods go here
// }

// class Child extends Parent{
//   constructor(param){
//     super(param); // inheriting from the parent
//     // assgin any special attributes for the child here
//   }
//   // any special methods for the child here
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const value = numbers.reduce(function(accumulator, item){
  console.log(`I am the accumulator ${accumulator}`);
  console.log(`I am the item ${item}`)
  return accumulator * item;
},1);

console.log(value);
