// https://www.w3schools.com/js/js_if_else.asp

if;     //To specify a block of code to be executed, if a specified condition is true
else;   //To specify a block of code to be executed, if the same condition is false
else if;//To specify a new condition to test, if the first condition is false
switch; //To specify many blocks of code to be executed
(condition) ? // Ternary or conditional operator: Tests a piece of code and returns one string if the conditon returns true, or another if it returns false


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


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

/*switch*/
switch (expression) {
	case x:
		// execute case x code block
		break;
	case y:
		// execute case y code block
		break;
	default:
		// execute default code block
}
//Example
const day = new Date().getDay(); //new Date() finds the day of the week, getDay() prints a number for the day, 0 - 6

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}
//Multiple Cases
// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();

switch (month) {
	// December, January, February
	case 11:
	case 0:
	case 1:
		console.log("Summer");
		break;
	// March, April, May
	case 2:
	case 3:
	case 4:
		console.log("Autumn");
		break;
	// June, July, August
	case 5:
	case 6:
	case 7:
		console.log("Winter");
		break;
	// September, October, November
	case 8:
	case 9:
	case 10:
		console.log("Spring");
		break;
	default:
		console.log("Something went wrong.");
}



/*Ternary or conditional operator*/
( condition ) ? run this code : run this code instead
//Example
let greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a great day!' : 'Good morning Mrs. Smith.';
//If true, returns first message, if false, returns second message

//Example - more complex
//HTML
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>


const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener('change', () => ( select.value === 'black' ) ? update('black','white') : update('white','black'));