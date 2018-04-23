/* global console, alert, prompt */

// function is a block of code that is excuted only when it's called

/*
function functionName(para1, para2) {
    "use strict"; // for brackets purposes
    // code like: 1 + 2;
    // or return (value or something else)
}

// call the function
functionName();

// retrun is a self envoke function, we don't need to recall after the code
*/


var myName = "Abo El Helou";

function sayHello() {
    "use strict";
    var myName = "Mahmoud"; // local var
    // local vars can't be recalled from outsite the function
    //alert("Hi " + myName);

    // using if condition inside the function
    if (myName !== 10) {
        //alert("Bad");
    }
}

sayHello();

//alert("Hi " + myName);
// returns myName is not defined if I meant the var inside the function

// this will work without problem, because the var is defined global
//alert("Hi" + " " + myName);

// Return in function

function letMeKnowYou() {
    "use strict";
    var myName = "Mahmoud",
        myAge = 28,
        myExp = 5;
    return myAge; // if not used will return undefined
    // return myAge + 20;
    // return part of the function when it's called
}

document.getElementById("demo").innerHTML = letMeKnowYou();

// Aplication to calculate the age in days

var calcAgeInDays = ageInDays(); // var = function!
function ageInDays() {
    "use strict";
    var myAge = prompt("Type your age here");
    return myAge * 365;
}

document.getElementById("demo2").innerHTML =
    "Your age in days is " + calcAgeInDays + " days";

// Aplication in codepen.io
var yourAgeInHours = theAgeInHours();

function theAgeInHours() {
    var yourName    = prompt("Please type your name in years");
    return yourName * 365 * 24;
}

document.getElementById("demo3").innerHTML = " Your Age In Hours = " + yourAgeInHours + " Hours";

// function with paramenters
/*
var calcDays = ageInDays(28);

function ageInDays(myAge) {
    "use strict";
    return myAge * 365; // retruns NaN if there's no var inside function
}

document.getElementById("demo4").innerHTML =
    "You age in days = " + calcDays + " days";
*/

// function with param from inside var
var calcDays    = ageInDays(); // put here the value of the var
function ageInDays(myAge) {// self defined variable
    "use strict";
    return myAge * 365;
}

document.getElementById("demo5").innerHTML =
    "Demo5: Your age is: " + ageInDays(11) + " days";

// function with multiple parameters
function sayWelcome(firstName, middleName, lastName) {
    "use strict";
    //return "Welcome " + firstName + " , How are you?"; // demo6
    return "Welcome " + firstName + " " + middleName + ", How are you today?";
}

document.getElementById("demo6").innerHTML = "Demo6: " + sayWelcome("Mahmoud");
document.getElementById("demo7").innerHTML = "Demo7: " + sayWelcome("Mahmoud");// returns undefined

// function with dynamic prompt
var calcMealsNumber    = prompt("How many persons you're?");
function mealsNumber(persons) {
    "use strict";
    return persons * 3;
}

// define the variable using prompt
var persons = prompt("How many persons you're?");

document.getElementById("demo8").innerHTML =
    "Demo8: The number of meals you can get is: " + mealsNumber(persons) + " meals";