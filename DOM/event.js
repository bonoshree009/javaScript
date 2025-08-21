let addclass = document.querySelectorAll("button")
for( let b of addclass){
    b.classList.add("btn")
}


function makeblue() {
         document.body.style.backgroundColor = 'blue'
         }
 let green = document.getElementById("makegreen") 
  function makeg(){
    document.body.style.backgroundColor = "green"
  }    
green .onclick =makeg   

document.getElementById("black").addEventListener("click",function
    blk(){
          document.body.style.backgroundColor = "black"
  
    }
)

document.getElementById("new-btn").addEventListener("click",function(){
        //    console.log("im clicked")
        let add = document.getElementById("add-new")
        //  console.log(add)
        add.innerText =' yehh my color is pink'
         document.body.style.backgroundColor = "pink"
})


document.getElementById("cmnt-btn").addEventListener("click",function (){
  // console.log("clicked")
  let input = document.getElementById("input-cmnt")
  // console.log(input.value)
  let newdiv = document.createElement("div")
   let addsec = document.getElementById("sectwo")
  addsec.appendChild(newdiv)
  newdiv.classList.add("cmnt")
  //console.log(document.getElementById("sectwo").childNodes)
  newdiv.innerText =  input.value
  input.value = ""

})





