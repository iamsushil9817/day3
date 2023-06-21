// const add = (a,b) =>{
//     console.log(a+b);
// }

// add(5,6)

// const a={
//     fname:"sushil",
//     lname:"bhandri",
//     age:21,
//     enroll : () => {
//         console.log("you are successfuly enrolled");
//     },
// };

// a.enroll();
// a.email="sushil123@mail.com"
// console.log(a)
// function createa(age){
//     return {
//         // fname:"sushil",
//         // lname:"bhandri",
//         age: age,
//         enroll : () => {
//             console.log("you are successfuly enrolled");
//         },
//     } 
     
// }

// const a = createa(23);
// a.enroll();
// console.log(a) 

// constructor
function Course(title){
    this.title = title,
    this.Enroll=function(){
        console.log("you are successfuly enrolled");
    }
}

const course =  new Course("java");
course.Enroll()