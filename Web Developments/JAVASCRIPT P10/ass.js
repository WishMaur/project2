// Practice Questions

// Q1: Try out the following events in addEventListener on your own:
// - mouseout
// - keypress
// - scroll
// - load
// [Use MDN for help]
let h1=document.querySelector("h3");
h1.addEventListener("mouseout",function(){
    console.log("Mouse are out");
    
})

let inp=document.querySelector("input");
inp.addEventListener("keypress",function(){
    console.log("Keys are pressed..");
    
})


window.addEventListener("scroll", function () {
    console.log("Scrolling...");
    console.log(window.scrollY);
});

let div=document.querySelector("div");
div.addEventListener("scroll", function () {
    console.log(div.scrollTop);
    if (div.scrollTop > 300) {
      div.style.backgroundColor = "lightblue";
    } else {
       div.style.backgroundColor = "white";
    }
});

window.addEventListener("load",function(){
    console.log("Page fully loaded!..");

    let h4=document.createElement("h4");
    h4.innerText="Welcome! Page is ready.";

    let u=document.querySelector("ul");
    u.appendChild(h4);
    
})





// Q2: Create a button on the page using JavaScript.
// Add an event listener to the button that changes the button’s color to green when it is clicked.

// let btn=document.createElement("button");
// document.body.appendChild(btn);

let button=document.querySelector("button");
button.addEventListener("click",function(){
    button.style.color="green";
})


// Q3: Create an input element on the page with a placeholder "enter your name"
// and an H2 heading inside HTML.
// The purpose of this input element is to enter a user’s name,
// so it should only accept letters from a-z, A-Z and space.
// (All other characters should not be detected)
// Whenever the user inputs their name, their input should be dynamically visible inside the heading.
// [Note: No other character apart from allowed characters should be visible in the heading]

// let inp2 = document.createElement("input");
// inp2.placeholder = "enter your name";
// document.body.appendChild(inp2);

inp.placeholder= "Enter your name..";

let h2 = document.createElement("h2");

let ul=document.querySelector("ul");

ul.appendChild(h2);

inp.addEventListener("input",function(){
    let value=inp.value;
    let filter=value.replace(/[^a-zA-Z ]/g, "");
    h2.innerText=filter;
})


// Q4: Create multiple text elements on a webpage.
// When the user moves the mouse over any text:
// The text color should start changing continuously (every 200ms)
// When the mouse leaves that text:
// Stop the color changing
// Reset the color back to black
let para=document.querySelectorAll("p");

function randomColorGen(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);

    let rgb=`rgb(${r},${g},${b})`;
    return rgb;
    
}


para.forEach(function(p){
    let intervalId;

    p.addEventListener("mouseover",function(){
    intervalId=setInterval(()=>{
        p.style.color=randomColorGen();
    },200);
    });

    p.addEventListener("mouseout",function(){
        // clearInterval(intervalId);
        // p.style.color="black";
        setTimeout(()=>{
            clearInterval(intervalId);
            p.style.color="black";

        },400);      
    });   
});



/* 
🧠 Problem Statement

👉 You have multiple text elements (like <p> tags) on a webpage.

👉 When the user moves the mouse over any text:

The text color should start changing continuously at regular intervals.

👉 When the user moves the mouse away:

The color changing should stop.
The text color should return to its original color. */
