/*

💪 Exercise 1: Array map()

🎯 Your task:
- There is an array of numbers called "numbers" below.
- Use the array map() method to create a new array that contains all the values of "numbers" multiplied by two.
  - i.e. the doubledNumbers array should contain the values [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((x) => x * 2);

console.log(doubledNumbers);

/* -----------------------------------

💪 Exercise 2: Array map()

🎯 Your task:
- There is an array of objects called "painters" below.
- Use the array map() method to create an array of strings, where each value in the array is the full name of a painter.
  - i.e. the fullNames array should contain ['Claude Monet', 'Leonardo da Vinci', etc...] 

*/

const painters = [
  { firstName: "Claude", lastName: "Monet" },
  { firstName: "Leonardo", lastName: "da Vinci" },
  { firstName: "Frida", lastName: "Kahlo" },
  { firstName: "Vincent", lastName: "van Gogh" },
  { firstName: "Georgia", lastName: "O'Keeffe" },
];

const fullNames = painters.map(
  ({ firstName, lastName }) => `${firstName} ${lastName}`,
);

console.log(fullNames);
