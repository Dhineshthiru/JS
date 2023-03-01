const text1 = 'I am';
const text2 = 'a student';
const text3 = '     of this school    ';

// concatenating two strings
const result1 = text1.concat(' ', text2);
console.log(result1);

// converting the text to uppercase
const result2 = text1.toUpperCase();
console.log(result2);

// removing whitespace from the string
const result3 = text3.trim();
console.log(result3); 

// converting the string to an array
const result4 = text1.split();
console.log(result4); 

// slicing the string
const result5= text1.slice(1, 3);
console.log(result5); 

//finding out the index of a string
let text = "Hello ,Mam";
let result = text.indexOf("Mam");
//includes
let result6 = text.includes("world");
//match
let result7 = text.match("ain");
//replace
let result8 = text.replace("Mam", "Sir");
//last-Index of
let result9 = text.lastIndexOf("Mam");

console.log(result);
console.log(result6);
console.log(result7);
console.log(result8);
console.log(result9);