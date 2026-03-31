// Qs1.Square and sum the array elements using the arrow function and then find the average of the array.
let arr=[3,5,7,8,9,2];

let Square=arr.map((num)=>{
    return num*num;
});
let sum=arr.reduce((sum,num)=>sum+num,0);

console.log(Square);
console.log(sum);

let avg=sum/arr.length;
console.log(avg);


// Qs2.Create a new array using the map function whose each element is equal to the original element plus 5.
let newArr=arr.map((num)=>num+5);
console.log(newArr);


// Qs3.Create a new array whose elements are in uppercase of words present in the original array.
let strArr=["Hello", "Wish!", "What", "are", "you" ,"doing", "today ?"];

let upperStrArr=strArr.map((str)=>str.toUpperCase());
console.log(upperStrArr);


// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. 
// The function should return a new array with the original array values and all of the additional arguments doubled.
let doubleAndReturnArgs=(arr,...args)=>{
    return [...arr,...args.map((a)=>a*2)];
};

console.log(doubleAndReturnArgs(arr,2,5,7,7));


// Qs5.Write a function called mergeObjects that accepts two objects and returns a new object 
// which contains all the keys and values of the first object and second object.
let mergeObjects=(obj1, obj2)=>{
    return {...obj1, obj2}
};

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

console.log(mergeObjects(obj1, obj2));
