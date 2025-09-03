console.log("hello")


// json like object bt with Notation.sob string hoa jai [ key value]

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

// console.log(person);
// const jsonperson = JSON.stringify(person)
// console.log(jsonperson)
// const jsonperso = JSON.parse(jsonperson)
// console.log(jsonperso)


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     // fetch ata return kore na just promise dei tai chaining function use kori saita than()
//       .then(response => response.json())
//       .then(data => console.log(data))

      const loaddata =()  =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
      }



