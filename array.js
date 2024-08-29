// let arr =[2,4,6,8,10,12]
// console.log(arr[5])
// console.log(arr[-1])
// arr[2]=100
// arr[3]=200
// arr[4]=300
// console.log(arr)
// // type of
// console.log(typeof arr)
// // length
// console.log(arr.length) 
// // string
// console.log(arr.toString()) 
// let student_data = ["dua","ramsha","samra"]
// console.log(student_data.pop())
// console.log(student_data)
// console.log(student_data.push( "zeeshan","taha"))
// console.log(student_data)
// console.log(student_data.sort())
// console.log(student_data.includes("ashar"))


// slice or splice
let student_data =["ali","zeeshan","samra","taha"]
console.log(student_data.slice(1,2))
student_data.splice
// unsplice
const months =["jan","march","april","june"];
months.splice(1,0,"feb","october");
console.log(months)

// function
function add_number(){
    console.log("add two number",5+5)
    console.log("add two number")
}
add_number()

function sum (a,b){
    console.log("sum of two number is:", a+b)
}
sum(5,6)
sum(9,6)



// return
function full_name(firstname,secondname){
    return firstname+secondname
}
let result = full_name("ali","khan")
console.log(result)
if(result==="sohaib"){
    console.log("you are selected")
}else{
    console.log("you are not selected")
}
