// let arr = [22, 24, 65, 88, 12, 99, 101]
// console.log(typeof arr) //js a array ak dhoroner object
// let max;
// for(let i =0; i<=arr.length; i++){
//     if(arr[i+1] > arr[i]){
//         max = arr[i+1]
//     }
    
// }
// console.log(max)

// function num( a,b){
//     console.log(a,b)
//     console.log(arguments) //shudu matro function a vitore pawa jai. sob parameter dekhai ,,array like object
// }

// num(2,3,5,6,8)


// forEach
// let numbers = [1, 2, 3, 4];

// numbers.forEach(function(num) {
//   console.log(num * 2);
// });

// map method
// let nums = [1, 2, 3, 4];


// let doubled = nums.map(function(num) {
//   return num * 2;
// });

// console.log(doubled); // [2, 4, 6, 8]
 //if use condition
let nums = [1, 2, 3, 4];


let doubled = nums.map(function(num) {
  return num % 2 == 0;
});

console.log(doubled); // [false, true, false, true]


// Filter method

let numbers = [1, 2, 3, 4, 5, 6];

let evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evens); // [2, 4, 6]
