// Variables they a way to store information or data in JavaScript
//? Note on naming varibales
//% - they should not start with a capital letter
//% variables must be letters a - z or _ or $
//% camelCase (most devs do this)
//snake_case
// kabab-case - this is not allowed!
{ }
  //* think of these curly bracket as guard that doesn't let - let or const - escape // var can escape the curly brackets
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
  //! I used const until I can't and then I would use let but never var
  //? Functions
  // protect a block of code until they are invoked
  //? Function Declearation
  // paramaters are place holder values - we assign a value to the parameter when the function is invoked
  // the values that we pass into the function when it's invoked are called arguments and they are assigned to the parameter
  //the condition here is 5 > 3 - this is true so the code runs - if it was false the code inside the curly brackets would not run
  //* else if
  //! in JS this is always 2 words
  // code will stop when it reaches a true conditional, even if there is more than one true conditional
  // else statement does not have a condition - if nothing else is true this will run
  // !== does not equal
  === equals
  || OR
  && and
  PEDMAS
  Parethesis ()
  exponents
  division / multiplication
  addition / subtraction
  //* Loops
  //? for loop
  // great for running a block of code n number of times
  // requires 3 things
  // initial expression - think of this as your setup for the code that you are going to write - the loop starts here
  // condtion // if the condition is true the loop will run one more time - if the condition is false the loop will stop running and move to the next line of code
  // increment expression - setting i to 0 and each time the loop runs i will increase by 1
  // no semi colon after the incriment this will break the loop
  //? while loop
  // while takes a condition and runs indefinately until that condition is false
 //$ Arrays
// arrays are used for holding a list of items where order matters
// thing inside array is called an item and the position of the item is called an index
// index starts at zero
//& mutable vs immutable
//% mutable = changes the original
//% immutable = doesn't change the orginal
// make a copy of the original and use the mutable method on the copy
// const backwardsNumbers = [...numbers]; // spread
// Adding items to an array
// const cities = ['Tel Aviv', 'Cape Town', 'New York', 'Kigali', 'Istanbul', 'Lisbon'];
// add an item to the begging of an array
// cities.unshift('Tbilsi');
// adding an item to the end of an array
// cities.push('Tehran');
// removing items from an array
// remove the first item
// cities.shift();
// remove the last item
// cities.pop();
// .splice()
// used for removing items at a specific index
//*.includes()
//? Objects
// allow us to group together properties and values
// order doesn't matter
// everything in javascript is an object
// anatomy of an object
// const dog = {
//$ key / value pairs
//   name: 'Ada',
//   breed: 'Bali Dog',
//   age: 3,
//   colour: 'brindle',
//   favFood: 'Salmon',
// methods - functions that belong to an object
//   eat: function(){
//     return `${this.name} is a ${this.breed} and she likes to eat ${this.favFood}`;
// bracket notation
// if you are working with strings as your keys and those strings have spaces you will need to access your data with bracket notation
// console.log(dog['fav Food']);
// console.log(dog.eat); // referencing eat - not invoking
// console.log(dog.eat()); // invoking the function - 'this' belongs to the dog
// this keyword
// Implicit binding - 80% of use cases - it applies to objects with methods - when the function is invoked look to the left of the dot, that is what "this" refers to
// we can put object in arrays

  //! SPRINT REVIEW
  //? Responsive Design
  //* viewport meta tag -  this needs to be in the head of your HTML doc
  //% media queries
  //$ max-width scales down
  //$ min-width scales up
  //* @media(max-width: 800px){
  //& code for this screen goes here
  //* }
  //! USE SCALABLE UNITS TO SIZE THINGS!!!!!
  //? Accessibility
  //$ makes sure you are using semantic HTML
  //$ make sure alt attributes are filled out correctly
  //$ make sure you are using scalable units for font sizes

  //* Intro to JS
  //? variables - decleare using var, let, const
  // var - can be redecleared, can be updated, function scoped
  // let cannot be redecleared, can be updated, block scoped
  // const - cannot be redecleared, cannot be updated, block scoped
  // RULE OF THUMB - use const until you can't and then use let but never var
  //? FUNCTION
  function functionName(param1, param2){
    return param1 + param2;
  }
  functionName(arg1, arg2);
  //& arguments are the things we pass in, parameters are place holder values
  //? Conditionals - foundation of all logic in javaScript
  // if(condtion goes here){
  //   code to run if condition is true;
  // }else if(another condition){
  //   code to run if this condtion is true;
  // }else{
  //   if nothing else is true then run this code;
  // }
  //? Loops
  for(let i = 0; i < array.length; i++){
    // code goes here
  }
  //? ARRAYS
  //$ order matters in an array
  //% every item in an array is assigned an index and the index starts at 0
  // const array = [0, 1, 2, 3, 4, 5];
  //% when you use array you have access to array methods
  //& pay attention if the method is mutable and if you don't want to manipulate the orginal you need to make a copy
  //& const copy = [...original];
