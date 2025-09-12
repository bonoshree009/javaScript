// console.log("one")
// console.log("two")
//  const setTimeoutid = setTimeout(()=>{
//     console.log(3)
//  })
// console.log("four")
// console.log("five")
//  const setTimeoutid2 = setTimeout(()=>{
//     console.log(3)
//  },6000)

// //   const setinteevalid = setInterval(() => {

// //       console.log(33,intervalid)
// //   },2000)
//    console.log("four")
// console.log("five")

// function greet(msg,delay) {
//    setTimeout(() =>{
//    console.log(msg)
// },delay)
// }
// greet("hello",3000)

function greet(msg){
     count =0
   const intervalid = setInterval(() => {
        console.log(msg,count)
        if(count>10){
      clearInterval(intervalid)
   }
        count ++

   },1000);

}

greet("hello bonoshree! you are a lovely girl i really like your confidence")