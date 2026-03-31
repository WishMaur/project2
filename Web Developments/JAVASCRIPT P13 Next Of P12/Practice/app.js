let url="http://universities.hipolabs.com/search?country=";
let btn1=document.querySelector("#btn1");
let input1=document.querySelector("#input1");
let ul=document.querySelector("#list");
let noti=document.querySelector("#notify");

// Total result found
async function getData(countryName) {
    try{
        let res= await axios.get(url+countryName);
        // console.log(res.data);
        return res.data;
    }catch(err){
        console.log("Error-", err);
        return[];      
    }      
}

function Show(colArr){
    ul.innerText="";
    noti.innerHTML="";


    let len=colArr.length;
    noti.innerHTML=`<b>Total result found: ${len} ..`;

    for(col of colArr){
        let li=document.createElement("li");
        // console.log(col.name);
        li.innerText=col.name;
        ul.appendChild(li);
    }
}

btn1.addEventListener("click",async()=>{
    let colArr= await getData(input1.value);
    Show(colArr)
    
})