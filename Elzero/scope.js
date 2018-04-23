/*global console, alert, prompt*/

// Scope: Global & Local Vars

var x = 1; // global because outside a function

function changeXTo2() {
    "use strict";
    var x = 2; // local
}

function changeXTo3() {
	"use strict";
	x = 3; // to make the var global just remove the var keyword
}

console.log(x);

changeXTo2(); // call the function to reset the value of x

console.log(x);

changeXTo3();

console.log(x);