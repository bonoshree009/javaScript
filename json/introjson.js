console.log("hello")

const person = {
  name: "Bonoshree",
  age: 22,
  gender: "Female",
  isStudent: true,
  hobbies: ["Reading", "Listening to music"],
  address: {
    city: "Rajshahi",
    country: "Bangladesh"
  }
};

console.log(person);
const jsonperson = JSON.stringify(person)
console.log(jsonperson)
