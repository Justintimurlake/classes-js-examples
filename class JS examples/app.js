// my Github:
// https://github.com/Justintimurlake



// =========Classes (Simple examples)==========

// An important difference between function declarations and class declarations is that while functions can be called in code that appears before they are defined, classes must be defined before they can be constructed.


// --------------The “class” syntax---------------

// // ex1

// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }

// // ex1.2


// class MyClass {
//   prop = value; // property

//   constructor(...) { // constructor
//     // ...
//   }

//   method(...) {} // method

//   get something(...) {} // getter method
//   set something(...) {} // setter method

//   [Symbol.iterator]() {} // method with computed name (symbol here)
//   // ...
// }

// // ex1.3

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }




// ex2

// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }

// }

// // Usage:
// let user = new User("John");
// user.sayHi();

// ex3

// class Car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const myCar = new Car("Ford", 2014);

// console.log(myCar.name + " " + myCar.year);

//___rewriting class User in pure functions____

// // 1. Create constructor function
// function User(name) {
//   this.name = name;
// }
// // a function prototype has "constructor" property by default,
// // so we don't need to create it

// // 2. Add the method to prototype
// User.prototype.sayHi = function() {
//   console.log(this.name);
// };

// // Usage:
// let user = new User("John");
// user.sayHi();

// ____________Class expressions__________________

// ex1

// // unnamed
// let Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle"

// // named
// Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name);
// // output: "Rectangle2"


// ex2

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100

// ex3

// class Polygon {
//   constructor(...sides) {
//     this.sides = sides;
//   }
//   // Method
//   *getSides() {
//     for (const side of this.sides) {
//       yield side;
//     }
//   }
// }

// const pentagon = new Polygon(1,2,3,4,5);

// console.log([...pentagon.getSides()]); // [1,2,3,4,5]



// --------------What is a class?---------------

// ex1


// class User {
//   constructor(name) { this.name = name; }
//   sayHi() { console.log((this.name)); }
// }

// // class is a function
// console.log((typeof User)); // function

// // ...or, more precisely, the constructor method
// console.log((User === User.prototype.constructor)); // true

// // The methods are in User.prototype, e.g:
// console.log((User.prototype.sayHi)); // the code of the sayHi method

// // there are exactly two methods in the prototype
// console.log((Object.getOwnPropertyNames(User.prototype))); // constructor, sayHi



// -------------Getters/setters---------------

// ex1

// class User {

//   constructor(name) {
//     // invokes the setter
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short.");
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User("John");
// console.log(user.name); // John

// user = new User(""); // Name is too short.

// ex2

// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short, need at least 4 characters");
//       return;
//     }
//     this._name = value;
//   }
// };

// user.name = "Pete";
// console.log(user.name); // Pete

// user.name = ""; // Name is too short...


// -------------Computed names […] --------------

// class User {

//   ['say' + 'Hi']() {
//     console.log("Hello");
//   }

// }

// new User().sayHi();


// -------------Class fields-------------

// class User {
//   name = "John";

//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }

// new User().sayHi(); // Hello, John!

// ----------------------vs---------------

// class User {
//   name = "John";
//   sayHi() {
//         console.log(`Hello, ${this.name}!`);
//       }
// }

// let user = new User();

// console.log(user.name); // John


