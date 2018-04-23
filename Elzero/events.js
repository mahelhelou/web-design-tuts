window.ondblclick = function () {
	"use strict";
	document.getElementById("demo").innerHTML = "Hello New Browser!";
};

/*
	Events:
	onclick, onload, ondbclick...
*/

function singleClick() {
	"use strict";
	document.getElementById("demo2").innerHTML = "Single Click";
}

function dblClick() {
	"use strict";
	document.getElementById("demo3").innerHTML = "Double Click";
}

// practical Example
var myInput	= document.getElementById('input'),
	myDiv	= document.getElementById("div");

function usdToShekel() {
	"use strict";
	myDiv.innerHTML	= myInput.value * 3.5;
}