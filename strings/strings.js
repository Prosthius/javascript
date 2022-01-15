// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

//"" and '' are virtually the same, but be consistent
//Both of the below examples work
const sglDbl = 'Would you eat a "fish supper"?'; //'Would you eat a "fish supper"?'
const dblSgl = "I'm feeling blue."; //"I'm feeling blue."
//Below example does not work
const bigmouth = 'I've got no right to take my place...';

/*Escaping characters in a string*/
//To fix the previous example use "\" to escape the character
const bigmouth = 'I\'ve got no right to take my place...'; //"I've got no right to take my place..."


/*Concatenating Strings - template literal*/
//Use a string called a template literal using ``
const greeting = `Hello`;

//Can put variable inside using ${}
const name = 'Chris';
const greeting = `Hello, ${name}`; //"Hello, Chris"

//Can join together two variables
const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`; //"Hello, how are you?"

//Concatenation in context
<button>Press me</button>


const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);


/*Concatenation using "+"*/
let greeting = "Hello";
let name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"
//Easier to read the following
console.log(`${greeting}, ${name}`); // "Hello, Chris"


/*Numbers vs. strings*/
const name = "Front ";
const number = 242;
console.log(`${name}${number}`); // "Front 242"

//Convert to a number
const myString = '123';
const myNum = Number(myString);

//Convert to a string
const myNum2 = 123;
const myString2 = myNum2.toString();


/*Including expressions in strings*/
//You can include JavaScript expressions in template literals, 
//as well as simple variables, and the results will be included in the result:
const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  //"I like the song Fight the Youth. I gave it a score of 90%."
//or
const output = `I like the song ${song}. I gave it a ${score} out of ${highestScore}.`;
console.log(output); //"I like the song Fight the Youth. I gave it a 9 out of 10."


/*Multiline strings*/
//Template literals respect the line breaks in the source code, 
//so you can write strings that span multiple lines like this:
const output = `I like the song.
I gave it a score of 90%.`;
console.log(output);  // I like the song.
                      // I gave it a score of 90%.

//To have the equivalent output using a normal string 
//you'd have to include line break characters (\n) in the string:
const output = 'I like the song.\nI gave it a score of 90%.';
console.log(output);  // I like the song".
                      // I gave it a score of 90%.



// https://www.w3schools.com/js/js_string_methods.asp

/*JavaScript String Length*/
//The length property returns the length of a string:
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length; //26


/*Extracting String Parts*/
//Three methods
slice(start, end)
substring(start, end)
substr(start, length)

//slice()
//Extracts a part of a string and returns the extracted part in a new string
//Takes two parameters: the start position and end position (end not included)
//Below example slices out part of string from position 7 to 12
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); //"Banana"

/*
JS counts from 0
*/

//Can be used backwards
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6); //"Banana"

//Can omit second parameter
let part = str.slice(7); // "Banana, Kiwi"

let part = str.slice(-12); // "Banana, Kiwi"


/*substring()*/
//Same as slice(), but cannot accept negative indexes


/*substr()*/
//Same as slice(), but second parameter specifies the length of the extracted part
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); // "Banana"

//If you omit the second parameter, the rest of the string will be sliced out
let str = "Apple, Banana, Kiwi";
let part = str.substr(7); // "Banana, Kiwi"

//If the first parameter is negative, the position counts from the end of the string.
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4); // Kiwi



/*Replacing String Content*/
//replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
//Does not change the string it is called on, instead, it returns a new string

//By default, only replaces the first match:
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools"); //"Please visit W3Schools and Microsoft!"

//By default, replace() method is case sensitive:
let text = ""Please visit W3Schools and W3Schools!"Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools"); //"Please visit Microsoft!"
//To make case insensitive use /i:
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools"); //"Please visit W3Schools!"

//Regular expressions are written without quotes//

//To replace all matches, use a regular expression with a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools"); //"Please visit W3Schools and W3Schools!"


/*Converting to Upper and Lower Case*/
toUpperCase() //Converts to upper case
toLowerCase() //Converts to lower case

//Upper case example:
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //"HELLO WORLD!"

//Lower case example:
let text1 = "Hello World!";
let text2 = text1.toLowerCase(); //"hello world!"



/*concat()*/
//Joins two or more strings together:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); //"Hello World"

//All string methods return a new string. They don't modify the original string.
//Strings are immutable: Strings cannot be changed, only replaced.



/*trim()*/
//Removes whitespace from both sides of a string:
let text1 = "      Hello World!      ";
let text2 = text1.trim(); //"Hello World!"



/*String Padding*/
//Pad either side of a string with a number, string or variable
padStart()
padEnd()

//padStart() example:
let text = "5";
let padded = text.padStart(4,0); //"0005"

//padEnd() example:
let text = "5";
let padded = text.padEnd(4,0); //"5000"



/*Extracting String Characters*/
//Three methods:
charAt(position)
charCodeAt(position)
Property access []

//charAt()
//Returns the character at a specified index (positon) in a string:
let text = "HELLO WORLD";
let char = text.charAt(0); //"H"


//charCodeAt()
//Returns the unicode of the character at a specified index in a string:
//Returns a UTF-16 code (an integer between 0 and 65535)
let text = "HELLO WORLD";
let char = text.charCodeAt(0); //72


//Property Access
//ECMAScript 5 (2009) allows property access [ ] on strings:
let text = "HELLO WORLD";
let char = text[0]; //"H"

//Property access might be unpredictable:
//It makes strings look like arrays (but they are not)
//If no character is found, [ ] returns undefined, while charAt() returns an empty string.
//It is read only. str[0] = "A" gives no error (but does not work!)
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work



/*split()*/
//A string can be converted to an array with this method:
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe 

//If the separator is omitted, the returned array will contain the whole string in index [0].

//If the separator is "", the returned array will be an array of single characters:
text.split("")