//* Scope
// answers the question of where are my variables and function available to me?
// ?Global Variables
// const cohort = 'web35';
// console.log(cohort);
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

//? Function Scoping
//* when variables are created inside of a function those variables will only ever be available inside of the function
//& think of {} as gates - when you see them they keep variable in
//? Block Scope
// let answer; // creating the variable here
// if(1 === 1){
//   answer = 'its true'; // updating the value
// }
// functions are scoped the exact same way as variables
// if we create a function inside of another function - that function will only ever be available inside of that function
//? HOISTING
//& hoiting allows us to access functions / variables before they have been created
//* function declearations and variable declearations - 2 things that are hoisted
some people set files up like this:
   // what does this file do?
all function invocations
    // how does this file do it?
all functions
// 2 pass compiler - on the first pass we get references and on the second we get values assigned
// know about it but it's not great practice to use it
//? Closures
// closures give us the ability to put functions together
//! the ability to access functions from a parent level scope in child level scope even after the parent function has been terminated
// code that has been identifed else where the we can use later
// we can pass variables down but we can't pass them back up
//
//! inner scope references variables in outer scope - that is what is referred to as a closure
//
//? Callbacks and Higher Order Functions
//* Higher Order Function receive other functions as parameters
//* Callback functions are passed into higher order functions as arguments
// higher order functions are passed in // callback functions receive
//? HOF + Callback Functions
//* higher order functions receive other functions as params
//* callback functions are passed into other functions as args
//! higher order function receive and callback function are passed in
  //& .forEach()
  // must iterate through every item in an array without stopping
  // forEach doesn't return a new array
  // return is optional
  // if you are working with massive datasets a for loop may be better - if this starts to slow down the browser that's when you might consider a for loop instead
  //& .map()
  // return a new array
  // does not manipulate the original array
  // used for converting data
  // needs the return keyword
  //& .filter()
  // returns a new array
  // does not manipulate the original
  // it filters out results into the new array
  // we need a return
  // //$ Skeleton Syntax
  // //? forEach
  // array.forEach(function(item){
  //   console.log(item.thingIAmLookingAt);
  // });

  // //& .map()
  // // usually coverting data
  // const newArray = array.map(function(item){
  //   return thingThatGoesInNewArray;
  // });
  // //& .filter()
  // const newArray = array.filter(function(item){
  //   return ConditionThatCanBeTrueORFalse;
  //   if it's true it's included / if false it's not
  // });
  //   //& .reduce()
  // const singleValue = array.reduce(function(accumulator, item){
  //   return accumulator + item.whateverItemYourAreWorkingWith;
  // },itinitalValue);
//! Window Binding - if none of the other rules apply "this" default to the window - unless you are using strict mode in which case it would return undefined
// 'use strict';
//! dog = 'Ada'; // DONT DO THIS!
// console.log(dog);
// 'use strict';
//? Implicit Binding
// most common rule - found in about 80% of use cases
// when the function is invoked, look the left of the dot that is what this refers to
// only applies to objects with methods
// person.greet(); // look to the left of the dot that is what 'this' refers to
//? Explicit Binding
//* .call - will immediately invoke the function / .call you pass in arguments 1 by 1
//* .apply - will immediately invoke the function / .apply pass in arguments as an array
//* .bind - you pass in arguments 1 by 1, but it does not immediately invoke the function, it returns a brand new function that can be invoked later
//
//& .call
//% explicitly telling JS what the this keyword should refer to by the argument I am passing in when invoking the function with .call

