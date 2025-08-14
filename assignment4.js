// function totalFine( fare ) {
//     if(typeof fare == "string"  || fare <= 0){
//         return "Invalid";
//     }
//     else{
//     let fine = fare + (fare*0.2)+30 ;
//     return fine
//     }   
// }
// // result = totalFine("65")
// // console.log(result)


// function  onlyCharacter( str ) {
//     if(typeof str !== "string"){
//         return "Invalid";
//     }else{
//           str = str.toUpperCase()
//           str = str.split(" ").join("")
//           return str;
//     }
// }

// result = onlyCharacter(true)
// console.log(result);

// function  bestTeam( player1, player2 ) {
//           if(typeof player1 !== "object"  || typeof player2 !== "object"){
//               return "Invalid"
//           }
//          res1 = player1.foul + player1.cardY + player1.cardR
//          res2 = player2.foul + player2.cardY + player2.cardR
//          if(res1 > res2){
//             return player2.name
//          }
//          else if(res1 <res2){
//              return player1.name
//          }
//          else{
//             return "tie"
//          }
// }

// result= bestTeam({ name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
// { name: "Argentina", foul: 7, cardY: 0, cardR: 0 })
// console.log(result)



// function  isSame(arr1 , arr2 ) {
//          if(!Array.isArray(arr1,arr2)){
//             return "Invalid"
//          }
//         if( arr1.length !== arr2.length){
//             return false 
//          }
//             for(let i = 0; i< arr1.length; i++){
//                 if(arr1[i] !== arr2[i]){
//                     return false
//               }
//             }

//             return true 
//          }
    
// result = isSame([34 , 5 ,7 ,9 ], [ 34 , 5 , 7 ])
// console.log(result)




function  resultReport( marks ) {
        let sum = 0
        let Pass = 0;
        let Fail = 0;

         if(!Array.isArray(marks)){
             return "Invalid"
          }
        for(let mark of marks)(
            sum += mark
        )
        let avg = Math.round(sum / marks.length)

        for(let i = 0; i< marks.length; i++){
            if(marks[i] < 40){
                Fail = Fail + 1
            }
        }
            for(let i = 0; i< marks.length; i++){
               if(marks[i] >= 40){
                Pass = Pass + 1
            }
            }

        return {
            finalScore: avg,
            pass: Pass,
            fail:Fail
        } ;
}

result = resultReport([])
console.log(result)