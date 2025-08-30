// const sum =(a,b) => a+b

// const s = sum(2,9)
// console.log(s)

// spred operator
// let arr = [10,20,30,443,209]
// let arr1 = [10,20,...arr]
// let arr3 = [ ...arr,...arr1]
// console.log(arr1)
// console.log(arr3)

// ````````````````````````````object distructuring````````````````````````````


const model = {
    phn : "i",
    series : "13 pro max",
    price : 120000
}
console.log(model.series)

const {phn,series} = {
    phn : "sumsang",
    series : "galaxy s 25",
    price : 150000
}
console.log(phn,series)

