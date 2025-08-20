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

// let q = document.querySelectorAll("#no h1, h3")
//console.log(q)

// for(let all of q){
//     all.innerText ="nananana"
//     // console.log(all.innerText)
//     console.log(all)
// }
let s = document.getElementById("one")
s.style.backgroundColor ="orange"
s.style.color = "white"
s.style.padding = "20px"
s.classList.add("font")
//console.log(s)

console.log(document.getElementById("one").childNodes[5].childNodes[1].parentNode)
 let addlist = document.getElementById("add")
let newchild = document.createElement("li")
newchild.innerText = "hey i am new "
console.log(newchild.innerText)
addlist.appendChild(newchild)


//another way

let secondsec = document.getElementById("two")
console.log(secondsec.innerText)
secondsec.inneerHTML = ` <li> kaka babu </li>
            <li> prof. shonku </li>
            <li> shongkor </li>
            <li> kiriti </li>
            <li> mitin masi </li>
`
// two.appendChild(secondsec)