//OBJECTS

//defining objects
const obj1 = {
    name: "John Coltrane",
    age: 22,
    education: "Undergrad"
}

const obj2 = {
    name: {
        first: "Dan",
        last: "Abramov"
    },
    grades: [2,3,5,3],
    department: "Stanfod University"
}

console.log(obj1.name)

//adding other properties to an object
obj1.address = "Helsinki"
Object.assign(obj1, {major: "Computer Science"})
console.log(obj1)

//to return all keys of object
console.log(Object.keys(obj1))
//to return all values of object
console.log(Object.values(obj1))
//to return all key-value pairs of object
console.log(Object.entries(obj1))

//SPREAD OPERATOR

//1: cloning arrays
let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2);

//2: merging arrays
let arr3 = [4,5,6];
let mergedArr = [...arr2, ...arr3];
console.log(mergedArr);

//3: passing array elements as function arguments
function add(x,y,z) {
    return x+y+z;
}
console.log(add(...arr1));

//4: expanding string characters into array
let word = "Hello";
let letters = [...word];
console.log(letters);

//REST OPERATOR

//1: function parameters (gathers arguments)
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc+curr, 0)
}
console.log(sum(1,2,3,4));

//2: destructing arrays
let [first, ...rest] = [10,20,30,40];
console.log(first);
console.log(rest);

//3: destructing objects
let {a, ...others} = {a:7, b:8, c:9};
console.log(a);
console.log(others);

//PASS BY VALUE
function passByValue(x,y) {
    let tmp;
    tmp = y;
    y = x;
    x = tmp;
    console.log(x);
    console.log(y);
}

let x = 5;
let y = 6;

passByValue(x,y);
console.log(x);
console.log(y);

//PASS BY REFERENCE
let person = {name: "Alice"};

function updateName(obj) {
    obj.name = "Harry"
}

updateName(person)
console.log(person.name)

//*reassignment of reference type to another object or array only remains in the function and not outside it
let numbers = [1,2,3]

function reassignArray(arr) {
    arr = [4,5,6];
    console.log(arr);
}

reassignArray(numbers);
console.log(numbers);

//DOT NOTATION AND BRACKET NOTATION
//Dot notation can only be used with property names that are valid identifiers 
//valid identifiers - names that start with letters, _, or $, and contain no spaces or special characters
let obj123 = {name:"aaa", "my info":"student"}
console.log(obj123.name) //here name is a valid identifier with no spaces or special characters

//Bracket notation allows access to property names with any string, including those with spaces or special characters
console.log(obj123["my info"])
let fieldname = "my info"
console.log(obj123[fieldname])

//When using dot notation for fielname, 
//JavaScript looks for a property called "fieldname" (literally) on obj123
//and not the value stored in the fieldname variable (which is "my info")
//Since obj123 has no property called "fieldname", it returns undefined
console.log(obj123.fieldname) // Output: undefined