console.log("hello from outside")
//console.log(document)
let values = document.getElementsByTagName("li")
console.log(values)

// for(let value of values){
//     console.log(value.innerText)
// }

// console.log(document.getElementById("ok").innerText)

// let clas = document.getElementsByClassName("yes")
// console.log(clas)

// for(let v of clas){
//     console.log(v.innerText)
// }

let q = document.querySelectorAll("#no h1, h3")
console.log(q)

// for(let all of q){
//     all.innerText ="nananana"
//     // console.log(all.innerText)
//     console.log(all)
// }
let s = document.getElementById("one")
s.style.backgroundColor ="red"
s.classList.add("font")
console.log(s)
