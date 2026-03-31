//📌 1️⃣.)What is an API?
/*
An API (Application Programming Interface) is a way for two software programs to communicate with each other.

Simple words->
An API is like a messenger that takes your request to another system and brings back the response.


👉 Real-Life Example->
Think of a restaurant:

You = customer
Waiter = API
Kitchen = server

You tell the waiter (API) what you want →
Waiter takes request to kitchen →
Kitchen prepares food →
Waiter brings it back to you

You don’t go to kitchen directly — API does that job.


👉 Important point->
API itself returns data (mostly JSON)
In JavaScript, when you call API using fetch(), it returns a Promise
*/

//🔁Full Flow in One Line
//👉 Client → API → Server → Database → Server → API → Client



//📌2️⃣.)Accessing API
/*
1️⃣ Get API URL (Endpoint)
👉 Example: https://catfact.ninja/fact

2️⃣ Call API using fetch()
fetch("https://catfact.ninja/fact")

3️⃣ It returns a Promise
👉 Means data will come later (async)

4️⃣ Convert response to JSON
.then(res => res.json())

5️⃣ Access the data
.then(data => console.log(data))

6️⃣ Handle errors (optional but important)
.catch(err => console.log(err))

⚡ Ultra Short Flow
👉 fetch() → Promise → .json() → Data → Use it
*/
//@SOME API LINKs
//https://catfact.ninja/fact
//https://www.boredapi.com/api/activity
//https://dog.ceo/api/breeds/image/random




//📌3️⃣.)What is JSON? 
/*
JSON (JavaScript Object Notation) is a format to store and exchange data between systems.

👉 Simple words-
JSON is a way to write data in text form so computers can easily understand and share it.

🧠 Real-Life Idea
Think of JSON like a data box 📦:

It stores information (name, age, city, etc.)
It is easy to read for humans 👀
Easy for machines to process 🤖

NOTED POINTs->
In jSOn data is in key : value pairs & Keys must be in double quotes " "
*/

/*
🔄JSON vs JavaScript Object
| JSON                | JavaScript Object          |
| ------------------  | -------------------------- |
| `"name": "Vishal"`  | `name: "Vishal"`           |
| Always string keys  | Keys can be without quotes |
| Pure data format    | Can have functions         |
*/



//📌4️⃣.)ACCESSING DATA FROM JSON 
/*
//👉 (JSON → JS Object) => TO parse a string data into a JS Object
let obj = JSON.parse('jsonData');

//👉 (JS Object → JSON) => To parse a JS object data into JSON
let json = JSON.stringify(jsObj);
*/
// Example:-
let jsondata='{"fact":"Cats have 32 muscles that control the outer ear (humans have only 6). A cat can independently rotate its ears 180 degrees.","length":122}';
console.log(jsondata);
console.log(jsondata.fact); //Cant be access without data formate are json not js

let jsobj=JSON.parse(jsondata); // Convert to js object
console.log(jsobj);
console.log(jsobj.fact);




//📌5️⃣.)API Testing Tools
/*
API Testing Tools are software used to:
✅ Send requests to API
✅ Check response (JSON, status code)
✅ Find errors (bugs, performance, security)

👉 Simple: They help you test whether API is working correctly or not
Hoppscoth
Postman
etc..
*/



//📌6️⃣.)What is AJAX?
/*
AJAX (Asynchronous JavaScript and XML(JSON)) is a technique used to update a web page without reloading it.
👉 Simple words:
AJAX lets your website talk to the server in the background and update data instantly.

👉NOTED-> AJAX is not a language, It is a technique using JavaScript & Used to fetch data without refreshing page


🧠 Real-Life Example
👉 Think of Instagram / YouTube comments:
You scroll → new data loads
Page does NOT reload
Data comes in background


👉 That is AJAX working ⚡
Steps:
1️⃣ User action (click, scroll, search)
2️⃣ JavaScript sends request (AJAX) Using fetch() (modern) && XMLHttpRequest (old)
3️⃣ Server processes request
4️⃣ Server sends data (JSON)
5️⃣ Page updates without reload
*/




//📌7.)HTTP Verbs (Methods) 
/*
HTTP Verbs are actions you perform on a server using an API.
👉 Simple words->
They tell the server what you want to do with data.

👉Main HTTP Verbs=>
1.) GET (Read Data)-> Used to fetch data & Does NOT change anything

fetch("https://api.example.com/users")
  .then(res => res.json())
  .then(data => console.log(data));

Example: Get user list


2.) POST (Create Data)-> Used to send new data to server

fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "Vishal",
    age: 21
  })
});

Example: Create new user


3.) PUT (Update (Full)) -> Used to update entire data

fetch("https://api.example.com/users/1", {
  method: "PUT",
  body: JSON.stringify({
    name: "Vishal Updated",
    age: 22
  })
});

Example: Replace full user data


4.) PATCH (Update (Partial))-> Used to update only some fields

fetch("https://api.example.com/users/1", {
  method: "PATCH",
  body: JSON.stringify({
    age: 23
  })
});

Example: Update only age


5.) DELETE (Remove Data)-> Used to delete data

fetch("https://api.example.com/users/1", {
  method: "DELETE"
});

Example: Delete user
*/




//📌8.)status codes
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status



//📌9.)Adding Info in URLs (Query Strings)=>
/*
A query string is used to send extra information in a URL.It comes after ? in the URL

👉Example URL
https://example.com/search?q=bitcoin

https://example.com/search → API/website endpoint
? → starts query string
q=bitcoin → key = value

Here:
q = query (parameter name)
bitcoin = value


👉NOTED-> Multiple Query Parameters-> You can send more data using &

*/




//📌10.)What are HTTP Headers? 
/*
HTTP Headers are extra information sent along with a request or response.
👉Simple words->
They are like labels or instructions that tell the server/client how to handle the data.

👉Real-Life Example
Think of sending a parcel :

Item inside = data (body)
Label outside = headers

👉 Label tells:
What’s inside
Who sent it
How to handle it


👉Where Headers Are Used
Headers are sent in both:
    Request (client → server)
    Response (server → client)



👉Response Headers (Server sends)
    Content-Type → type of response
    Cache-Control → caching rules
    Server → server info


//Example in JavaScript (fetch)
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer abc123"
  },
  body: JSON.stringify({
    name: "Vishal"
  })
});


👉 NOTED POINTs->Headers Format (Always key : value)
OUTPUT->
   Content-Type: application/json
   Authorization: Bearer token123

*/






//@SOME API LINKs
//https://catfact.ninja/fact
//https://www.boredapi.com/api/activity
//https://dog.ceo/api/breeds/image/random

//📌11.)First API Request Then Use fetch & async-await

let url="https://catfact.ninja/fact";

// fetch(url) //return Promise

// .then((resp)=>{
//     // console.log(resp);
//     return resp.json();  
// })
// .then((data1)=>{
//     console.log(data1);
//     console.log(`DATA1 : ${data1.fact}`);
//     return fetch(url);
// })

// .then((resp)=>{
//     return resp.json();  
// })
// .then((data2)=>{
//     console.log(data2);
//     console.log(`DATA2 : ${data2.fact}`);
// })
// .catch((err)=>{
//     console.log("Error",err);
    
// });



//📌USING fetch with async-await
async function getFact(){
    try{
        let res=await fetch(url);  //return promise so that use await
        let data=await res.json();  //return promise so that use await
        console.log(data);
        console.log(data.fact);
    }catch(err){
        console.log("Error->",err);
    }

}
getFact();
