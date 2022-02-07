// https://javascript.info/ifelse#the-name-of-javascript

let value = prompt('What\'s the “official” name of JavaScript?', '');

if (value === 'ECMAScript') {
    alert('Right!')
} else {
    alert('You don\'t know? ECMAScript!')
}


// https://javascript.info/ifelse#show-the-sign

let value = prompt('Input a number');

if (value > 0) {
    alert(1)
} else if (value < 0) {
    alert(-1)
} else {
    alert(0)
}


// https://javascript.info/ifelse#rewrite-if-into

let result = (a + b < 4) ? result = 'Below' : result = 'Over';


// https://javascript.info/ifelse#rewrite-if-else-into

let message = (login === 'Employee') ? 'Hello' :
    (login === 'Director') ? 'Greetings' :
    (login === '') ? 'No Login' :
    '';