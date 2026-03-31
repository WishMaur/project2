//DOM (Document object Medel)
// The Dom representsa document with a logical tree.
// It allows us to manipulate/changes webpage content(HTML element).


//Selecting Elements

//1.) getElementById
//Return the element as an object or null(if no found)
let obj=document.getElementById("mainImg");
console.log(obj);

console.log(obj.src);

obj.src="assets/creation_1.png";


let obj1=document.getElementById("abc ");
console.log(obj1);


//2.)getElementByClassName
//Return the elements as an HTML Collection or empty collection( if not found)
let smallImage=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImage.length;i++){
    console.log(smallImage[i]);
}

// for(let i=0;i<smallImage.length;i++){
//     smallImage[i].src="assets/creation_1.png";
// }

let nullImg=document.getElementsByClassName("Img");
console.log(nullImg);

//3.)getElementByTagName
//Return the elements as an HTML Collection or empty collection( if not found)
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('p')[1]);
console.log(document.getElementsByTagName('p')[1].innerText);



//Query Selectors =>
// Allow us to use any CSS selector
//For Select Only one use
console.log(document.querySelector('p')); //Selects first p element
console.log(document.querySelector("#mainImg")); // Select first element with id =#
console.log(document.querySelector('.boxLink')); // Select first element with class=boxLink

//For Select ALl Element
console.log(document.querySelectorAll('p')); // select all p element

console.log(document.querySelectorAll("div a"));



//MANUPLATION USING JS

//Using Properties & Methods

//innerText -> Shows the visible text contained in a node
//textContent->Shows all the full text
//innerHTML  -> shows full markup 

let para=document.querySelector("p");
console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);

// para.innerText="HI! I am <b>Wish! <b>";
// para.innerHTML="HI! I am <b>Wish! <b>";



//Manipulating attributes (getter && setter)

// obj.getAttribute(attr)
// obj.setAttribute(attr,valu) //reset the class value and add then add

let img=document.querySelector("img");
console.log(img);

console.log(img.getAttribute("id"));
img.setAttribute("src", "assets/spiderman_img.png");//reset the class value and add then add
img.setAttribute("class", "image"); //reset the class value and add then add



//Manipulation Style
//style Property
//obj.style --> give -> inline css

let heading=document.querySelector("h1");
console.log(heading.style);

heading.style.color="purple";

heading.style.backgroundColor="yellow";


// change all <a> color to yellow

let a=document.querySelector(".box a");
// a.setAttribute("class","color"); //reset the class value and add then add
a.style.color="yellow";


let links=document.querySelectorAll(".box a");

for(link of links){
    link.style.color="purple";
}



//USING classList
//obj.classList

//classList.add() -> to add new class //add multiple class and not reset class name
//classList.remove()-> to remove class
//classList.contains()-> to check if class exits
//classList.toggle()-> to toggle between add & remove (means If any classname Exits then remove if not exits then add)


console.log(heading.classList);

heading.classList.add("abc");
heading.classList.add("xyz");

console.log(heading.classList);

// let heading2=document.querySelector("h2");
// heading2.classList.add("color");

heading.classList.remove("abc");
console.log(heading.classList);

console.log(heading.classList.contains("abc"));
console.log(heading.classList.contains("xyz"));


heading.classList.toggle("abc");
console.log(heading.classList);

heading.classList.toggle("xyz");
console.log(heading.classList);



//NAVIGATION

//parentElement
//children
//previousElementSibling / nextElementSibling

console.log(heading.parentElement);

let box=document.querySelector(".box");
console.log(box.children);



//ADDING ELEMENTS

// document.createElement("p")

// .appendChild(Element) //
// .append(Element) //adding in last
// .prepend(Element) //adding in first
// .insertAdjacent(Where , Element) // position

let newp=document.createElement("p");
newp.innerText="Hi! I am wishmen";

console.log(newp);

let b=document.querySelector(".box");
b.append(newp);
// let bo=document.querySelector("body");
// bo.append(newp);

let newb=document.createElement("button");
newb.innerText="Click ME..";

console.log(newb);

let b1=document.querySelector(".box");
b1.appendChild(newb);


//REMOVING ELEMENTS
//removeChild(element)
//remove(element)

b1.removeChild(newb);



