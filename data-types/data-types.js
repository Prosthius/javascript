/*
Summary
*/
//There are 8 basic data types in JavaScript.

//'number' for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).

//'bigint' is for integer numbers of arbitrary length.

//'string' for strings. A string may have zero or more characters, there’s no separate single-character type.

//'boolean' for true/false.

//'null' for unknown values – a standalone type that has a single value null.

//'undefined' for unassigned values – a standalone type that has a single value undefined.

//'object' for more complex data structures.

//'symbol' for unique identifiers.



//The typeof operator allows us to see which type is stored in a variable.


//Usually used as 'typeof x', but 'typeof(x)' is also possible.

//Returns a string with the name of the type, like "string".

//For 'null' returns "object" – this is an error in the language, it’s not actually an object.




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



/*
Boolean (logical type)
*/
//Only has two values:
true, false

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

//Can be used as a result of comparison
let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")



/*
The "null" value
*/
//Contains only the 'null' value
//Null represents "nothing", "empty" or "value unknown"
let age = null; //States that 'age' is unknown



/*
The "undefined" value
*/
//Contains only the 'undefined' value
//Means "value is not assigned"
//If a variable is declared, but not assigned, its value is 'undefined'
let age;
alert(age); // shows "undefined"

//Reserved as a default initial value for unassigned things



/*
Objects and symbols
*/
/*Objects*/
//The object type is special
//All other types are called “primitive” because their values can contain only a single thing 
//(be it a string or a number or whatever). 
//In contrast, objects are used to store collections of data and more complex entities.
/*Symbols*/
//Used to create unique identifiers for objects



/*
The typeof operator
*/
//Returns the type of the argument
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//1.Math is a built-in object that provides mathematical operations. 
//2.Null is not an object, an error of typeof
//3.No "function" type, belongs to the object type