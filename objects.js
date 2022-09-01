// Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
// For example:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// After adding the property the result should be:
// var questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0,
//     usersAnswer: null
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//     corAnswer: 0,
//     usersAnswer: null
// }];
// The questions array is already defined for you and is not the same as the one in the example.
// Test:
// describe("Tests", () => {
//     it("test", () => {
//   Test.expect(questions[0].usersAnswer == null);  
//     });
//   });

questions.forEach(obj => obj.usersAnswer = null)



// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
// Your task is to return the number of JavaScript developers coming from Europe.
// For example, given the following list:
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.
// If, there are no JavaScript developers from Europe then your function should return 0.
// Notes:
// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// param: array
// return: int
// example: var list1 = [{continent:'Europe'}, {continent:'Oceania'}, {continent:'Europe'}, {continent:'Asia'}] // 2
// pseude code: iterate thru object, if prop value true, count ++

function countDevelopers(arr) {
    let result = 0
    arr.forEach(obj => obj.continent === 'Europe' && obj.language === 'JavaScript' ? result++ : result)
    return result
}

function countDevelopers(arr) {
    return arr.reduce(function(sum, curVal){
      return sum + ((curVal.continent === 'Europe' && curVal.language === 'JavaScript') ? 1 : 0)
    }, 0)
}



// The code provided is supposed return a person's Full Name given their first and last names.
// But it's not working properly.
// Notes
// The first and/or last names are never null, but may be empty.
// Task
// Fix the bug so we can all go home early.

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName,
    this.lastName = lastName,
    this.getFullName = function(){
      if(this.firstName && this.lastName){
        return `${firstName} ${lastName}`
      }else if(this.firstName && !this.lastName){
        return `${firstName}`
      }else if(!this.firstName && this.lastName){
        return `${lastName}`
      }else{
        return ''
      }
    }
  }
}



// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.
// Your task is to return an array where each object will have a new property 'greeting' with the following string value:
// Hi < firstName here >, what do you like the most about < language here >?
// For example, given the following input array:
// var list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// your function should return the following array:
// [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//     greeting: 'Hi Sofia, what do you like the most about Java?'
//   },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//     greeting: 'Hi Lukas, what do you like the most about Python?'
//   },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//     greeting: 'Hi Madison, what do you like the most about Ruby?'
//   } 
// ];
// Notes:
// The order of the properties in the objects does not matter (except in COBOL).
// The input array will always be valid and formatted as in the example above.

