// 1️⃣)What is Axios? =>
/*
Axios is a JavaScript library used to make API requests (like fetch, but easier).
👉Simple words:
Axios helps you call APIs and get data easily with less code


👉Why Use Axios (instead of fetch)?
 Automatic JSON conversion
 Cleaner syntax
 Better error handling
 Supports request/response interceptors


👉How to Install Axios
Using CDN (easy way)
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
 */

// Method
/*
get
post
put
delete
*/

let url="https://catfact.ninja/fact";

async function getFact(){
    try{
        let res=await axios.get(url);  //return promise so that use await
        // console.log(res.data);
        // console.log(res.data.fact);
        return res.data.fact;
    }catch(err){
        // console.log("Error->",err)
        return "No facts Found 404";
    }

}
// getFact();

//Practical 1
let btn1=document.querySelector("#btn1");
let p=document.querySelector("p");
btn1.addEventListener("click",async()=>{
    let fact= await getFact();
    p.innerText=fact;

})



//Practical 2 for image
let url2="https://dog.ceo/api/breeds/image/random";
async function getImg(){
    try{
        let res=await axios.get(url2);  //return promise so that use await
        console.log(res.data);
        console.log(res.data.message);
        return res.data.message;
    }catch(err){
        console.log("Error->",err)
        return "No facts Found 404";
    }

}

let btn2=document.querySelector("#btn2");
let img=document.querySelector("img");
btn2.addEventListener("click",async()=>{
    
    let link= await getImg();
   
    img.src=link;
     img.classList.add("imgSize");

})



//2️⃣.)Sending Headers with API Requests 
/*
When you call an API, sometimes you need to send extra information along with the request.
👉 This extra info is sent using HTTP Headers

👉 What are Headers?
Headers = key-value pairs that give instructions to the server

Example:
Content-Type: application/json or text/plain etc..
Authorization: Bearer abc123


👉Why Send Headers?
    Authentication: (login token)
    Content-Type: Tell data format (JSON, text)
    Control request behavior



✅Axios Syntax with Headers
🔹 GET Request
axios.get(url, {
  headers: {
    key: "value"
  }
});


🔹POST Request
axios.post(url, data, {
  headers: {
    key: "value"
  }
}); 

*/

//Example

let url3="https://icanhazdadjoke.com/";

// async function getJoke() {             
//     let res= await axios.get(url3);      //return html formate
//     console.log(res.data);  
// }


async function getJoke() {  
    let config={headers:{Accept:"application/json"}};         //return json formate
    let res= await axios.get(url3,config);
    console.log(res.data.joke);  
}


getJoke();




//3️⃣Activity Using Query Strings
