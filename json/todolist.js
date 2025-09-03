const url ="https://jsonplaceholder.typicode.com/todos"
//console.log(url)
const loaddata =()=>{
fetch(url).then(res =>res.json())
.then(data =>displaydata(data))
}
const displaydata =(posts)=>{
    posts.forEach(post => {
       // console.log(post)
        let grid = document.getElementById("container")
       // console.log(grid)
        const div = document.createElement("div")
        div.innerHTML =`<div class="rounded-2xl m-5 h-20 border-red-100 shadow-xl text-justify p-6 text-xl text-amber-500"> 
          <h1>${post.completed} <i class="fa-solid fa-square-check"></i> <i class="fa-regular fa-square-check"></i> ${post.title}</h1></div>`
      grid.appendChild(div)
        
    });

}


// completed
// : 
// false
// id
// : 
// 1
// title
// : 
// "delectus aut autem"
// userId
// : 
// 1