function greetDevelopers(arr) {
  arr.forEach(obj => obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`)
  return arr
}



// #Make them bark
// You have been hired by a dogbreeder to write a program to keep record of his dogs.
// You've already made a constructor Dog, so no one has to hardcode every puppy.
// The work seems to be done. It's high time to collect the payment.
// ..hold on! The dogbreeder says he wont pay you, until he can make every dog object .bark(). Even the ones already done with your constructor. "Every dog barks" he says. He also refuses to rewrite them, lazy as he is.
// You can't even count how much objects that bastard client of yours already made. He has a lot of dogs, and none of them can .bark().
// Can you solve this problem, or will you let this client outsmart you for good?
// Practical info:
// The .bark() method of a dog should return the string 'Woof!'.
// The contructor you made (it is preloaded) looks like this:
// function Dog(name, breed, sex, age){
//     this.name  = name;
//     this.breed = breed;
//     this.sex   = sex;
//     this.age   = age;
// }
// Hint: A friend of yours just told you about how javascript handles classes diferently from other programming languages. He couldn't stop ranting about "prototypes", or something like that. Maybe that could help you...

Dog.prototype.bark = function(){
  return 'Woof!'
}



// Preloaded for you in this Kata is a class Animal:

// Task
// Define the following classes that inherit from Animal.

// I. Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status. All sharks should have a leg count of 0 (since they obviously do not have any legs) and should have a species of "shark".

// II. Cat
// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status. Cats should always have a leg count of 4 and a species of "cat".

// Furthermore, the introduce/Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase. For example:

// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
// III. Dog
// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master. master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

// Dogs have an identical introduce/Introduce method as any other animal, but they have their own method called greetMaster/GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)" (of course not the literal string but replace the (insert_master_name_here) with the name of the dog's master).


class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
    constructor(name, age, status) {
      super(name, age, 0, "shark", status);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, status) {
      super(name, age, 4, 'cat', status);
  
    }
    introduce() {
      super.introduce()
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, status, master) {
      super(name, age, 4, 'dog', status, master);
      this.master = master
    }
    introduce() {
      super.introduce()
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
    greetMaster(){
      return `Hello ${this.master}`
    }
  }



// Write a class Block that creates a block (Duh..)

// ##Requirements

// The constructor should take an array as an argument, this will contain 3 integers of the form [width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the `Block`

// `getLength()` return the length of the `Block`

// `getHeight()` return the height of the `Block`

// `getVolume()` return the volume of the `Block`

// `getSurfaceArea()` return the surface area of the `Block`
// ##Examples

//     let b = new Block([2,4,6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of `6`
//     b.getWidth() // -> 2
    
//     b.getLength() // -> 4
    
//     b.getHeight() // -> 6
    
//     b.getVolume() // -> 48
    
//     b.getSurfaceArea() // -> 88
// Note: no error checking is needed

class Block {
  constructor(data){
    this.width = data[0]
    this.length = data[1]
    this.height = data[2]
  }
  getWidth(){
    return this.width
  }
  getLength(){
    return this.length
  }
  getHeight(){
    return this.height
  }
  getVolume(){
    return this.length * this.height * this.width
  }
  getSurfaceArea(){
    return 2 * this.length * this.width + 2 * this.length * this.height + 2 * this.height * this.width
  }
}



// The following code could use a bit of object-oriented artistry. While it's a simple method and works just fine as it is, in a larger system it's best to organize methods into classes/objects. (Or, at least, something similar depending on your language)

// Refactor the following code so that it belongs to a Person class/object. Each Person instance will have a greet method. The Person instance should be instantiated with a name so that it no longer has to be passed into each greet method call.

// Here is how the final refactored code would be used:

// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// joe.name           // should == 'Joe'

class Person {
  constructor(name){
    this.name = name
  }
  greet(greetName){
    return `Hello ${greetName}, my name is ${this.name}`
  }
}

let joe = new Person('Joe')






// It's tricky keeping track of who is owed what when spending money in a group. Write a function to balance the books.
// The function should take one parameter: an object/dict with two or more name-value pairs which represent the members of the group and the amount spent by each.
// The function should return an object/dict with the same names, showing how much money the members should pay or receive.
// Further points:
// The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
// If value is a decimal, round to two decimal places.
// Translations and comments (and upvotes!) welcome.
// Example
// 3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.
// var group = {
//     A: 20, 
//     B: 15, 
//     C: 10
// }
// splitTheBill(group) // returns {A: 5, B: 0, C: -5}


// para: object w/2 or more pairs
// result: object
// example: {a : 30, b : 5, c : 10} -> {a : 15, b : -10, c : -5} 
// pseudo code:
// calculate sum and average of pair values
// extract the average from each vlaue in pair
// update value

function splitTheBill(x) {
  let average = Object.values(x).reduce((a , b) => a + b, 0) / Object.values(x).length
  for (let key in x){
    x[key] = !((x[key] - average) % 1) ? (x[key] - average) : Number((x[key] - average).toFixed(2))
  }
  return x
}



// For this exercise you should create a JavaScript class like object called "Animal" that takes in "name" and "type" arguments. It should have a toString method that returns a human readable string indicating the argument information passed in. It should also allow the name property to be set.

// The following is an example of how the final code would be used and what the expected return values should be:

// var dog = new Animal('Max', 'dog');
// dog.toString(); // should return 'Max is a dog'
// dog.type; // should == 'dog'
// dog.name; // should == 'Max'
// dog.name = 'Lassie'; // should set name to 'Lassie'

class Animal {
  constructor(name, type){
    this.name = name;
    this.type = type;
  }
  toString(){
    return `${this.name} is a ${this.type}`;
  }
}

let dog = new Animal('Max', 'dog');

// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters
// Task
// Define the following classes.

// I. Cuboid
// The object constructor for the class Cuboid should receive exactly three arguments in the following order: length, width, height and store these three values in this.length, this.width and this.height respectively.

// The class Cuboid should then have a getter surfaceArea which returns the surface area of the cuboid and a getter volume which returns the volume of the cuboid.

// II. Cube
// class Cube is a subclass of class Cuboid. The constructor function of Cube should receive one argument only, its length, and use that value passed in to set this.length, this.width and this.height.

// Hint: Make a call to super, passing in the correct arguments, to make life easier ;)

class Cuboid {
  constructor(length, width, height){
    this.length = length
    this.width = width
    this.height = height

    // or
    // Object.assign(this, { length, width, height })
  }
  get surfaceArea(){
    return 2 * (this.length * this.width + this.width * this.height + this.height * this.length)
  }
  get volume(){
    return this.length * this.width * this.height
  }
}

class Cube extends Cuboid {
  constructor(length){
    super(length)
    this.length = length
    this.width = length
    this.height = length
  }
}

// Ruby and Javascript let you re-open classes so you can add new functionalities to existing classes and objects.
// To demonstrate this, you'll have to add a new method (myNewMethod in JS) into the String class that simply calls the upcase method (toUpperCase() in Javascript), so that:
// JS
// "abc".myNewMethod();
// returns
// "ABC"

String.prototype.myNewMethod = function () {
  return this.toUpperCase();
};

// or

String.prototype.myNewMethod = String.prototype.toUpperCase;


// You're going to implement a simple counter class. The counter will start at zero, and every time its incr method is called, it will increase by 1.

// There's one caveat: Your counter must act like a number and support arithmetic operations and comparisons.

// For example:

// var c = new Counter();
// c.incr(); // counter is now at 1
// c + 1; // 2
// c > 1; // false
// c > 0; // true
// c == 1; // true
// Math.sqrt(c); // 1
// You are not required to support equality comparison between two Counter instances.

function Counter(){
  this.value = 0;
};

Counter.prototype.incr = function() {
  this.value++;
};

Counter.prototype.valueOf = function () {
  return this.value;
};


Math.ceil = function (x) {
  if(Number.isInteger(x)){
    return x
  }else{
    return  +(String(x).slice(0, String(x).indexOf('.'))) + 1
  }
}

Math.floor = function (x) {
  if(Number.isInteger(x)){
    return x
  }else{
    return  +(String(x).slice(0, String(x).indexOf('.')))
  }
}

Math.round = function (x) {
  let diff = x - Number(String(x).slice(0, String(x).indexOf('.')))
  if(Number.isInteger(x)){
    return x
  } else if( diff < 0.50 ){
    return +(String(x).slice(0, String(x).indexOf('.')))
  }else{
    return +(String(x).slice(0, String(x).indexOf('.'))) + 1
  }
}


Math.abs = function (x) {
  if(x < 0){
    return (-1) * x
  }else{
    return x
  }
}

Math.max = function (arg) {
  let max = arguments[0]
  for(let i = 1; i < arguments.length; i++){
    arguments[i] > max ? max = arguments[i] : max
  }
  return max
}

Math.min = function (arg) {
  let min = arguments[0]
  for(let i = 1; i < arguments.length; i++){
    arguments[i] < min ? min = arguments[i] : min
  }
  return min
}


Math.pow = function (x, y) {
  let exp = x
  while(y > 1){
    exp = exp * x
    y--
  }
  return y === 0 ? 1 : exp
}


// Sorting an array of positive integers
// Background
// You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!

// Task
// Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.

// Extension
// If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.

Array.prototype.sort = function () {
  let sorted = []
  while(this.length > 0){
    let smallest = this[0]
    for (let j = 1; j < this.length; j++){
      this[j] < smallest ? smallest = this[j] : smallest
    }
    this.splice(this.indexOf(smallest), 1)
    sorted.push(smallest) 
  }
  return sorted
}


// Statistics - Fundamentals
// Task
// Create a class, DataSet, that has the following properties and methods:

// data - Contains an array of the data
// mean - Contains the value of the mean average of the data
// variance - Contains the value of the variance of the data
// stdDeviation - Contains the standard deviation of the data
// setMean() - A function that calculates the mean, updates this.mean and returns the value of the mean
// setVar() - Sets/resets the variance and the standard deviation of the data set and returns the variance
// For example, if I initiate a DataSet with the following data:

// var myData = new DataSet(1,2,3,4,5,6,7);
// ... the following properties will be automatically set:

// myData.data === [1,2,3,4,5,6,7];
// myData.mean === 4
// myData.variance === 4
// myData.stdDeviation === 2
// Furthermore, if I then alter some of the entries in myData.data and then call the functions setMean() and setVar(), the mean, standard deviation and variance of the data should be recalculated and the value of the new mean and variance returned.

// Notes
// Regarding Float Handling and Precision
// In this Kata, the computed values of your variance and stdDeviation need only be correct to 3 decimal places (the author's solution being the standard for correct values) so you may assume float arithmetic is commutative.


class DataSet {
  constructor(...data) {
    this.data = [...data]
    this.mean = data.reduce((a, b) => a + b, 0) / this.data.length
    this.variance = this.data.reduce((acum, curVal) => acum + Math.pow((curVal - this.mean), 2), 0) / this.data.length
    this.stdDeviation = Math.sqrt(this.data.reduce((acum, curVal) => acum + Math.pow((curVal - this.mean), 2), 0)/this.data.length)
  }
  setMean(){
    this.mean = this.data.reduce((a, b) => a + b, 0) / this.data.length
    return this.mean;
  }
    
  setVar(){
    this.variance = this.data.reduce((acum, curVal) => acum + Math.pow((curVal - this.mean), 2), 0) / this.data.length
    this.stdDeviation = Math.sqrt(this.data.reduce((acum, curVal) => acum + Math.pow((curVal - this.mean), 2), 0)/this.data.length)
    return this.variance
  }
}

// In this kata you will create a class
// Journey(object, crew, balloons)
// so anyone can create objects like
// var gravityFalls = new Journey(house, 2, 20622)
// which means starting a new journey to Gravity Falls in a house with 2 members of crew (Carl and Russel).
// But is this journey possible? Will the house float? Is it enough to have 20622 helium balloons (the number used by Pixar animators in liftoff scene)?
// Your Journey class should have a public method isPossible() that returns true or false based on these rules:
// 1). Every object passed to Journey will have its weight property like
// var house = {"weight": 45000};
// (we will use metric system in this kata, 45 000 kg is about 100 000 pounds).
// 2). Each member of the crew weighs 80 kg.
// 3). We use regular sized party balloons filled with helium. Each balloon lifts 4.8 grams + its own weight.
// Can you lift a tiny 95 kg(~200 pound) push cart with 50 balloons like in one of the starting scenes of the movie?
// Can one balloon actually carry a message on a single letter-sized paper sheet sent by Carl to his dying wife Ellie in the other scene?
// Can the story I heard about man flying in his lawn chair equipped with 1000 balloons be true?

class Journey {
  constructor(object, crew, balloons){
    this.object = object,
    this.crew = crew,
    this.balloons = balloons
  }
  // OR
  // constructor(object, crew, balloons) {
  //     Object.assign(this, {object, crew, balloons});
  // }
  isPossible(){
    return this.object['weight'] + this.crew * 80 <= this.balloons * 0.0048
  }
}


// You are the judge at a competitive eating competition and you need to choose a winner!
// There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:
// Chickenwings: 5 points
// Hamburgers: 3 points
// Hotdogs: 2 points
// Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:
// [
//   {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
//   {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
// ]
// It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.
// [
//   {name: "Big Bob", score: 134},
//   {name: "Habanero Hillary", score: 98}
// ]
// Happy judging!

function scoreboard(whoAteWhat){
  let result = []
  whoAteWhat.forEach((person, i) => {
    for (const scores in person){
      let scoreBoard = person.chickenwings * 5 + person.hamburgers * 3 + person.hotdogs * 2
      result[i] = {name: person.name, score: scoreBoard}
  }
  })
  result.sort((a, b) => a.name.localeCompare(b.name))
  result.sort((a, b) => b.score - a.score)
  return result
}

// OR

function scoreboard(whoAteWhat){
  return whoAteWhat.map(obj => ({
    name: obj.name,
    score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
  })).sort((a, b) => b.score - a.score || a.name > b.name);
}

// or

const scoreboard = whoAteWhat =>
whoAteWhat.map(val => ({name: val.name, score: val.chickenwings * 5 + val.hamburgers * 3 + val.hotdogs * 2}))
  .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));


// Capitalize First Letter of a String
// Write a method, capitalize(), such that when the method is called on a String, only the very first letter of the string is capitalized (if it is a letter). For example:

// "string".capitalize() === "String"
// "hello World".capitalize() === "Hello World"
// "i love codewars".capitalize() === "I love codewars"
// "This sentence is already capitalized".capitalize() === "This sentence is already capitalized"
// "0123the first character of this sentence is not a letter".capitalize() === "0123the first character of this sentence is not a letter"
// Disabled Methods
// For the purposes of this Kata, the following methods are disabled:

// toUpperCase()
// toLowerCase()
// Hint
// If you are really stuck as to what function/method to define, click here to reveal the answer.

String.prototype.capitalize = function() {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  return lower.includes(this[0]) ? `${ upper[lower.indexOf(this[0])] }${ this.slice(1) }` : `${this}`
}

// or

String.prototype.capitalize = function () {
  let c = this.charCodeAt(0)
  if (97 <= c && c <= 122) c -= 32
  return String.fromCharCode(c) + this.slice(1)
}


// I don't like writing classes like this:

// function Animal(name,species,age,health,weight,color) {
//   this.name = name;
//   this.species = species;
//   this.age = age;
//   this.health = health;
//   this.weight = weight;
//   this.color = color;
// }
// Give me the power to create a similar class like this:

// const Animal = makeClass("name","species","age","health","weight","color") 

function makeClass(...properties) {
  return class{
    constructor(...props){
      properties.forEach((prop, i) => this[prop] = props[i])
    }
  }
}


// The owner of the doggy daycare wants to know whether she can accept new dogs into her daycare and needs to check whether they have been wormed and vaccinated in order to accept them either by themselves or as well as other dogs.

// There is a Dog prototype (class in Ruby) that needs to be extended with the method checkDog (check_dog). Dog currently has the following properties (attributes):

// name
// age
// breed
// vaccinated
// wormed
// You'll need to return the dog's name each time as well as " can be accepted", " can only be accepted by itself" and " can not be accepted".

// If the dog is vaccinated and wormed, the dog can be accepted.
// If the dog is only vaccinated or only wormed, the dog can only be accepted by itself.
// If the dog has not be vaccianted or wormed, the dog can not be accepted.
// Example:

// var spot = new Dog("Spot", 5, "Labrador", true, false);
// spot.checkDog(); // Should return: "Spot can only be accepted by itself".

Dog.prototype.checkDog = function(name, vaccinated, wormed){
  if (this.vaccinated && this.wormed){
    return `${this.name} can be accepted`
  } else if(this.vaccinated || this.wormed){
    return `${this.name} can only be accepted by itself`
  }else{
    return `${this.name} can not be accepted`
  }
}

// In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.

// Create an Singleton pattern, so there is one object in system.

// Example:

// var obj1 = new Singleton();
// var obj2 = new Singleton();
// obj1 === obj2; // => true
// obj1.test = 1;
// obj2.test; // => 1

function myFunction(){
  const MyObject = {
      objProperty: "string",
      objMethod() {
          return this.objProperty;
      }
  }
  return MyObject
}


// You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

// class Student {
//   constructor(name, fives, tens, twenties) {
//     this.name = name;
//     this.fives = fives;
//     this.tens = tens;
//     this.twenties = twenties;
//   }
// }
// As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

// Notes:

// Each student will have a unique name
// There will always be a clear winner: either one person has the most, or everyone has the same amount
// If there is only one student, then that student has the most money

function mostMoney(students) {
  let money = students.map(person => person.fives * 5 + person.tens * 10 + person.twenties * 20)
  let equal = money.every(el => el === money[0])
  return money.length === 1 ? students[0].name : equal ? 'all' : students[money.indexOf(Math.max(...money))].name
}



// There are all types of cylons. The trick is, some look like humans. Using prototypical inheritance, 
// create a prototype for Cylon. Cylons should have a model, and should have an attack function, 
// which will return the string "Destory all humans!"

// Since some cylons appear human, then make a child object called HumanSkin. This should have a model, 
// as Cylons do, and should have the same attack. However, it should also have a function called infiltrate, 
// which will return the string "Infiltrate the colonies".

class Cylon {
  constructor(model) {
    this.model = model;
  }
  attack() {
    return 'Destroy all humans!';
  }
}

class HumanSkin extends Cylon {
  constructor(model) {
    super(model)
  }
  attack() {
    return super.attack()
  }
  infiltrate(){
    return 'Infiltrate the colonies'
  }
}


// Dogs
// Complete the following program to add the definition of the Dog class.
// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".
// TODO: define the Dog class here

class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }

  bark() {
    if(this.size < 61){
      return `Woof! Woof!`
    }else{
      return `Grrr! Grrr!`
    }
  }
}
  
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);



// Character inventory
// Improve the example RPG to add character inventory management according 
// to the following rules:
// A character's inventory contains a number of gold and a number of keys.
// Each character begins with 10 gold and 1 key.
// The character description must show the inventory state.
// When a character slays another character, the victim's inventory goes to its vanquisher.

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.gold = 10;
    this.keys = 1;
    this.xp = 0; // XP is always zero for new characters
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        this.gold += target.gold;
        this.keys += target.keys;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points,
          ${this.gold} gold and ${keys} keys`
        );
        this.xp += bonusXP;
      }
    } else {
      console.log(`${this.name} can't attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength, ${this.xp} XP points, ${this.gold} gold and ${this
        .keys} key(s)`;
  }
}

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());



// Account list
// Let's build upon a previous account object exercise. A bank account is still defined by:

// A name poperty.
// A balance property, initially set to 0.
// A credit method adding the value passed as an argument to the account balance.
// A describe method returning the account description.
// Write a program that creates three accounts: one belonging to Sean, 
// another to Brad and the third one to Georges. These accounts are stored in an array. 
// Next, the program credits 1000 to each account and shows its description.

class BankAccount{
  constructor(name){
    this.name = name;
    this.balance = 0
  }
  credit(value){
    this.balance += value
  }
  describe(){
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}

const sean = new BankAccount('Sean')
sean.credit(1000)
sean.describe()

function createAccounts(){
  const owners = ['sean', 'brad', 'georges'];
  let accounts = []
  owners.forEach(x => {
    accounts.push(x = new BankAccount(x))
  })
  accounts.forEach(x => x.balance = x.credit(1000))
  accounts.forEach(x => sean.describe())
}

