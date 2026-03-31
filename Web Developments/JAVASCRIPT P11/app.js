//🔴1) CALL STACK =>
/*
// The call stack is a data structure (based on LIFO – Last In, First Out)
// used by the JavaScript engine to keep track of function calls in JavaScript, executing them one at a time in a stack-like order.
How It Works ->
When a function is called → it is pushed onto the stack
When the function finishes → it is popped off the stack
The last function added is executed first
*/

//Push → execute → pop

// Example 1
// function first() {
//     console.log("First function");
//     second();
// }

// function second() {
//     console.log("Second function");
//     third();
// }

// function third() {
//     console.log("Third function");
// }

// console.log("Before calling function");
// first();
// console.log("After calling function");


// JavaScript is single-threaded → only one call stack
// If too many functions are added → Stack Overflow Error



//Example 2
function first() {
    console.log("First function");
    let ans=second()+third();
    console.log(`Ans:${ans}`);
}

function second() {
    console.log("Second function");
    return third ()+third();
}

function third() {
    console.log("Third function");
    return 1;
}
first();




//🔴 2)BREATPOINTS=>
/*
A breakpoint is a debugging tool that pauses the execution of your code at a specific line, 
So you can inspect what’s happening step by step.
Understand code flow
Find logical mistakes

How to Set Breakpoints
1. Using Browser DevTools (Chrome / Edge)
Right-click → Inspect
Go to Sources tab
Click on line number → breakpoint set 

//Also See Call Stack
*/



//🔴3)Single Threaded=>
/*
In Simple Words-
A single-threaded system works like a single worker:
It can do only one job at a time & must finish one task before starting another

JavaScript is Single-Threaded-
JavaScript runs on a single thread, which means:
It has one call stack & executes code line by line
Only one operation runs at a time

//Each line runs one after another, not in parallel.
*/


//🔹What about async tasks?
/*
Even though JavaScript is single-threaded, it can handle async tasks using:
// Callback Queue
// Event Loop
*/

//Example -
// console.log("Start");

// setTimeout(() => {
//     console.log("Async Task");
// }, 2000);

// console.log("End");


//🔹How To Work
/*
1)JS executes line by line (single-threaded, call stack)
2)When it sees 🔹setTimeout():
   It does NOT wait
   It sends the timer to the Browser (Web APIs)
3)Browser starts the timer countdown
4)Meanwhile, JS continues executing next lines
5)When timer finishes:
   Callback goes to Callback Queue
6)Event Loop checks:
   If call stack is empty → it pushes callback to stack
7)Then JS executes that callback
*/




//🔴4)CALLBACK HELL=>
/*
Callback Hell is a situation where multiple callbacks are nested inside each other, 
making the code hard to read, understand, and maintain.

Why It Happens
JavaScript is asynchronous
We use callbacks to handle async tasks (like API calls, timers)
Too many dependent operations → nested callbacks 
*/

// let h3=document.querySelector("h3");


//Example 1
// function changeColor(color,delay){ // Without Callback
//     setTimeout(()=>{
//     h3.style.color=color;
// },delay);

// }

// changeColor("red",1000);
// changeColor("orange",1000);
// changeColor("green",1000);



//Example 2
// function changeColor(color,delay,nextColorChange){ // With Callback-> nextColorChange
//     setTimeout(()=>{
//     h3.style.color=color;
//     if(nextColorChange)nextColorChange();
// },delay);

// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);      //Callback nesting -> callback hell
//             });
//         });
//     });
// });



// Example 3
// function savetoDB(data,success, failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>5){
//         // console.log("Data was saved in DB",data);
//         success();
//     }else{
//         // console.log("Weak connection! Data not saved");
//         failure();
//     }  
    
// }

// savetoDB("Wish",()=>{
//     console.log("Data1 was saved in DB");
//     savetoDB("KaamChor",()=>{
//         console.log("Data2 was saved in DB");
//         savetoDB("Madam",()=>{
//             console.log("Data3 was saved in DB");
//             savetoDB("Janu",()=>{
//                 console.log("Data4 was saved in DB");
//             },()=>{
//                 console.log("Weak connection! Data not saved");
//             });
//         },()=>{
//             console.log("Weak connection! Data not saved");
//         });
//     },()=>{
//         console.log("Weak connection! Data not saved");
//     });
// },()=>{
//     console.log("Weak connection! Data not saved");
// });

// savetoDB("Aru");
// savetoDB("KaamChor");
// savetoDB("Madam");




//🔴5)PROMISES=>asynchronous Function
/*
A Promise in JavaScript is an object that represents the result of an asynchronous operation (like API calls, timers, file loading).
Promises are used for asynchronous operations
Helps avoid callback hell
Always handle errors using .catch()

A Promise has 3 states:
Pending ⏳ → Initial state (not completed)
Fulfilled ✅ → Operation successful
Rejected ❌ → Operation failed
*/

