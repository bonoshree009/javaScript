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
//   promise dibe
//       .then(response => response.json())
//          promise dibe
//       .then(data => console.log(data))

      const loaddata =()  =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
      }


      const loadpost =()=> {
      const url = "https://jsonplaceholder.typicode.com/posts"
        fetch(url).then(res => res.json())
        .then(data =>console.log(data))

      }

