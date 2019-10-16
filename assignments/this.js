/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. this references window object in global;
 * 2. this in function references object before dot
 * 3. this will reference an instance created with new binding create
 * 4. .call and .apply will explicitly define this
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
const hello = function() {
  console.log(this);
};
hello();

// Principle 2

// code example for Implicit Binding
const person = {
  name: "John Connor",
  speak() {
    console.log(`My name is ${this.name}.`);
  }
};
person.speak();

// Principle 3

// code example for New Binding
function Terminator(model, mission) {
  this.model = model;
  this.mission = mission;
}
Terminator.prototype.speak = function() {
  console.log(`I'm ${this.model}. ${this.mission}`);
};

const T = new Terminator(
  "T-800",
  "My primary mission parameter is to protect John Connor"
);
T.speak();

// Principle 4

// code example for Explicit Binding
const obj = {
  name: "John Connor",
  speak() {
    console.log(`My name is ${this.name}.`);
  }
};

const obj2 = {
  name: "Sarah Connor"
};
obj.speak.call(obj2);
