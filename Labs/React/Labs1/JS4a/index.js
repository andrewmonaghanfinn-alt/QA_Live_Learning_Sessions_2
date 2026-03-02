/*

💪 Exercise 1: Ternary operator

The getParity function below returns either the string "even" or "odd", depending on whether the number passed to the function is even or odd. 

🎯 Your task:
- Rewrite the getParity function so that it has the same logic, but uses the ternary (?) operator.
  - The body of the function can be written in 1 line.

*/

function getParity(number) {
  return number % 2 === 0 ? "even" : "odd";
}

console.log(`The number 6 is ${getParity(6)}.`);
console.log(`The number 35 is ${getParity(35)}.`);
console.log("----------------------------------");

/* --------------------------------------- 

💪 Exercise 2: Ternary operator

Network Rail runs a promotion where under-11s can travel for free.
The getTicketPrice function returns a value of 0 when the parameter "age" is 10 or less, and otherwise returns a value of 4.

🎯 Your task:
- Rewrite the getTicketPrice function so that it has the same logic, but uses the ternary (?) operator.
  - The body of the function can be written in 1 line.

*/

function getTicketPrice(age) {
  return age <= 10 ? 0 : 4;
}

console.log(`Ticket price for a 25-year-old: £${getTicketPrice(25)}`);
console.log(`Ticket price for a 9-year-old: £${getTicketPrice(9)}`);
console.log("----------------------------------");

/* --------------------------------------- 

💪 Exercise 3: Ternary operator

The displayMessage function below logs a given message to the console. If the second parameter ("loud") is true, then the message will be displayed in all uppercase. 

🎯 Your task:
- Rewrite the displayMessage function so that it has the same logic, but uses the ternary (?) operator.
  - The body of the function can be written in 1 line.

*/

function displayMessage(message, loud) {
  loud ? console.log(message.toUpperCase()) : console.log(message);
}

displayMessage("Hello world! 👋", false);
displayMessage("Hello world! 👋", true);
