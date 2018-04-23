// if condition

// syntax
/*
if(condition) {
    // execute code if it's true
} else {
    // run another code if it's false
}

// another syntax
if(condition1) {
    // code
} else if {
    // code
} else {
    // last code
}
*/

var ticketPrice = 2100;

if (ticketPrice < 1500) {
    console.log("Cheap");
} else if (ticketPrice == 2000) {
    console.log("Good Price")
} else {
    console.log("Expensive");
}

// using prompt with if condition
var theAge = prompt("type your name here");

if (theAge < 18) {
    document.getElementById("demo").innerHTML = 
    "sorry, you're not allowed here. because your age is: " + theAge;
} else {
    document.getElementById("demo").innerHTML =
    "Welcome Man hahaha";
}