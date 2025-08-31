//````````````````````````````````a function in side a function````````````````````````````````
function increment(){
     let count =10
    return function(name){
        count +=1
        console.log(name,count)
    }
}

let karim =increment()
karim("karim")
karim("karim")
karim("karim")
karim("karim")
karim("karim")
let rahim = increment ()
 rahim("rahim")

 karim("karim")
 karim("karim")
 karim("karim")
 