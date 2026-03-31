//##this Keyword =>
//-> "this" keyword refers to an object that is executing the current piece of code.


// 1.) Object method
const user = {
    name: "Wish",
    greet: function() {
        console.log(name);// cant access name object/ property
        console.log(this.name); // "John" - this refers to user object
    }
};
user.greet();


// 2.) Constructor function
function Person(name) {
    this.name = name; // this refers to new object being created
}
const person = new Person("Alice");


//#Try & Catch Method
/*The try statement allow you to define a block of code be tested for  while it is being executed.
The catch staement allows you to define a block of code to be excuted , if an error occurs in the try block.
 */
try{
    console.log(a);
}catch{
    console.log("variable not define");
}


// 4. Arrow function (lexical this)
const obj = {
    name: "Bob",
    greet: () => {
        console.log(this.name); 
        // undefined - arrow functions don't have their own this here window are parent
        //but if obj are nomal function then  this (inside greed) obj are parent function
    }
};


//Set TimeOut --> Runs only once after a delay
// setTimeout(function,timeout);
console.log("hi there");

setTimeout(()=>{
    console.log("Wish");
},4000); //1sec -> 1000ms

console.log("Welcome to");


//Set Interval-->Runs repeatedly at fixed intervals
// setTimeout(function,timeout);
// console.log("hi there");

// setInterval(()=>{
//     console.log("Wish");
// },4000); //1sec -> 1000ms

// console.log("Welcome to");



// ### Then How to stop Set Interval
/*Basic Idea
When you start setInterval, it returns an ID.
You use that ID to stop it.*/
let intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Stopped!");
}, 5000);
