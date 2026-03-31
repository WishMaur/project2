// Qs1.Write a JS programto find the no of digits in a number.
// Example:if number=287152,count=6

// let number=287152;
// let count=0;
// let copy=number;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);


// Qs2.Write a JS program to find the sum of digits in a number.
// Example:if number=287152,sum=25

// let number=287152;
// let sum=0;
// let copy=number;
// while(copy>0){
//     let digit=copy%10;
//     sum+=digit;
//     copy=Math.floor(copy/10);
// }
// console.log(sum);


// Qs3.Print the factorial of a numbern.
// [Factorial of a number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer.]
// Example:7!(factorialof7)=1x2x3x4x5x6x7=5040  5!(factorialof5)=1x2x3x4x5=120  3!(factorialof3)=1x2x3=60! Is always 1

let n=5 ;
let fact=1;
while(n>=1){
    fact*=n;
    n--;
}
console.log(`Factorial Of Is ${fact}`);


// Qs4.Find the largest number in an array with only positive numbers.
let arr=[2,4,9,6,4,1];
let larg=0;
for(let i=1;i<arr.length;i++){
    let curr=arr[i];
    if(larg<curr){
      larg=curr;
    }
}
console.log(`Largest Element In Array ${larg}`);