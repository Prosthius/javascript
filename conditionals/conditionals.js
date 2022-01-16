// https://www.w3schools.com/js/js_if_else.asp

if;     //To specify a block of code to be executed, if a specified condition is true
else;   //To specify a block of code to be executed, if the same condition is false
else if;//To specify a new condition to test, if the first condition is false
switch; //To specify many blocks of code to be executed


/*if*/
if (condition) {
    // block of code to be executed if the condition is true
}
//Example:
//Make a "Good day" greeting if the hour is less than 18:00:
if (hour < 18 ) {
    greeting = "Good day";
}


/*else*/
if (condition) {
    //  block of code to be executed if the condition is true
  } else {
    //  block of code to be executed if the condition is false
  }
//Example:
//If the hour is less than 18:00, create a "Good day" greeting, otherwise "Good evening":
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }


/*else if*/
if (condition1) {
    //  block of code to be executed if condition1 is true
  } else if (condition2) {
    //  block of code to be executed if the condition1 is false and condition2 is true
  } else {
    //  block of code to be executed if the condition1 is false and condition2 is false
  }
//Example:
//If time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, 
//create a "Good day" greeting, otherwise a "Good evening":
if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }