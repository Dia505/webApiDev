// //FUNCTIONS

// //hoisting and temperal dead zone
// //for function declaration and var, the function will execute before function initialization, is hoisted
// //for let and const, the function wont work without initialization, not hoisted because it lies in temperal deaed zone

// fn1(); // Output: declaration
// //fn2();  // Output: ReferenceError
// //fn3();  // Output: ReferenceError

// //function declaration
// function fn1(){
//     console.log("declaration")
// }

// //function expression
// let fn2 =  function(){
//     console.log("expression")
// }

// //arrow function
// const fn3 = () => {
//     console.log("arrow")
// }

// console.log(myName)
// //temperal dead zone
// //temperal dead zone
// //temperal dead zone
// //temperal dead zone
// //temperal dead zone
// var myName = "Abba"

// //HIGHER ORDER FUNCTION AND CALLBACK
// //higher order function - takes argument as a function
// //myFn(() => {})
// //here myFn() is higher order function and () => {} - is callback function
// //map is a higher order function

// let arr123 = [1,2,3,4]
// arr123.forEach((v,i,a) => {
//     console.log(v,i,a)
// })

// Array.prototype.myNewFn = function(callback) {
//     for(let i = 0; i<this.length; i++) {
//         callback(this[i], i , this)
//     }
// }

// arr123.myNewFn((v,i,a) => {
//     console.log(v,i,a)
// })

console.log(abc);
var abc = 10;