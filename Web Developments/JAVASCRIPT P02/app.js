console.log("hello Js");
let a = 7;
let b = 13;

// console.log("Sum of Two No is ", (a+b));

// Template Literals
console.log(`Sum od two no. ${a + b}`);



// Conditional Statements
let age = 14;
if (age >= 18) {
    console.log("You Can Vote");
}
if (age < 18) {
    console.log("You Cannot Vote");
}

//Practice Question
//Traffic Light System

// IF STATEMENT 
let color = "red";
if (color === "red") {
    console.log("Stop!");
}
if (color === "yellow") {
    console.log("Slow Down");
}
if (color === "green") {
    console.log("Go");
}

//ELSE IF STATEMENT 

if (color === "red") {
    console.log("Stop!");
}
else if (color === "yellow") {
    console.log("Slow Down");
}
else if (color === "green") {
    console.log("Go");
}

//ELSE STATEMENT 

if (color === "red") {
    console.log("Stop!");
}
else if (color === "yellow") {
    console.log("Slow Down");
}
else {
    console.log("Go");
}

// NESTING

// SWITCH STATEMENT


//ALERTS & PROMPTS
// alert("Something is wrong")
// console.error("This is an error msg");
// console.warn("This is an warn msg");

// let name = prompt("Enter your name")
// console.log(name);


// Assignment Question
// Qs2.Take the user name & age as input using prompts.
// Then return back the following statement to the user as an alert
//  (by substituting their name & age): ${name} is ${age} years old.

// let name1=prompt("Enter Your name");
// let age1=prompt("Enter Your age");
// alert(` ${name1} is ${age1} years old`);


// Qs4. A string is a golden string 
// if it starts with the character ‘A’ or ‘a’ and 
// has a total length greater than 5. For a given string, print if it is golden or not.
let str1="Apples";
if((str1[0]==='A' || str1[0]==='a') && str1.length>5){
    console.log("Golden string");
}