// //CLASSES
// //faster class declaration and initialization
// let objA = {name:"Tina", age:24}

// //traditional method
// class objB{
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
// }
// let q = new objB("Tina",22)

let obj123 = {
    value: 10,
    fn: () => {
        console.log(this)
        return this.value
    },
    fn1: function() {
        console.log(this)
        return this.value
    }
}

console.log(obj123.fn());
console.log(obj123.fn1());

//var (global scope) - console.log(i) is stored in callback queue
for (var i = 0; i<5; i++) {
    setTimeout(() => {console.log(i)}, 5000);
}

//let (block scope) - console.log(0), console.log(1), console.log(2)..... is stored in callback queue
for (let i = 0; i<5; i++) {
    setTimeout(() => {console.log(i)}, 5000);
}