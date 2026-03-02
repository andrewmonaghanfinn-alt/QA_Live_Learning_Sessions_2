/* 

💪 Exercise: Callbacks

First, analyse the code below and view the output in the console.

*/

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function forEach(array, callbackFunction) {
  for (let element of array) {
    callbackFunction(element);
  }
}

const names = ["Emily", "Dave", "Jessica"];

forEach(names, greet);

/* ----------------------------------------

🎯 Your task:
- Below these instructions, create a new function, "sayGoodbye". 
  - Similar to the "greet" function, this should take in one parameter (name), and log a message to the console that says "Goodbye, <name>!"
- Then, call the "forEach" function (defined above), passing in the "names" array as the first argument, and the "sayGoodbye" function as the second argument.

*/

const sayGoodbye = (name) => {
  console.log(`Goodbye, ${name}!`);
};

forEach(names, sayGoodbye);
