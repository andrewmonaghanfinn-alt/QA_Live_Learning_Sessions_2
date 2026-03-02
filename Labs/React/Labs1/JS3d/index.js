/*

💪 Exercise: Object destructuring

*/

const person = {
  firstName: "Ada",
  lastName: "Lovelace",
  age: 36,
  location: "London",
};

/*

🎯 Your task:
- In the displayFullName function below, the firstName and lastName properties are extracted from the personObject parameter.
- Use object destructuring to extract firstName and lastName in a more concise way.

*/

function displayFullName(personObject) {
  const { firstName, lastName } = person;

  console.log(`Full name: ${firstName} ${lastName}`);
}

displayFullName(person);
