/*jslint plusplus: true, evil: true, continue: true*/
/*global console*/

// Loops

/*
	syntax:
	for (initialization, condition, final expression) {
		// code is here;
	}
	
	initialization: excuted at least once
	condition: must be set all the time
	final expression: excuted everytime the code run
*/

// you're learning the best practices of writing loop statements

var i;
for (i = 1; i <= 10; i += 1) {
	// i++ is a bad thing, just use i += 1;
	console.log(i);
}

var friends	= [
	"Mahmoud",
	"Hala",
	"Ayah",
	"Sama",
	"Abeer",
	"Suad",
	"Nour",
	"Sohad"
];

var a;

for (a = 0; a < friends.length - 1; a += 1) {
	console.log(friends[a]);
}


// For/In loop

/*
	syntax:
	for(variable in object) {
	// code;
	}
*/

// setting the object
var myCar	= {
	color: "black",
	price: "50,000",
	model: "2015",
	type: "Binz"
};

console.log(typeof (myCar));

var prop; // prop is a normal variable, not linked to the object as a property!!
for (prop in myCar) {
	
	// to avoid any error in the code!
	if (myCar.hasOwnProperty(prop)) {
		console.log(prop + ": " + myCar[prop]);
	}
}

var i = 0;
for (;;) {
	if (i > 11) {
		break;
	}
	console.log(i);
	i += 1;
}


// create a loop for years

function generateYears(start, end) {
	"use strict";
	var years;
	
	document.write("<select>");
	
	for (years = start; years <= end; years += 1) {
		//console.log(years);
		document.write("<option>" + years + "</option>");
	}
	
	document.write("</select>");
}

generateYears(1930, 2018);


// while loop
/*
	syntax:
	while (condition) {
	// statement
	}
*/

var i = 0;
while (i <= 10) {
	console.log(i);
	i += 1; // or i++;
}


// use the generateYears example using while loop
function generateYears(start, end) {
	"use strict";
	var years = start;
	
	document.write("<select>");
	
	while (years <= end) {
		//console.log(years);
		document.write("<option>" + years + "</option>");
		years += 1;
	}
	
	document.write("</select>");
}

generateYears(2000, 2010);


// Using Do While Loop
console.log("Do while starts here");
var i = 0;
do {
	console.log(i);
	i += 1;
} while (i <= 10);

/*
	The difference between while and do while?
	* In while, the condition set at the begining
	* In do while, the condition is set at the end
*/


// Using do while in generateYears example
function generateYears(start, end) {
	"use strict";
	var years = start;
	
	document.write("<select>");
	
	do {
		//console.log(years);
		document.write("<option>" + years + "</option>");
		years += 1;
	} while (years <= end);
	
	document.write("</select>");
}

generateYears(1990, 2018);


// Loop Control


// break
console.log("this will break in the number 4 and wont continue to 10");
var i;
for (i = 1; i < 10; i++) {
	
	if (i === 4) {
		break;
	}
	console.log(i);
	i++;
}

// continue
console.log("continue will omit 4 and go to 5 after 3");
var i;
for (i = 1; i < 10; i++) {
	
	if (i === 4) {
		continue;
	}
	console.log(i);
}