let student=["Wish","Vishal","Rishikesh"];
let info=["Wish",53,6.7];

//Also we can create empty array

console.log(student)
console.log(student[0])
console.log(student[3])

console.log(student[1][0])

console.log(typeof(student))  //Here (In js ) Array is Object

// Array is similar to String but they are Muteble.

student[2]="Ankush";
console.log(student[2]);

student[6]="Ankush";
console.log(student);



//METHOD IN ARRAY
student.push("Ajit");  //Add from end
console.log(student);

student.pop();   //Delete from end and returns it..
console.log(student);

  //If i want to add or delete item/data from start so we use "unshift" & "shift"


console.log(student.indexOf("Vishal"));   //For Index
console.log(student.indexOf("VISHAL"));

console.log(student.includes("Ankush"));  //Searching
console.log(student.includes("Rakesh"));


//concat -> merge 2 arrays
student.concat(info);  // This is new array not change the org array.
console.log(student.concat(info));

//reverse an array
student.reverse();  //This is not new array , it is changes the org array.
console.log(student);

//slice() --> Copies a portion of an array. - > Similar function use in String 

//splice(start, deletecount,item0,....itemN) --> Change the org array

//.sort()  --> sort the array  but it is string base convertion
student.sort();
console.log(student);

//ARRAY REFERENCES ==> Means -> Address in memory

//CONSTANT ARRAY --> 

//NESTED ARRAY -->


