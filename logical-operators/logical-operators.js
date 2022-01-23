// https://javascript.info/logical-operators

/*
Logical Operators
*/
||  // OR
&&  // AND
!   // NOT
??  // Nullish Coalescing



/*
|| OR
*/
//Typically, OR will only manipulate boolean values (true or false, or, 1 or 0)
//Four possible logical combinations:
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
//Always true unless both operands are false

//Converts operands to boolean, 1 or 0:
if (1 || 0) {// same as (true || false)
    alert ('truthy!');
}

//OR || is typically used in an 'if' statement to test if any of the conditions are true:
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

//More examples:
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}


//JS works slighly different than classical programming
//OR || operator does the following:

/*Evaluates operands from left to right.*/
/*Converts each operand to boolean. If the result is 'true', 
stops and returns the original value of that operand.*/ 
/*If all operands have been evaluated, (i.e. all were false),
returns the last operand.*/

alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)


//1. Getting the first truthy value from a list of variables or expressions.
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

//2. Short-circuit evaluation
/* OR processes its arguments until the first truthy value is reached,
returning that value and ignoring all the others. */

true || alert("not printed");
false || alert("printed");

/* The OR operator stops the evaluation immediately upon seeing true,
stopping the alert from being run. */
//This feature can be used to execute commands only if the left part is falsy.



/*
&& AND
*/
