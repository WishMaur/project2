// Function Declaration
//It can be declear with parameter/arguments and without arguments
function greet(name) {
    console.log( `Hello, ${name}!`);
}
greet("Wish");

// With return value-> return keyword is used to return some value from the function.
function greet(name) {
    return  `Hello, ${name}!`;
}
console.log(greet("Wish"));

//#SCOPE ?
/*
Scope means where a variable can be accessed in a program.

//#1) Function Scope
Variables declared inside a function can be used only within that function.

//#2.) Block Scope
Variables declared with let and const are limited to the block { } they are defined in. not for var

//#3. Lexical Scope
//A variable defined outside a function can be accessible inside another fuction defined after the variable declaration.
 The opposite is not true.

*/
function outer() {
  let a = 5;

  function inner() {
    console.log(a); // ✅ can access outer variable
  }

  inner();
}



// Function Expression
const add = function(a, b) {
    return a + b;
};
add(2,3);


//## Higher Order Function//Higher Order Function
// A function that does one or 2
//  -> takes ome or multi fuction as argument
//  -> return a function 

function multigreet(func,n){ //Higher Order Function
    for(let i=1;i<=n;i++){
        func();
    }
}

function greets(){ // normal function
    console.log("Hello Wish");
}
multigreet(greets,4);



// // Arrow Function (ES6)
// const multiply = (x, y) => {
//     return x * y;
// };

// // Arrow Function (short syntax)
// const square = x => x * x; //Implicit return

// // Function with default parameters
function introduce(name = "Guest") {
    console.log(`Welcome, ${name}`);
}
introduce("Wish");

// // Function with multiple parameters
// function calculateTotal(price, tax, discount = 0) {
//     return price + tax - discount;
// }


// ## METHODS >> which  function define inside object called method
const calculators={
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}
console.log(calculators.add(2,5));


// Shorthand
const calculator={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    }
}
console.log(calculators.add(2,8));
