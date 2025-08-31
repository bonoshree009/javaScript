// const sum =(a,b) => a+b

// const s = sum(2,9)
// console.log(s)


// Normal function
// function greet1() { return "Hello"; }

// // Arrow function
// const greet = () => "Hello";
// console.log(greet())

// spred operator
// let arr = [10,20,30,443,209]
// let arr1 = [10,20,...arr]
// let arr3 = [ ...arr,...arr1]
// console.log(arr1)
// console.log(arr3)

// ````````````````````````````object distructuring````````````````````````````


// const model = {
//     phn : "i",
//     series : "13 pro max",
//     price : 120000
// }
// console.log(model.series)

// const {phn,series} = {
//     phn : "sumsang",
//     series : "galaxy s 25",
//     price : 150000
// }
// console.log(phn,series)



// ```````````````````````````````````object keys ,valus,delete,modify,freeze,seal```````````````````````````````````

// const model = {
//     phn : "i",
//     series : "13 pro max",
//     price : 120000
// }
// const keys = Object.keys(model) //sob key dekhabe
// //console.log(keys)
// const values = Object.values(model)
// //console.log(values) //sob valus show hobe
// delete model.phn
// model.year= 3030
// console.log(model)
// Object.freeze(model) //kono modity delete hobe na
// Object.seal(model) // shudu modity hobe

// ````````````````````optional chain`````````````````````````````````````
// const model = {
//     phn : {
//          "type1":"android" ,
//        "type2 ": "os"

//           },
//     series : "13 pro max",
//     price : 120000
// }
// console.log(model.phn?)


// console.log(NaN==NaN)
  

// console.log(NaN===NaN)
console.log( []== "")
console.log( []=== "")
console.log( {}=={})
console.log()