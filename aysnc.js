 async function  loaddata(){
    console.log("one")
console.log("two")
 await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json).then(() =>console.log("got data"))
console.log("four")
console.log("five")
}

// loaddata()

 const  loaddata2 =   async () =>{
    console.log("one")
console.log("two")
try{
 await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json).then(() =>console.log("got data"))
}
catch(err){
    console.log("error")
}
 console.log("four")
console.log("five")
}
loaddata2()