let button=document.querySelector("button");
let div=document.querySelector("div");
let h2=document.querySelector("h2");

button.addEventListener("click",function(){
    let rgbValue=genRandomColor();
    // let div=document.querySelector("div");
    div.style.backgroundColor=rgbValue;

    // let h2=document.querySelector("h2");
    h2.innerText=rgbValue;
    h2.style.color=rgbValue;
})



function genRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let rgb=`rgb(${red},${green},${blue})`;

    return rgb
}

let reset=document.querySelector("#reset");
reset.addEventListener("click",function(){
    div.style.backgroundColor="white";
    h2.style.color="black";
    h2.innerText="Generate A Random Color";


})