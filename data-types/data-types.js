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


