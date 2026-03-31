// Mini Project: TODO List App

// Create a simple Todo List using JavaScript.
// Requirements:

// 1. Add a heading (h1) with title "Todo List"

// 2. Create an input field
// → User will type their task (e.g., "Study JS")

// 3. Create a button (e.g., "Add Task")
// → When user clicks this button:
//    - The text from input should be added as a new list item (<li>)
//    - The list item should appear below the input and button

// 4. Display tasks in a list (ul or ol)

// 5. Each task should have a delete option:
// → Either a delete button or clickable text
// → When user clicks delete:
//    - That specific task should be removed from the list

// 6. After adding a task:
// → Input field should be cleared

// Important Conditions:
// → Do not add empty tasks
// → Each task should be added dynamically using JavaScript
// → Delete should only remove the clicked task (not all)

// Concepts to use:
// → DOM manipulation (createElement, appendChild)
// → Event listeners (click)
// → Input value handling
// → Event delegation (optional but better)

// Goal:
// → Build a dynamic Todo List where user can add and delete tasks interactively

let button=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

button.addEventListener("click",function(){
    let task = input.value.trim(); // remove extra spaces
    if (task === "") {
        alert("Please enter a task!");
        // input.placeholder = "Please enter something!";
        input.style.border = "1px solid red";
        return;
    }
    let li=document.createElement("li");
    li.innerText=task;
    ul.appendChild(li);
    input.value="";


    //For Delete button
    let del=document.createElement("button");
    del.innerText="x";
    del.classList.add("delete");
    li.appendChild(del);
  
})

// for deletion 

// let delb=document.querySelectorAll(".delete");
// for(btn of delb){
//     btn.addEventListener("click",function(){
//         console.log("deleted")

//     });
// }

ul.addEventListener("click",function(event){
    // console.log(event.target);
    // console.dir(event.target);
    console.dir(event.target.tagName);
    if(event.target.tagName=="BUTTON"){
        let parList=event.target.parentElement;
       
        parList.remove();
        console.log("Deleted",parList);
        
    }
    
})