// -----Making bound methods with class fields--------

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () => {
//     console.log(this.value);
//   }
// }

// let button = new Button("hello");

// setTimeout(button.click, 2000); // hell


// --------------character _ --------

// Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:

// ex1


// class Car {
//   constructor(brand) {
//     this._carname = brand;
//   }
//   get carname() {
//     return this._carname;
//   }
//   set carname(x) {
//     this._carname = x;
//   }
// }

// let myCar = new Car("Ford");

// console.log(myCar.carname);

// ex2

// class Car {
//   constructor(brand) {
//     this._carname = brand;
//   }
//   get carname() {
//     return this._carname;
//   }
//   set carname(x) {
//     this._carname = x;
//   }
// } 

// let myCar = new Car("Ford");
// myCar.carname = "Volvo";
// console.log(myCar.carname);


// ------------real live example------------

// ex1

// class Rectangle {

//   //Setup

//   constructor (_width, _height, _color) {
//     console.log('The Rectagle is being creating');

//     this.width = _width;
//     this.height = _height;
//     this.color = _color;
//   }

//   getArea () {
    
//   return this.width * this.height;

//   }

//   printDescription () {

//     console.log(`I am a rectangle of ${this.width} x ${this.height} and i am a ${this.color}`);

//   }

// }

// let myRectangle1 = new Rectangle(5, 3,  'blue');
// let myRectangle2 = new Rectangle(10, 5,  'red');

// console.log(myRectangle1.getArea());
// console.log(myRectangle2.getArea());
// myRectangle2.printDescription();

// ex2 Getters/setters

// class Square {
//   constructor (_width) {
//     this.width = _width;
//     this.height = _width;
//     this.numOfRequestsForArea = 0;
//   }

//   get area () { 
//     this.numOfRequestsForArea++;
//     return this.width * this.height;
//   }

//   set area (area) {
//     this.width = Math.sqrt(area);
//     this.height = this.width;
//   }
// }

// let square1 = new Square(4);
// square1.area = 25;
// console.log(square1.width);
// console.log(square1.height);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.area);
// console.log(square1.numOfRequestsForArea);


// ex2 static

// class Square {
//   constructor(_width) {
//     this.width = _width;
//     this.height = _width;
//   }
   
//   static equals (a, b) {
//     return a.width * a.height === b.width * b.height;
//   }

// static isValidDimensions (width, height) {
//     return width === height;
// }

// }

// let square1 = new Square(8);
// let square2 = new Square(8);

// console.log(Square.equals(square1, square2));
// console.log(Square.isValidDimensions(5, 5));

// ex2 Parent and child Classes plus super

// class Person {
//   constructor (_name, _age) {
//     this.name = _name;
//     this.age = _age;
//   }

//   describe () {
//     console.log(`I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// class Programmer extends Person {

// // extends = Object.create


//   constructor (_name, _age, _yearsOfExperience) {
//     super(_name, _age);

//     //custom behaviour 

//     this.yearsOfExperience = _yearsOfExperience;
//   }

//    code () {

//     console.log(`${this.name} is coding`);
//    }

// }

// const programmers = [
//   new Programmer("Dom", 56, 12),
//   new Programmer("Jeff", 24, 4)
// ]

// let person1 = new Person("Jeff", 45);
// let programmer1 = new Programmer("Dom", 56, 12);

// programmer1.code();
// programmer1.describe();

// console.log(person1);
// console.log(programmer1);



// function developSoftware (programmers){

//   //Develop software
//   for (let programmer of programmers) {
//     programmer.code();
//   }
// }

// developSoftware (programmers);


// ------------Polymorphism------------

//  class Animal {

//   constructor (name) {

//     this.name = name;
//   }

//   makeSound () {
//     console.log('Generic Animal Sound!!!');
//   }
//  }

//  class Dog extends Animal {

//   constructor (name) {
//     super(name);
//   }

//   makeSound () {
// super.makeSound();
// console.log("Woof! Woof!");

//   }

//  }

//  const a1 = new Animal('Dom');
//  const a2 = new Dog('Tim');

//  a1.makeSound();
//  a2.makeSound();

// ------------Object vs Classes------------


//////////////////////Classses///////////////


// let PersonC = class {
//   constructor(nm, id) {
//     this.name = nm;
//     this.id = id;
//   }
//   getDetails() {
//     return `${this.name} :: ${this.id}`;
//   }
// };
// let bob = new PersonC("Bob", 123);
// console.log(bob.getDetails(), bob.name);

// let EmployeeC = class extends PersonC {
//   // EmployeeC prototype links to PersonC prototype
//   constructor(nm, id, salary) {
//     super(nm, id);
//     this.salary = salary;
//   }
//   employeeInfo() {
//     //exist on the prototype of EmployeeC
//     return `${this.name} :: ${this.id} :: ${this.salary}`;
//   }
// };
// let noomi = new EmployeeC("Noomi", 456, 8500000);
// console.log(noomi.employeeInfo());

//////////////////Objects////////////////

// let PersonP = function(nm, id) {
//   this.name = nm;
//   this.id = id;
// };
// PersonP.prototype.getDetails = function() {
//   return `${this.name} :: ${this.id}`;
// };
// let fred = new PersonP("Fred", 321);
// console.log(fred.getDetails(), fred.name);

// let EmployeeP = function(nm, id, salary) {
//   PersonP.call(PersonP, nm, id);
//   /////////////// OR////////////
//   // PersonP.call(this, nm, id);
//   this.salary = salary;
// };
// Object.setPrototypeOf(EmployeeP.prototype, PersonP.prototype); //extends NOTE: THIS LINE WAS CHANGED
// EmployeeP.prototype.employeeInfo = function() {
//   return `${this.name} :: ${this.id} :: ${this.salary}`;
// };
// let mary = new EmployeeP("Mary", 654, 65000);
// console.log(mary.employeeInfo());




// =======================
// https://www.youtube.com/watch?v=2ZphE5HcQPQ&t=17s
// https://www.youtube.com/watch?v=XoQKXDWbL1M
// =======================