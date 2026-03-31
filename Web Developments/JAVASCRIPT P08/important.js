// 1.) Spread Operator (...) ->
//Spread operator (...) array ya object ko “expand / tod ke” alag-alag values me convert karta hai

let arr = [1, 2, 3];
console.log(...arr);
let str="Wish";
console.log(...str);


// With Array Literals
// Array/string ko copy ya merge karne ke liye
let arr1 = [1,4,6,2];
let arr2 = [3,4];
let arr3=[...arr1];
let newArr = [...arr1, ...arr2];

console.log(arr3);
console.log(newArr);


// With Object Literals
// Object copy ya merge
let data1 = { 
    name: "Vishal",
    email:"Wish@gmail.com"
 };
let data2 = { 
    name: "Wish",
    email:"Wish096@gmail.com" 
};

let dataCopy = { ...data1};
let mergeData={...data1,data2} // for merge

let addData={...data1,password:"wish123"} //Adding new Properties

console.log(dataCopy);
console.log(addData);


//2.) Rest Operator (...) ->collect in array
//Allow a fuction to take an indedefinite number of argumne and bundle them in an array.

function sum(...numbers) { // (...numbers) -> rest → values collect kare
  return numbers.reduce((acc, num) => acc + num, 0);
}

// console.log(sum(1, 2, 3, 4));
let arry=[1,2,3,4];
console.log(sum(...arry)); //(...arry)-> spread → values tod ke bheje

// Function me (...) = Rest (collect)
// Function call me (...) = Spread (expand)


// 3.) Destructuring ->
//Storing values of array into multiple variables

let arr4 = [10, 20,30,40];

let [a]=arr4;
let [a1, b1] = arr4;

console.log(a);
console.log(a1, b1);


// Array Destructuring with Rest
let [a2, b2,...rest] = arr4;

console.log(a2, b2);
console.log(rest);


// Object Destructuring
let obj = {
  name4: "Vishal",
  age: 20
};

let { name4, age } = obj;

console.log(name4, age);

let {name4:user,city:place="kanpur"}=obj; // adding new Properties but cant change exating properties
console.log(user, place);





