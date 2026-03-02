/*

💪 Exercise: Arrow functions

🎯 Your task: 
  - Convert these functions into arrow functions.

💡 Tip:
The syntax to define an arrow function looks like this:
const doSomething = (param1, param2) => { ... }

*/

const sayHelloWorld = (msg) => console.log(msg);

const isEven = function (num) {
  return num % 2 === 0;
};

const add = (num1, num2) => {
  return num1 + num2;
};

// Do not change the code below this line.
sayHelloWorld("Hello, world!");
console.log("Is 5 even?", isEven(5));
console.log("What is 40 + 2?", add(40, 2));
