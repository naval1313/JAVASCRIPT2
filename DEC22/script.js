// // STRING METHODS

// // to convert any number in string we use tostring() method
// var age = 25;
// console.log(typeof age);

// var newAge = age.toString();
// console.log(typeof newAge);

// // TO check the length of string as a number.
// var data = "javascript";
// // adding two strings by using concat() method.
// var text = "it is a useful language";
// var combined = data.concat(text);
// console.log(combined);

// var dataLength = data.length;
// console.log(dataLength);

// // charAt() it returns the character of a specific index number.
// let char = "binod";
// var newChar = char.charAt(2);

// // charCodeAt() returns the utf code of that character.
// var newChar = char.charCodeAt();
// var newChar = char.toLocaleLowerCase();
// var newChar = char.toLocaleUpperCase();
// console.log(newChar);

// // trim method :it removes the extra spaces around string.
// let sname = "  john doe  ";
// let output = sname.trim();
// console.log(output);

// // Split method : splitting an string into an array.
// let splitdata = " this is a string which  will split into array";
// const splitData = splitdata.split();
// console.log(splitData);

// // Slice : extraxt an part of string, it takes two parameters one is starting index and second is end index but here end index is not included.
// // in slice we can take negative values as well.
// const something = "javascript";
// const slice = something.slice(0, 3);
// console.log(slice);

// //Substring : it is similar to slice but here the negative values not included.
// // substring treats negative values as 0.
// newData = something.substring(0, 3);
// console.log(newData);

// // substr : 1st parameter is starting position and 2nd parameter is length of string you want to extraxt.
// // it returns the new string.
// newData = something.substr(0, 10);
// console.log(newData);

// // replace : it replace the part of string ,here we pas two parameters one is text we want to rreplace, 2nd is  new text.
// // replace method is case sensative
// // replace method only replaces the first element
// const myString = "All that glitter is not gold";
// let newText = myString.replace("gold", "silver");
// // replace asll. it replaces all element it founds
// // let newText = myString.replaceAll("gold", "silver");
// console.log(newText);

// regular expression.
let mydata =
  "google is a place to work ,google is a good company, hello google";
// let newData = mydata.replace("google","amazon");

// i is for case-sensative search and g is for global.
let newData = mydata.replace(/google/gi, "amazon");
console.log(newData);

// PROJECT FOR UI ; html css project.
// LIBRARY MANAGEMENT.
// options airline

// what are es6 features ,why they launch, dom , bom : brower object model or window object , var let const difference,functions ,objects array,math method,string method.
// var = global scope and function scope.
// let = block scope.

// reassignment can be done in var and let not in const.
// redeclare can only be done in var

// HOISTING : it is the built in or bydefault behaviour of JS in which all the declarations of variable and functions are moved to the top of there scope.
//  var can be hoisted. but let and const cant be hoisted
// regular functions can also be hoisted.

// regular function,function expression,arrow function.

// DOM : By dom we can change inner html,text and html attribute.
// by dom we can also change css as sty;e.

// BOM : browser object model : window object everything in js is under window. window object.

// ressume project : making a copy of dom or document of js

// for or loop in objects
// for key name OF object name {}

// for in loop with array
// const num=[12345] 
// for (let x in num){}

// foe each : works as a higher order function
// it is a method of array and object.
// const num=[12345]
// 
// foer each and map is same but for each does noitvreturn so we can use map.