// Example -> Solving Example 3 with Promises
function savetoDB(data){
    return new Promise((resolve,reject)=>{  //resolve-> success & reject-> failed
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>5){
           // console.log("Data was saved in DB",data);
            resolve("Success : Data Saved!");
        }else{
           // console.log("Weak connection! Data not saved");
            reject("Failed: Weak connection!");
        }  

    });
    
    
}


//🔴6)Promises With then() & catch ()
// .then() is used when a Promise is resolved (success)
// .catch() is used when a Promise is rejected (error)

// Example
// let request=savetoDB("Wish"); //request= promise object
// request.then(()=>{
//     console.log("Promise was resolved");
//     console.log(request);
    
// })
// .catch(()=>{
//     console.log("Promise was failed");
//     console.log(request);
// })


//✅ SHORTCUT?
// savetoDB("Wish")
// .then(()=>{
//     console.log("Promise was resolved");
// })
// .catch(()=>{
//     console.log("Promise was rejected..");
// })


//✅ Promise Chaining
// savetoDB("Wish")
// .then(()=>{
//     console.log("data1 saved");
//     return savetoDB("Vishal");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return savetoDB("KaamChor");
// })
// .then(()=>{
//     console.log("data3 saved");
//     return savetoDB("Aru");
// })
// .catch(()=>{
//     console.log("Promise was rejected..");
// })


//✅ Promises are rejection and resolved with some data ( valid result or error's)
// savetoDB("Wish")
// .then((result)=>{
//     console.log("data1 saved,", result);
//     return savetoDB("Vishal");
// })
// .then((result)=>{
//     console.log("data2 saved," , result);
//     return savetoDB("KaamChor");
// })
// .then((result)=>{
//     console.log("data3 saved,", result);
//     return savetoDB("Aru");
// })
// .catch((error)=>{
//     console.log("Promise was rejected..",error);
// })



//🔴Practical 
// Apply Promise to Callback hell Example 2

function changeColor(color,delay){ 
    return new Promise((resolve, reject)=>{
        let h3=document.querySelector("h3");
            setTimeout(()=>{
                h3.style.color=color;
                
                // throw"error";
                // let random=Math.floor(Math.random()*10)+1;
                // console.log(random);
                // if (random>4){
                //     reject("Out of range..")
                // }
                resolve(color);
           
            },delay);

    })


}

//❌Convert This to promise based
// changeColor("red",1000"red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);      //Callback nesting -> callback hell
//             });
//         });
//     });
// });



//✅
// changeColor("red",1000)
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
//     return changeColor("orange",1000)   
// })
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
//     return changeColor("green",1000)   
// })
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
//     return changeColor("yellow",1000)   
// })
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
// })

// .catch((error)=>{
//     console.log("color not Change",error);
// })




// 🔴7)async Functions & await Keyword
/*
✅async Function ->
When you add async before a function:
It always returns a Promise & Even if you return a normal value
*/
async function hello() {
    // throw "Weak Connection";
    return "Hello World";
}
hello()
.then((res)=>{
    console.log("Promise was resolved");
    console.log(res);   
})
.catch((error)=>{
    console.log("Promise not resolved");
    console.log(error);   

})

//For Arrow Function
let demo=async()=>{
    return 6
};

/*
✅await Keyword->
await is used inside async functions only
It waits for a Promise to resolve & Makes async code look like synchronous code
*/
function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data received 📦");
        }, 1000);
    });
}

async function fetchData() {
    let result = await getData();
    console.log(result);
    let result2 = await getData();
    console.log(result2);
}

fetchData();


//Apply Promise ,async Functions & await Keyword for Callback hell Example 2

//❌Convert This to promise based async and await
// changeColor("red",1000)
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
//     return changeColor("orange",1000)   
// })
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
//     return changeColor("green",1000)   
// })
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
//     return changeColor("yellow",1000)   
// })
// .then((res)=>{
//     console.log("color Change SuccessFully",res);
// })

// .catch((error)=>{
//     console.log("color not Change",error);
// })


//✅
// async function demoColor(){
//     await changeColor("red",1000);
//     await changeColor("orange",1000); 
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);  
// }

// demoColor();




/*
✅Handling Rejection in async / await ->
When a Promise is rejected, async/await handles it using try...catch 
(instead of .catch() like in normal Promises).
*/
async function demoColor(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000); 
        await changeColor("green",1000);
        await changeColor("yellow",1000);

    }catch(err){
        console.log("Caught Error:", err);
    }  
}

demoColor();




