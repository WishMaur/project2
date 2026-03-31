//DOM EVENTs ->
//Events are signals that something has occurred(User inputs/ actions)

//onclick
// when elemnt is clicked
/* Only one event at a time & New assignment overwrites old one
button.onclick = () => console.log("First");
button.onclick = () => console.log("Second"); // overwrites

// Output: "Second"
*/

let button=document.querySelector("button");
console.dir(button);

// button.onclick=function(){
//     console.log("Button are clicked");
// }

function clicked(){
    console.log("Button are clicked");
}

button.onclick=clicked;



//onmouseenter
//When mouse enters an element
button.onmouseenter=function(){
    console.log("You enter on button");
}



//addEventListener (Event Listener)
//element.addEventListener(event,callback)
/*Multiple events allowed & No overwrite
button.addEventListener("click", () => console.log("First"));
button.addEventListener("click", () => console.log("Second"));

// Output:
// First
// Second

*/
let btn=document.querySelector(".btn");

btn.addEventListener("click",clicked);



//this In Event Listeners
//When 'this' is used in a callback of event of event hundler of something, it refers to that something

button.addEventListener("click",function () {
    this.style.backgroundColor = "red"; 
});
button.addEventListener("click",function(event){
    console.log(event); //PointerEvent, type:"click" ,pointerType:"mouse"

})



//KEYBOARD EVENTS
//keydown-> When the key is first pressed, the keydown event is sent.
//keypress-> If the key is not a modifier key, the keypress event is sent.
//keyup-> When the user releases the key, the keyup event is sent.

let input=document.querySelector("input");
input.addEventListener("keydown",function(event){
    console.log(event); //KeyboardEvent type:"keydown" ex-> if i press key a then key:"a" ,code:"KeyA" ,keyCode:65

})


input.addEventListener("keydown",function(){
    console.log("Key was pressed");
})



//Form Events
//event.preventDefault();
//In Form Case -> By default When you submit a form → page reloads, Data is sent to server
//But when you use:-> event.preventDefault(); ->It prevents page reload & Keeps you on same page


let form=document.querySelector("form");

// form.addEventListener("submit",function(){
//     console.log("Form Submitted");

// });

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.log("Submitted");
// });



//Extracting Form Data 

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Extracting
    let user=form.querySelector("#user");
    let pass=form.querySelector("#pass");
    // console.log(inp);
    console.dir(user); // shows full input object
    console.log(user.value); // shows entered value
    console.log(`${user.value}, ${pass.value}`);


    console.log("Submitted");

    alert(`Your Username: ${user.value}, Password: ${pass.value}`);
});



//More Event
//input -> Fires every time the value changes instantly (while typing)
user.addEventListener("input", function () {
    console.log("Typing:", this.value);
});


// change ->Fires only when user finishes editing and leaves the input (blur)
user.addEventListener("change", function () {
    console.log("Final Value:", this.value);
});





