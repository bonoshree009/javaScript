//      practice 1
// let ihave = prompt("how much you have money");
// let cost = prompt("what is the cost");
// let have = ihave - cost ;
// console.log("the money i have",have);

// practice 2

//  let bangla = parseInt(prompt("enter the mark of bangla"));
//  let english = parseInt(prompt("enter the mark of english"));
//  let math = parseInt(prompt("enter the mark of math"));
//  let bio = parseInt(prompt("enter the mark of bio"));
//  let phy = parseInt(prompt("enter the mark of phy"));
//  let avg = (bangla + english + math + bio + phy) / 5 ;
//  console.log("the avarege value", avg);

//  pracetice 3

// let num = prompt("enter a number");
// let reminder = num % 5 ;
// console.log(reminder);

// practice 4

// const a = isNaN("11");
// console.log(a);
// console.log(isNaN("hello")); // true (because "hello" is not a number)
// console.log(isNaN("11a"));   // true (because "11a" is not a valid number)
// console.log(isNaN(11));      // false (11 is a number)
// console.log(isNaN("11"));    // false (JavaScript converts it to 11)
// console.log(isNaN(true));    // false (true is converted to 1)
// console.log(isNaN(" "));     // false (empty string is converted to 0)

// practice 5
//   let budget = prompt("enter your bedget");
//   if(budget > 500){
//     console.log("free coke")
//   }
//   else{
//     console.log("the price of coke is 30tk");
//   }

// practice 6
  
// let weight = prompt("enter your weight");
// let height = prompt("enter your height");
// let BMI = weight / height**2 ;
// if(BMI < 18.5){
//     console.log(" you are undeweight")
// }
//  else if(BMI >= 18.5 && BMI <=24.9){
//     console.log("you are normal")
// }
// else if(BMI >= 25 && BMI <=29.9){
//     console.log("you are overweight")
// }
// else{
//     console.log("you are obese")
// }

// practice 7

// let array=["rajshahi","cox's bazar","khulna"];
// let notarray="this is me"
//  array.push("nepal")
//  console.log(array)
//  array.pop()
//  console.log(array)
// console.log( array.includes("rajshahi"))
// // console.log(Array.isArray(notarray))
// for(i=61;i<100;i=i+2){
//     console.log(i)
// }

// String is not changeable (immutable)
// arrary is changeable
// slice(1,5),lowercase(),reverse,split
// let string = 'ami jabo na'
// console.log(string.split(" ") .reverse())

// practice 8
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// for( let i=colors.length-1;i>=0;i--){
//     console.log(colors[i])
// }
// practice 9
// const numbers = [12, 98, 5, 41, 23, 78, 46];
// for(let num of numbers){
//     if(num % 2 ==0){
//         console.log(num)
//     }
// }
// practice 10

// let result="";
// let numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// for( let num of numbers){
//     result = result+num
// }
// console.log(result)

// practice 11
//  const statement = 'I am a hard working person'
//  console.log(statement.split(" ").reverse().join(" "))
 

//  Convert the string into an array using .split('')
//  Reverse the array using .reverse()
//  Convert it back to a string using .join('')

// practice 12
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };
// console.log(colors["golden rod"])

// practice 13

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// car['passenger capacity'] = 5;
// console.log(car)

// practice 14

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student["physics"]['marks'])

// practice 15

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };
// console.log(Object.keys(student).length)

// practice 16

// let myObject = {

//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
//     };
    
// for(let key in myObject){
//     console.log("key:",key,"| type:" ,typeof myObject[key])
// }

// practice 17

// function displaya(str){
//     let count=0 ;
//       for(let letter of str){
//         if(letter == 'a'){
//           count=count+1
//         }
//     }
//     console.log(count)
//     }

// displaya("weraaalaalaalalalaaaaaaaaaaaa")
   
// practice 18

// function displaya(str){
//     let count=0 ;
//       for(let letter of str){
//         if(letter == 'a' || letter == 'A' ){
//           count=count+1
//         }
//     }
//     console.log(count)
//     }

// displaya("werAaaaaAAabbbbbAAAAAbaaa")
   
// practice 19

// function hasAllVowel(str){
//        str = str.toLowerCase();
//     let vowel = "aeiou"
    
//    for(let letter of vowel){
//       if(!str.includes(letter)){
//           console.log("not contain")
//          return
//  } 
// }
//   console.log("contain")
// }

// hasAllVowel("werAaaaaAAabbbbbAAAAAbaaeiu")


// practice 20

let str = "banana  jubbaq"
console.log(str.split(" ").join(""))

// practice 21

// function mulfour(a,b,c,d){
//     return mul=a*b*c*d
// }
// console.log(mulfour(1,30,6,2))

// practice 22
// function find(num){
//     if(num % 2 == 1){
//         return num*2
//     }
//     else{
//         return num/2
//     }
// }
// console.log(find(21))

// practice 23

// function make_avg(ary) {
//      let sum =0 
//       for(let num of ary){
//         sum =sum + num
//       }
//        return  sum / ary.length
// }
// let array = [1,2,3,4]
// let avarege = make_avg( array)
// console.log(avarege)

// practice 24

// function count_zero(ary){
//          let count = 0
//          for(let num of ary){
//             if(num == 0){
//                 count = count +1
//             }
//          }
//          return count
// }
// let binary = [0,1,1,1,1,0,0,1,0,0,1]
// console.log(count_zero(binary))

// practice 25
// function odd_even( num){
//     if(num % 2 == 0){
//         return console.log("odd")
//     }
//     else{
//         return console.log("even")
//     }
// }
// odd_even(4)
// odd_even(9)

// practice 26
//  function convertFahrenheit(c){
//     return ((c*9)/5)+32
//  }
// console.log(convertFahrenheit(100))

// practice 26

// function countNum(arry,num){
//     let count =0
//     for(let i of arry ){
//         if(i == num){
//             count = count+1
//         }
//     }
//       return count
// }

// numbers = [5,6,11,12,98, 5]
// console.log(countNum(numbers,25))

// practice 27

// function longestWord(sentence) {
//     let words = sentence.split(" "); 
//     let longest = ""; 

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
    
//     return longest;
// }

// let sentence = "I am learning Programming to become a programmer";
// console.log(longestWord(sentence)); 

// practice 28
// function random(){
//     return Math.floor(Math.random() *11) +10 //fractional number jano na ase tai floor use
// }
// console.log(random())

