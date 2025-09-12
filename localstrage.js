const addnum =()=>{
    const num = Math.ceil(Math.random()*100)
    console.log(num)
    localStorage.setItem('number',num)

}
const person =()=>{
    const stu = {name : "euuu", age : 40, education : "12 fail" }
    console.log(stu)
     //localStorage.setItem('person',stu)
     objstu = JSON.stringify(stu)
     localStorage.setItem('student',objstu)

}