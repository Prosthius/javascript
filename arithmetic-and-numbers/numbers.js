/*
https://www.w3schools.com/js/js_numbers.asp
*/

//Numbers can written with and without decimals
let x = 3.14,
    y = 3;

//Numbers can be written with scientific (exponent) notation
//e5 moves decimal point 5 digits right, -e5 moves decimal point 5 digits left
let x = 123e5;
12,300,000

let y = 123-e5;
0.00123

/*Javascript numbers are always 64-bit floating point 
This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, 
the exponent in bits 52 to 62, and the sign in bit 63*/
//Integers, without a decimal point or scientfic notation are accurate up to 15 digits
let x = 999,999,999,999,999;
999,999,999,999,999

let y = 9,999,999,999,999,999;
10,000,000,000,000,000  //rounds up by 1

//Decimal point arithmetic is not always accurate
0.2 + 0.1;
0.30000000000000004
//Can be combated by converting into whole numbers and back
(0.2 * 10 + 0.1 * 10) / 10;
0.3

//Difference between a string and number
30      //number
"30"    //string

/*WARNING !!
JavaScript uses the + operator for both addition and concatenation.
Numbers are added. Strings are concatenated.*/
1 + 1;
2

one + one;
oneone

10 + "20";
1020

/*The JavaScript interpreter works from left to right. 
Everything after a string, "30", is considered a string.*/
10 + 20 + "30" + 10 + 20;
30301020

//When only numbers are used JS will try to convert all strings to numbers
"100" / "10";   //will work
10
"100" * "10";   //will work
1000
"100" - "10";   //will work
90
"100" + "10";   //will not work as '+' will concatenate if string present
10010

/*NaN - Not a Number*/
//Trying to do arithmetic (-, *, /, **, %, ++, --) will result in NaN
100 / "Apple";
NaN
100 / "10"; //converts string to number as only numbers were used
10

//To determine if value is NaN
isNaN(variable);
true    //if not a number
false   //if a number

//If a variable containing not a number is used, NaN or a concantation will always result
let x = NaN;
let y = 5;
let z = x + y;
z;
NaN

let x = NaN;
let y = "5";
let z = x + y;
z;
NaN5

//However NaN is considered a number
typeof NaN;
"number"

/*Infinity (or -Infinity) is the value JavaScript will return 
if you calculate a number outside the largest possible number*/
9**999;
Infinity
//Division by 0 also results in Infinity
2 / 0;
Infinity
//Infinity is a number
typeof Infinity;
"number"

/*Hexadecimal*/
//JS interprets numeric constants as hexidecimal if they are preceded by 0x
0xFF;
255
/*
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.
*/

/*By default, JavaScript displays numbers as base 10 decimals.
But you can use the toString() method to output numbers from base 2 to base 36.
Hexadecimal is base 16(0-9, a-f). Decimal is base 10. Octal is base 8. Binary is base 2.*/
let myNumber = 32;
myNumber.toString(10);
myNumber.toString(32);
myNumber.toString(16);
myNumber.toString(8);
myNumber.toString(2);

/*Numbers as objects*/
//Numbers can be defined as objects with the keyword 'new'
let y = new Number(123);
y;
Number { 123 }

/*
Do not create Number objects.
The new keyword complicates the code and slows down execution speed.
Number Objects can produce unexpected results:
*/
let x = 500;
let y = new Number(500);

x==y;
true

x===y;
false

//Comparing two JavaScript objects always returns false.
let x = new Number(500);
let y = new Number(500);

x==y;
false
x===y;
false
