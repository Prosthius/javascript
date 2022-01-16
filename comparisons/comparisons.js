// https://javascript.info/comparison
/*
Comparisons
*/
a > b;  //Greater than
a < b;  //Less than
a = b;  //An assignment
a == b; //Equal to (doesn't consider object type)
a === b;//Strict equals (does consider object type)
a != b; //Not equal to
a !== b;//Strict not equals to

/*Comparing strings*/
//Compares the first character of both strings, then subsequent characters if required:
"aab" > "aaa"; //true
//JS uses unicode, 'A' and 'a' are not equal
"A" > "a"; //false

//Converts values of different types to numbers:
"1" > 2; //false

//true and false
true == 1; //true
false == 0; false


//null and undefined
null === undefined; //false
null == undefined; //true

//For maths and comparisons
null = 0
undefined = NaN

//null
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
//(1) and (3) Comparisons convert null to a number, treating it as 0
//(2) null and undefined only equal each other

//undefined
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
//(1) (2) undefined is converted to NaN, NaN returns false for all comparisons
//(3) undefined only equals null and undefined

//Be careful of any comparison with undefined/null except ===
//Don't use comparisons with null/undefined