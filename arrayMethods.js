//#1 arr.push()
let array = [3,6,9,12,15]
array.push(18,21)
console.log(array)  // Output: [3, 6, 9, 12, 15, 18, 21]

//#2 arr.pop() - simply removes the last item of the array
array.pop();
console.log(array)  // Output: [3, 6, 9, 12, 15, 18]

//#3 unshift
array.unshift(-3,0)
console.log(array)  // Output: [-3, 0, 3, 6, 9, 12, 15, 18]

//#4 shift - simply removes the first item of the array
array.shift()
console.log(array)  // Output: [0, 3, 6, 9, 12, 15, 18]

//#5 splice
let arr = [4,3,2,1]
arr.splice(2,1,3.1)
console.log(arr)  // Output: [4, 3, 3.1, 1] - first item after index 2 removed

//#6 slice
let slicedArr = arr.slice(2)
console.log(slicedArr)  // Output: [3.1, 1]
let slicedArr2 = arr.slice(1,3)
console.log(slicedArr2)  // Output: [3, 3.1] - first item removed from array, and the item at index 3

//#7 concat
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let combinedArr = arr1.concat(arr2, arr3);
console.log(combinedArr);  // Output: [1, 2, 3, 4, 5, 6]

let combinedArr2 = arr1.concat(4, 5);
console.log(combinedArr2);  // Output: [1, 2, 4, 5]

//#8 forEach
let arrA = [1, 2, 3, 4];
arrA.forEach(function(element) {
    console.log(element * 2);  
}); // Output: 2
            // 4
            // 6
            // 8

//#9 indexOf
let arrB = [1, 3, 7, 4, 3];
console.log(arrB.indexOf(3));        // Output: 1 (first occurrence of 3)
console.log(arrB.indexOf(5));        // Output: -1 (5 is not in the array)
console.log(arrB.indexOf(3, 2));     // Output: 4 (starts search from index 2)

//#10 lastIndexOf
console.log(arrB.lastIndexOf(3));  //Output: 4 (last occurrence of 3)
console.log(arrB.lastIndexOf(5));  //Output: -1
console.log(arrB.lastIndexOf(3,2));  //Output: 1 (starts search from index 2, going backward)

//#11 includes
console.log(arrB.includes(7))  //Ouput: true (7 is found in array)
console.log(arrB.includes(1, 3))  //Output: false (1 is not found in array after index 3)

//#12 find
let arrC = [5, 12, 8, 130, 44, 7];
let found = arrC.find(element => element > 10);
console.log(found);  // Output: 12 (first element greater than 10)
let found1 = arrC.find(element => element < 5);
console.log(found1);  // Output: undefined

//#13 findIndex 
let foundIndex = arrC.findIndex(element => element > 10);
console.log(foundIndex);  // Output: 1 (index of first element that is greater than 10)
let foundIndex1 = arrC.findIndex(element => element < 5);
console.log(foundIndex1);  // Output: -1

//#14 findLastIndex
let lastFoundIndex = arrC.findLastIndex(element => element > 10);
console.log(lastFoundIndex);  // Output: 4 (index of the last element from the array that is greater than 10 i.e., 44)

//#15 filter
let numberArr = [1, 2, 3, 4, 5, 6];
let evenArr = numberArr.filter(num => num % 2 === 0);
console.log(evenArr);  // Output: [2, 4, 6]

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 19 }
];
let adults = users.filter(user => user.age >= 18);
console.log(adults);  // Output: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 19 }]

//#16 map
let multipleThreeArr = numberArr.map(num => num*3);
console.log(multipleThreeArr);

let mapUsers = [
    {firstname: "Paul", "lastname": "Desmond"},
    {firstname: "John", "lastname": "Coltrane"},
    {firstname: "Sonny", lastname: "Stitt"}
];
let fullName = mapUsers.map(mapUsers => mapUsers.firstname + " " + mapUsers.lastname)
console.log(fullName);

//*using index*
let mapResult = numberArr.map((num, index) => num*index);
console.log(mapResult);

//#17 sort
let numbers = [4, 2, 9, 1, 5, 3];
numbers.sort((a, b) => a-b);
console.log(numbers);  // Output: [1, 2, 3, 4, 5, 9]

let usersSort = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
  ];
  usersSort.sort((a, b) => b.age - a.age);
  console.log(usersSort);  // Output: [{ name: 'Charlie', age: 35 }, { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }]
  
let words = ['bat', 'ant', 'cat', 'dot'];
words.sort();
console.log(words);  // Output: ['ant', 'bat', 'cat', 'dot']

//*to sort strings in an insensitive manner*
let words2 = ['Banana', 'apple', 'Cherry', 'date'];
words2.sort((a, b) => a.localeCompare(b));
console.log(words2);  // Output: ['apple', 'Banana', 'Cherry', 'date']

//#18 reverse
let numbers1 = [4, 2, 9, 1, 5, 3];
numbers1.reverse();
console.log(numbers1)  // Output: [3, 5, 1, 9, 2, 4]

words.reverse();
console.log(words);  // Output: ["dot", "cat", "bat", "ant"]

//#19 split
let text = "apple,banana,cherry,grape";
let fruits = text.split(",", 3);
console.log(fruits);  // Output: ['apple', 'banana', 'cherry']

let sentence = "This is a test";
let wordsSplit = sentence.split(" ");
console.log(wordsSplit);  // Output: ['This', 'is', 'a', 'test']

//#20 join
let fruitsJoin = ['apple', 'banana', 'cherry'];
let string1 = fruitsJoin.join("");
console.log(string1);  // Output: "applebananacherry"
let string2 = fruitsJoin.join("-")
console.log(string2);  // Output: "apple-banana-cherry"

//#21 reduce
let numberReduce = [1, 2, 3, 4, 5];
let sum = numberReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 - initial value
console.log(sum);  // Output: 15

//*to find the largest number from the array
let maxNumber = [1, 3, 7, 2, 5];
let max = maxNumber.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);
console.log(max);  // Output: 7

//*to join the array elements into one
let arrayReduce = [[1, 2], [3, 4], [5, 6]];
let flattened = arrayReduce.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened);  // Output: [1, 2, 3, 4, 5, 6]

//*to count the occurrence of elements
let fruitReduce = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
let count = fruitReduce.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(count);  // Output: { apple: 2, banana: 3, orange: 1 }







