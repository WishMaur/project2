let num=prompt("Enter a Number: ");
let intnum=parseInt(num);
let fact=1;
while(intnum>0){
    fact=fact*intnum;
    intnum--;
}
console.log(fact);
