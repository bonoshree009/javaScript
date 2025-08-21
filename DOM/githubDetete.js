// console.log('connected')
document.getElementById("b").addEventListener('mouseenter',function(){
   console.log("hi")

 })
document.getElementById("intext").addEventListener('keyup',function(){
    //console.log('clicked')
    let btndelete = document.getElementById("btn")
    let text = document. getElementById("intext").value
    //console.log(text)
    if(text == 'delete'){
        console.log("typeing")
        btndelete.removeAttribute("disabled")
        document.getElementById("btn").addEventListener('click',function(){
            console.log("programe done")
     } )
        
    }
    else{
        console.log("somethings else")
        btndelete.setAttribute("disabled",true)
    }
    
})

