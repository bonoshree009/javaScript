// console.log("hello world");
// console.log("mood on");
// age=23;
// console.log(age)
// let fullname="bono";
// console.log(fullname)

// student["age"]=student["age"]+2
// console.log(student["age"]);
//  const profile ={
//     username:"adity",
//     followers:300,
//     following:4,
//     isfollow:true,
//  };
//  for(let key in profile){
//     console.log(key);
//     console.log(profile[key]);
//  }
//  let a=20;
//  let b=25;
//  let d="20";
//  let c=a+b;
//  console.log("a+b=",c);
// //  console.log("assignment=",a+=2);
//  console.log("a==d",a==d);
//  console.log("a==d",a===d);
//  console.log("post increment",b++);
//  console.log("post increment",b);
//  console.log("pre incriment=",++b);


// let color;
// let mode="black"
// if (mode==="black"){
//     color="black";
//     console.log("black is everywhere",color);
// }
// else if (mode==="pink"){
//     color="pink";
//     console.log("inki pinki pogki",color);
// }
// else{
//     color="white"
//     console.log("dont like light",color);
// }
// let number= prompt("enter a number")
// if(number%5===0){
//     console.log("multiply by 5");
// }
// else{
//     console.log("not");
// }
// for(let i=0;i<=100;i++){
//     if (i%2===0){
//         console.log("i=",i);
//     }
// }
//  let str="javascript";
//  let size=0;
//  for(let i of str){
//     console.log(i);
//     size++;
//  }
//  console.log(size);
  
// let str1=prompt("enter your fullName");
// let str2=str1.length;
//  let output=`@${str1}${str2}`;
// console.log(str1);
 
// let marks=[85,97,44,37,76,60];
// let total=0;
// for(let i=0;i<marks.length;i++){
//    total+=marks[i];
// }
// let avg=total/marks.length;
// console.log("avarage student marks is ",avg);

//  let fooditems=["chocolate","chips","tomato","fish"];
//  fooditems.push("drinks");
 
//  console.log(fooditems.toString());
 
//  let companies =["bloomberg","microsoft","ubar","google","IBM","netflex"];
// //  console.log(companies.shift());
// //  console.log(companies);
// companies.splice(2,1,"ola");
// companies.push("amazon");
 
 
// function vow(keyword){
//    let num=0;

//  for(let i of keyword){
//    if(i==="a" ||i==="e"||i==="i"||i==="o"||i==="u"){
//          num++;
//    }
//  }
// return num;
//  }
//  let ch=vow("jioytewsftymno")
//  console.log(ch)
// //ARROW FUNCTIONS
//  const countvow =(keyword) => {
//    if(i==="a" ||i==="e"||i==="i"||i==="o"||i==="u"){
//       num++;
// }
// return num;
//  }

 
//  let num=[1,2,3,4,5,6,7,8];
//  num.forEach((val) =>{
//    console.log(val*val)
//  }
// )
// let nums=[51,82,93,54,95,96,37,98];
// let output=nums.filter((val) => {
//   return val>90 ;
// })

// console.log(output);
// let n=prompt("enter your number");
// let arr = [];
// for (let i=1; i<=n; i++){
//   arr[i-1]=i;
// }
// console.log(arr);
//  let sum= arr.reduce((res,curr) =>{
//    return res+curr;
//  })
// console.log(sum);
// let product= arr.reduce((res,curr) =>{
//   return res*curr;
// })
// console.log(product);
// console.dir(document.body.childNodes[1])
// let pink = document.getElementById("row");
// console.dir(ids);
// console.log(pink);
// let h2= document.querySelector("h2");
// console.log(h2.innerText);
// h2.innerText=h2.innerText+"  apna clg";
// let div =document.querySelectorAll(".box");
// console.log(div);
// let a=document.querySelector("h1");
// console.dir(a.innerText);
// a.innerText = a.innerText + " from vu" ;
// let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// divs[0].innerText="div one";
// divs[1].innerText="div two";
// divs[2].innerText="div three";
// let idx=1;
// for (i of divs){
//     i.innerText=`div number ${idx}`;
//     idx++
// }
// tofixed,parseint parseFloate

// let userInput = prompt("Enter your name:");
// console.log("User entered:", userInput);


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
// console.log(string.split(" ") .reverse().join(" "))

// let numbers = [2,3,4,6,7,8,9,7,6,5,3]

// //let asc = numbers.sort(function(a,b) {return a-b}) //change original array
// let asc = [...numbers].sort(function(a,b) {return a-b}) //not change original array
// //console.log(asc)
// console.log(numbers)

// const min = Math.min(1,2,4,5,44,3,5,777,4)
// console.log(min)
// console.log(Math.PI)
// console.log(Math.abs(6-19))
// console.log(Math.random() *4)
// const rand = round(Math.random()*10)
// const tody = new Date();
// // unix epoc
// part 1