//& Bind
//% const friendlyGhost = ghost.bind(myGhost); // creating a new function called friendlyGhost and binding myGhost to it
//& Call
//% callOfTheWild.call(animal); // invoking the function and binding the animal to it
//& New Binding
// %using the 'new' keyword constructs a new object and 'this' point to it
//$ when a function is invoked as a constructor function using the 'new' keyword 'this' points to the new object that's created
//? Prototypes + Constructor Functions!!
//* constructor functions construct other objects!! // this is their whole life's purpose
// they give us the ability to pass methods across thousands of objects!
//* Capitalized Function name - you will want to use a capital with constructor functions
//* missing a return statement (this not a gaurantee)
// Constructor Function Review (the old)
//? class syntax
// class Pet{
//   constructor(spiderman){
//   args
//   methods go here
//   speak(){return ``;}
//   talk(){return``}
// }
// //child the old way
// function Child(childAttrs){
//   Pet.call(this, childAttrs); // binding this to parent
//   // any special child attributes would go here
// }
// Child.prototype = Object.create(Pet.prototype); //$ telling the child to inherit the parent's methods
//*fancy classs syntax way
// class Child extends Pet{ // who it's parent is
//   constructor(unicorn){
//     super(unicorn);
//     // any special attributes of the child go here
//   }
//   // any special methods for the child go here
// }
// // create our objects
//? Classes
//% classes are not hoisted - this means that if we are putting information above a class we have referenced it will not work!
//& they use strict - prevents window binding, forces us to write cleaner code with error if we do not
// Methods are a special syntax
//$ the word constructor is visible
//? Child Classes
// extends links up the dunder proto - it tells us where we came from
// extends tells super what to super to
// extends and super do what .call and object.create did
//* REVIEW
//? Functions
// parameters - are placeholder values - they don't get defined until the function is invoked
// arguments - are actual values - we pass them in, in place of parameters when the function is invoked
// callback functions + higher order functions
//$ the higher order function receives a cb function as a param
// callback function is passed into a higher order function as an argument
//? Objects
// $skeleton of an object
// const object = {
//   key: value,
  // methods
//   key: function(){
//     return `the thing the function does`;
//   }
// }
// methods are functions that belong to objects
//? Arrays
//* Order Matters!!
// the computer assigns an index to every item in the array, the index starts at 0
// const array = ['index 0', 'index 1', 'index 2'];
//$ .forEach()
// iterates through every item in an array without stopping
// it does not return a new array
// you do not need the return keyword
//$ .map
// this of map when you need to convert data
// returns a brand new array and it does not manipulate the original
// you NEED a return
//$ .filter
// when you want to filter data based on something that can be true or false
// if its true its included if its false its excluded
// it returns a new array
// NEEDs a return
//$.reduce()
// used mostly for sum and products but could be used for anything
// it returns a single value not an array
// NEEDs a return
// ?Prototype
//& parent skeleton
// function Parent(param){
// assign attributes here
//   this.attributes = param.attributes;
// }
// Parent.prototype.methodName = function(){
  // return something here
// }
//& child skeleton
// function Child(param){
//   Parent.call(this, param);
  // any special attributes for the child we would assign them here
// }
// Child.prototype = Object.create(Parent.prototype); // allow the child to use the parents methods
// special method for child
// Child.prototype = function(){
  // return something here
// }
//? Class Syntax Skeleton
// &Parent
//% class Parent{
//   constructor(param){
    // assign attributes here
//   }
  // methods go here
// }
//% class Child extends Parent{
//   constructor(param){
//     super(param); // inheriting from the parent
    // assgin any special attributes for the child here
//   }
  // any special methods for the child here
