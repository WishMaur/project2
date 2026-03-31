//Event Bubbling=>
//Event Bubbling means:
// When an event happens on a child element, it propagates (bubbles) up to its parent elements.

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

// for(l of li){
// l.addEventListener("click", function () {
//     console.log("List Clicked");
// });
// };

// ul.addEventListener("click", function () {
//     console.log("ul Clicked");
// });


// div.addEventListener("click", function () {
//     console.log("Div clicked");
// });



//FLOW => list → ul → div  → body → html → document => This is bubbling ↑


//STOP Bubbling
//Use 
// child.addEventListener("click", function (event) {
//     event.stopPropagation(); // add only on child
//     console.log("Only button");
// });

for(l of li){
l.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("List Clicked");
});
};

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul Clicked");
});


div.addEventListener("click", function () {
    console.log("Div clicked");
});



//Event Delegation
// Event Delegation means: Instead of adding event listeners to multiple child elements,
// add one listener to the parent and handle events using event.target.
// let ul = document.getElementById("list");

ul.addEventListener("click", function (event) {
    console.log("Clicked:", event.target.innerText); //.parentElement-> List
});

//.remove();--> For remove