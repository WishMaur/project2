// GUessING Game 
// User enter a max number & then tries to guess a random generated number 1 to max. 
/*
let max=prompt("Enter A  Max number: ");

const randoms=Math.floor(Math.random()*max)+1;
console.log(randoms);

let guess=prompt("Guess the number: ");
while(true){
    if(guess=="quit"){
        console.log("User Quit");
        break;
    }
    if(guess==randoms){
        console.log("You are right! Congrats!! ");
        break;       

    }else if(guess<randoms){
        guess=prompt("hints: Your guess  too small ,try again.. ");
    }
    else{
        guess=prompt("hints: Your  was too large ,try again.. ");
    }
}
    */


// #1) Create a program that genrates a random number representing  a dice roll.
const dice=Math.floor(Math.random()*6)+1;
console.log(dice);

//#2) Create an Object representing a car that stores the following properties for the 
// car: name ,model color. //print the car name

const car={
    name:"BMW X7",
    model:" Full-size SUVs",
    color:"black"
}
console.log(car.name);


//#3.)Create an object Person with their name, age and city.
//  Edit their city’s original value to change it to “NewYork”. 
// Add a new property country and set it to the United States. 
const person={
    name:"Wish",
    age:22,
    city:"Kanpur"

}
person.city="NewYork";
person.country="United States"
