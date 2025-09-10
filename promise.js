// console.log("hello")
// const getdata = new Promise(( resolved,reject)=>{
//     const num = Math.random()*10
//     console.log("generated num",num)
//     if(num>1){
//         resolved({ num:num})
//     }
//     else {

//         reject({
//             err:"data is not available"
//         })
//     }
// })

// getdata.then(data=> console.log(data)).catch(error=>console.log(error))

// promise All

console.log("hello")
const getdata1 = new Promise(( resolved,reject)=>{
    const num = Math.random()*10
    console.log("generated num",num)
    if(num>1){
        resolved({ num:num})
    }
    else {

        reject({
            err:"data is not available"
        })
    }
})

console.log("hello")
const getdata2 = new Promise(( resolved,reject)=>{
    const num = Math.random()*10
    console.log("generated num",num)
    if(num>1){
        resolved({ num:num})
    }
    else {

        reject({
            err:"data is not available"
        })
    }
})

console.log("hello")
const getdata3 = new Promise(( resolved,reject)=>{
    const num = Math.random()*10
    console.log("generated num",num)
    if(num>1){
        resolved({ num:num})
    }
    else {

        reject({
            err:"data is not available"
        })
    }
})



Promise.all([getdata1,getdata2,getdata3]).then(data=> console.log(data)).catch(error=>console.log(error))
