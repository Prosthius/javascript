/*
Number
*/
let n = 123;
n = 12.345;

//Special numeric values:

//Infinity - division by zero
1 / 0;
Infinity

//NaN - incorrect or undefined mathematical operation
"word" / 2 + 5;
NaN
//Will propgate to all further expressions



/*
BigInt
*/
//Number type cannot represent integer values larger than (2^53-1)
//or 9,007,199,254,740,991
//Created by appending 'n' to the end of an integer
const bigInt = 1234567890123456789012345678901234567890n;



/*
String
*/
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//Three types of quotes
/*1. Double quotes:*/ "Hello"
/*2. Single quotes:*/ 'Hello'
/*3. Backticks:*/ `Hello`

//Double and single quotes are 'simple' quotes. Virtually no difference.
//Backticks are extended functionality quotes.
//They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


