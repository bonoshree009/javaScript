/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here

var asset = area / 2 ;
console.log(asset);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here

if(money >= 25000){
    console.log("Laptop")
}
if( 10000 <= money && money < 25000){
    console.log("Cycle")
}
if( money < 10000){
    console.log("Chocolate")
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//write your code here

for( i=1;i<= lastDay;i++){
    if(i%3 == 0){
        console.log(i+" - medicine");
    }
    else{
        console.log(i+" - rest");
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//write your code here
 if(fileName.startsWith("#") || fileName.endsWith(".pdf") || fileName.endsWith(".docx")){
    console.log("Store")
 }
 else{
    console.log("Delete")
 }

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "monu" , roll: 99,department: "eee"  };
//write your code here

console.log(student.name+student.roll+"."+student.department+"@ph.ac.bd");



/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

for(i=1;i<=experience;i++){
     var newslary=(startingSalary +(startingSalary * (5/100)))
     startingSalary=newslary;
}
console.log(newslary.toFixed(2));





