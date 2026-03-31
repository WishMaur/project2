//## ARRAY METHOD 
// 1) .forEach -> Runs a function for each element in the array (no return value)

let arr = [1, 2, 3];

arr.forEach((num) => {
  console.log(num * 2);
});



//2.) .map()-> Creates a new array by modifying each element(return value)

let arr1 = [1, 2, 3];

let result = arr1.map((num) =>{
    return num * 2;
} );

console.log(result);


//3.) .filter()-> Returns a new array with elements that pass a condition

let arr2 = [1, 2, 3, 4];

let result2 = arr2.filter((num )=>{
    return num>2;
});

console.log(result2);


//4.) .some()-> Checks if at least one element satisfies a condition. 
// (return true if some elements of array give true for some function. else return false )

let arr3 = [1, 2, 3];

let result3 = arr3.some((num )=> {
    return num > 2;
});

console.log(result3);

//5.) .every()-> checks if all elements satisfy a condition
//(return true if every elements of array give true for some function. else return false )

let arr4 = [1, 2, 3];

let result4 = arr4.every((num )=> {
    return num > 0;
});

console.log(result4);

//6.) .reduce()-> Reduces array to a single value
// (arr.reduce(reduce fuction with 2 variable for(accumulator,element)))
/*
arr.reduce((accumulator, currentValue) => {
   // logic
}, initialValue);

WHERE..
accumulator (acc) = result store karta hai
currentValue (num) = current element
initialValue = starting value
*/
let arr5 = [1, 2, 3, 4];

let result5 = arr5.reduce((sum, num) => sum + num, 0);

console.log(result5);
/*
Step by step:
acc=0, num=1 → 0+1 = 1
acc=1, num=2 → 1+2 = 3
acc=3, num=3 → 3+3 = 6
acc=6, num=4 → 6+4 = 10
*/


//##Practice 
//1.) Finding Maximum in an array
let nums=[2,9,7,6,5,2,8];

let Maximum=nums.reduce((max,num)=>{
    if(max<num){
        return num;
    }else{
        return max;
    }
});

console.log(Maximum);


//2.)Create a function to find min number in an array
// let nums=[2,9,7,6,5,2,8];

let Min=nums.reduce((min,num)=>{
    if(min>num){
        return num;
    }else{
        return min;
    }
});

console.log(Min);

//3.) Chech if all numbers in our array are multiples of 10 or not 
let num4=[10,24,56,89,90];
let num5=[10,30,20,60,50];

let res=num5.every(nums=> nums%10==0);

console.log(res);


//4.) Real-life (Shopping Cart )
let cart =[
    {price:100},
    {price:200},
    {price:150},
    {price:50}
];

let result6=cart.reduce((res,item)=>res+item.price,0);

console.log(result6);