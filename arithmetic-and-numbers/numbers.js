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
