let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let highScore=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started===false){
        console.log("Game is started ..");
        started=true;
        levelUp();
    }
    

});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");

    },200);
}

function bgFlash(){
    let body =document.querySelector("body");
    body.classList.add("bgflash");
    setTimeout(function(){
        body.classList.remove("bgflash");

    },400);
}


function levelUp(){
    userSeq=[];
    level++;
    highScore++;
    h3.innerText=`Level ${level}`;

    //Random Btn flash
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    // console.log(randbtn);
    console.log(gameSeq);
    
    gameFlash(randbtn);

}

function checkAns(idx){
    // let idx=level-1;
    
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length===userSeq.length){
            console.log("Same Value");
            setTimeout(levelUp,1000);
        }
           
    }else{
        console.log(`Level ${level}, Game Over! Press any key to start..`);
        h3.innerHTML=`<h2>Highest Score ${highScore}</h2>,<br> Your Current <b>Level ${level} </b>,<br> Game Over! Press any key to start..`;
        reset();
        bgFlash();
        
    }



}

function btnPress(){
    // console.log(this);
    // console.dir(this);
    userFlash(this);
    userColor=this.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);

    // console.log(userColor);
    // console.log(userSeq);
    
}

//BTN Press
let allBtns=document.querySelectorAll(".btn");
for(bt of allBtns){
    bt.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

