// let arr = [100 ,12 ,35 , 140, 95];
// let reversed = [];

// for(let i=0 ; i<arr.length ;i++){
   
//     reversed.unshift(arr[i]);
// }
// console.log(reversed)
// arr.sort();
// console.log(arr.sort()); //string akar sort kore

// console.log(arr.sort((a,b) => a-b)) //number akare sort kore

// let employee = [                    //array of object
//            {name:"akib",  salary : 10000, designation : "manager"},
//            {name:"fakib", salary : 30000, designation : "hr"},
//            {name:"sakib", salary : 50000, designation : "it"},
//            {name:"jakib", salary : 220000,designation : "developer"}
// ]
// console.log(employee[1].name)

//  for(let emp of employee){
//     console.log(emp.name)
//  }

//  let marks =[
//      [20,30,40,50,40,30],
//      [40,30,50,30,0,40],
//      [20,50,40,10,10,50],
//      [10,30,40,50,50,10]
//  ]

//  console.log(marks[1][4])
//  marks[1].pop();
//  marks[1].push(22);
//  console.log(marks)

//how to copy an array:

// let arr1 = [2,3,4,5,6];
// let arr2 = arr1 ;
// console.log(arr1);
// console.log(arr2);
// arr1 [2] =100;
// console.log(arr1); //duita array change hoa jasse 
// console.log(arr2);

 //type one

// let marks =[10,50,30,10,40]
// let arr =[]
// for(elements of marks){
//     arr.push(elements)
// }
// marks[0]= 22
// console.log(marks)
// console.log(arr)

//type two
// let marks = [10,50,30,10,40]
//  let new_arr = Array.from(marks)
//  new_arr.push(7)
//  console.log(new_arr)

//type three
// let marks = [10,50,30,10,40]
//  let new_arr = [].concat(marks)
//  new_arr.push(7)
//  console.log(new_arr)

//type four
// let marks = [10,50,30,10,40]
// let new_arr = [...marks]   //spred operator
// new_arr.push(9)
// console.log(new_arr)


// duplicate array

// let arr = [1 ,5 ,3 ,1,6,7,3,10,5,2,6,10]
// let noduplicate = []
// for( let Element of arr){
//     if(!noduplicate.includes(Element)){
//        noduplicate.push(Element)
//     }
// }
// console.log(noduplicate)

// math fuction

// let min = Math.min(1,3,5,6,777,4,3,2,0,8,6,)
// console.log(min)

// let max = Math.max(1,3,5,6,777,4,3,2,0,8,6,)
// console.log(max)

// console.log(Math.PI)
// console.log(Math.round(3.6))
// console.log(Math.abs(-30))
// console.log(Math.floor(2.009))
// console.log(Math.ceil(2.009))
// console.log(Math.random())

//dates

// let today = new Date('2002-07-25')
// //console.log(today)
// console.log(today.getMonth());
// console.log(today.getFullYear())
// today.setDate(5)
// console.log(today)


// temp
//  let a = 5
//  let b = 10
//  console.log(a,b)
//  let temp = a
//  a = b 
//  b = temp
//  console.log(a,b)

// IIFE function  alada kore call korte hoi na   (Immediately Invoked Function Expression)

// ;(function (){
//       console.log("hello world")
// })()

// rest perameter  amra jokhon jani na user koita input dibe tokhon use kora hoi
function add(...numbers){
      sum = 0;
      for(let num of numbers){
            sum += num
      }
      console.log(sum)
}
 add(10,34,99)
 add(2,6)


