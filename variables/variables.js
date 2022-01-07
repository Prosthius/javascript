/*To create a  variable*/
let = "variable"; 

/*To name a variable*/
variable = "data"; 

/*To create and name a variable*/
let variable = "data";

/*To create and/or name multiple variables at once*/
let variable = "data",
    VariableNameOnly;

/*To copy data from one variable to another*/
let dataBeingCopied = "data";
let variableToCopyInto;

/*To declare a variable that cannot be changed after creation*/
const myBirthday = "21.02.2000";

/*Always use upper case when defining always known variables such as colours
or hard coded variables like birthdays*/
const COLOUR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
const BIRTHDAY = "21.02.2000";

//Copy 'data' from dataBeingCopied into variableToCopyInto
variableToCopyInto = dataBeingCopied;
//First variable (variableToCopyInto) will copy data from second variable (dataBeingCopied)

/*Variable names can only contain letters, digits, or the symbols $ and _*/
//Cannot begin with digit, cannot use hyphens, should start with lowercase
//Variables are case sensitive
//List of reserved words that cannot be used, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
let $
let _
let variableName2

/*To display variable data*/
alert(variable);
