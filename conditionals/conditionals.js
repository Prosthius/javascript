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
  case choice1:
    run this code
    break;  //Stops the browser from executing code if the previous code matches the expression/value, moves on to below the switch statement 

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:  //The default option to run if none of the choices match. It is optional
    actually, just run this code
}
//Example
//Button in HMTL with options for weather

//HTML
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>
<p></p>

const select = document.querySelector('select');
const para = document.querySelector('p'); 

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
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