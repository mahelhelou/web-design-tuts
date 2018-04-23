/*global
    console,
    alert,
    prompt
*/

// switch syntax
/*
switch(expression) {
case 1:
code
break;

case 2:
code
break;

case 3:
code
break;

default:
code
break;
}
*/

var season = prompt("what's the best season in the yea?");
switch (season) {
case "Winter":
        alert("winter is cold in our country");
        break;
        
case "Spring":
        alert("Spring is awesome");
        break;

case "Summer":
        alert("Summer is hot here!");
        break;
        
case "Autum":
        alert("Autum is nice in our country");
        break;
        
    default:
        alert("Please type the answer with capital letter in the fist letter. example: Winter, Spring, Summer, Autum");
        break;
}
/*
You can put two cases with one code
case "winter":
case "Spring":
    alert("....");
    break;
*/