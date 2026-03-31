// JS Object Literals :- Used to store keyed collection & complex entities.
 //  property => (key,value) pair
//Objects are collection of properties.

const student ={
    name:"Vishal",
    age:19,
    marks:73,
}

//Practice Qus.
//1) Thread/ Twitter Post 
// Create an Object literal foor the properties of threat post includes 
// username 
// Content
// likes
// reposts
// tags
const thread={
    userName:"@Wish096",
    content:"Whats Up #post",
    likes:40,
    reposts:5,
    tags:["@aru","@anmol","@rishi"]
};

//A) Get value / Access Value 
// thread["likes"]; //--->return value
// thread.likes;    //--->Not return value

console.log(thread["likes"]);
console.log(thread.tags);



//NOTES:- Js Automatic covert objects keys to strings.
// Even if we made the number as a key, the number will be converted to String.
const obj={
    1:"a",
    2:"b",
    true:"c"
}
// Where 1 ,2 and true are String , NOt any index 
//obj.1; --->> error 


// B) Add/ Update Value 
// like Change Value 
// add new Property 

thread.reposts=10;//Change Value 

thread.dislike=3; //new Property 



//C) Delete
delete thread.dislike;




//#Object Of Object / Nested Object
const classInfo={
    Wish:{
        branch:"IT",
        city:"Jaunpur"
    },
    Aru:{
        branch:"IT",
        city:"Lucknow"
    },
    Pradeep:{
        branch:"CSE",
        city:"Ballia"
    }
};

// For ACCESS 
classInfo.Wish;
classInfo.Wish.branch;
// Add/ Update Value 
classInfo.Wish="Wish2";



//#Array Of Object
const classInfo2=[
    {
        name:"Wish",
        branch:"IT",
        city:"Jaunpur"
    },
    {
        name:"Aru",
        branch:"IT",
        city:"Lucknow"
    },
    {
        name:"pradeep",
        branch:"CSE",
        city:"Ballia"
    }
];

// For ACCESS 
classInfo[0];
// classInfo[0].branch;




//Inbuild Math Object
Math.PI;
Math.E;

// Methods?

Math.abs(-5); 
//->Returns the absolute value of a number (the value without regard to whether it is positive or negative). 
// For example, the absolute value of -5 is the same as the absolute value of 5.

// Math.pow(a,b);
// Returns the value of a base expression taken to a specified powe

Math.floor(4.8);
//Returns the greatest integer less than or equal to its numeric argument.

Math.ceil(4.8);
//Returns the smallest integer greater than or equal to its numeric argument.

Math.random();
//Returns a pseudorandom number between 0 and 1.




//Practice Qus.
//2) Using Random Math mathod ,Genr Random Integers
// NOte  From 1-9 If you 1-10 then add 1;
//If want to gern 1-100 then multiplie to 100
// If genr 1-1000 then multiplie to 1000
let num=Math.random();
num=num*10;
num=Math.floor(num); //genr 0-9
num=num+1;
console.log(num);


// One Line Code 
let num1=Math.floor(Math.random()*10)+1;
console.log(num1);