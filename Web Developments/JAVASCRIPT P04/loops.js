//LOOPS

//FOR
// for(let i=0; i<=15;i++){
//     if(i%2==0){
//     console.log(i);
//     }
// }

//WHILE
// const fav="lucy";
// let guess=prompt("Guess my favorites movie name: ");

// while(guess!=fav && guess!="quit" ){
//      guess=prompt("Wrong Guess!! Plz try again: ");
// }

// if(guess == fav){
//     console.log("Congrates !!!");
// }



// LOOPS WITH ARRAYS
let arr=["Mango","Banana","Apple","Oarage"];
for(let i=0;i<arr.length;i++){
    console.log(i , arr[i]);
}


// FOR-OF LOOP
for(name of arr){
    console.log(name);
}