//ARRAY
const arr1 = ["William", "Shakespeare"];
const arr2 = ["Emil", "Is", "Here"];
const arr3 = ["Robin"];
//concat
const children = arr1.concat(arr2, arr3);
//copywithin
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2,0);
//indexof
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits2.indexOf("Apple");
//Isarray
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let result = Array.isArray(fruits3);
//Length
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits4.length;
//Map
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt);
//Pop
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.pop();
//Push
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.push("Kiwi");
//Reverse
fruits6.reverse();
//Shift
fruits6.shift();
//Unshift
fruits6.unshift("Lemon","Pineapple");
//Slice
const citrus = fruits6.slice(1, 3);
//Sort
fruits6.sort();
//Splice
fruits6.splice(2, 0, "Lemon", "Kiwi");

//Map method

const num = [1,2,3,4,5];
let square = num.map();
let sqrt = num.map((value) => {
    return Math.square(value);
});
