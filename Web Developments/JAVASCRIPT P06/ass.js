// Qs1.Write a JavaScript function that returns array elements larger than a number.
function largNumber(arr,num){
    let largNum=num;
    for(let i=0;i<=arr.length-1;i++){
        if(largNum<arr[i]){
            largNum=arr[i];
        }

    }
    return largNum;
}

let arr=[1,4,6,9,2,15,4];
let num=5;
console.log(largNumber(arr,num));


// Qs2.Write a JavaScript function to extract unique characters from a string. 
// Example: str="abcdabcdefgggh" ans="abcdefgh"
let str="abcdabcdefgggh";
function getUnique(str){
    let ans="";
    for (let i=0; i<str.length;i++){
        let currChar=str[i];
        if(ans.indexOf(currChar) == -1){
            ans+=currChar;

        }
        

    }
    return ans;

}

console.log(getUnique(str));


// Qs3.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as 
// output. Example: country=["Australia","Germany","United States of America"] output:"United States of America"
let country=["Australia","Germany","United States of America"];
function largestName(country){
    let idx=0;
    for(let i=0;i<country.length;i++){
        let currlen=country[idx].length;
        let indexLen=country[i].length;
        if (currlen<indexLen){
            idx=i;
        }
    }
    return country[idx];
}
 console.log(largestName(country));


// Qs4.Write a JavaScript function to count the number of vowels in a String argument.
let str1="Wish Is A good Person";

function countVowels(str){
    let count=0;
    for(let i=0; i<str.length;i++){
        let currChar=str[i].toLowerCase();
        if (currChar=='a' ||currChar=='e' ||currChar=='i' ||currChar=='o' ||currChar=='u'){
            count++;
        }
    }
    return count;
}

console.log(countVowels(str1));


// Qs5.Write a JavaScript function to generate a random number within a range (start, end).
let start=5;
let end=15;

function generateRandom(start,end){
    let diff=end-start;
    return Math.floor(Math.random()*diff)+start;
}
console.log(generateRandom(start,end));