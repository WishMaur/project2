//Practice Qs
/*
Add the following Element to the container using js and dom methods

1)a <p> with red text that say " Hey i am Wish"
2) an <h3> with blue text say " hey i am big Wish"
3)a <div> with a black border and pink background color with following Elements inside of iT:
    another <h1> that say "hey ! i am div" 
    <p> that say "Me too" */

let para=document.createElement("p");
para.innerText="Hey i am Wish";

document.querySelector("body").append(para);

para.classList.add("red");



let heading3=document.createElement("h3");
heading3.innerText="Hey I am big Wish";

document.querySelector("body").append(heading3);

heading3.classList.add("blue");



let d=document.createElement("div");
let dh1=document.createElement("h1");
let dp=document.createElement("p");

dh1.innerText="hey ! i am div";
dp.innerText="Me too";

d.appendChild(dh1);
d.appendChild(dp);

d.classList.add("bb");
d.classList.add("bcolor");

document.querySelector("body").append(d);



// Qs1: Create a new input and button element on the page using JavaScript only.
// Set the text of button to "Click me";
let input=document.createElement("input");
let button=document.createElement("button");

button.innerText="Click Me ..";

document.querySelector("body").append(input);
document.querySelector("body").append(button);


// Qs2: Add following attributes to the elements:
// - Change placeholder value of input to "username"
// - Change the id of button to "btn";
// input.placeholder="username";
// button.id="btn";
input.setAttribute("placeholder","Username");
button.setAttribute("id","btn");



// Qs3: Access the button using querySelector and button id.
// Change the button background color to blue and text color to white.
let btn=document.querySelector("#btn");
btn.classList.add("bg");
btn.classList.add("white");


// Qs4: Create an h1 element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice<u>";
h1.classList="cpurple"

document.querySelector("body").prepend(h1);


// Qs5: Create a p tag on the page and set its text to "My name is Wish",
// where "Wish" is bold.
let p=document.createElement("p");
p.innerHTML="My name is <b>Wish</b>";

document.querySelector("body").append(p);

