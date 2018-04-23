/*global console, alert, prompt, array*/

// Array

// 1. constractor way: not recommended!

/*
var friend1	= "Mahmoud",
	friend2	= "Ahmed",
	friend3	= "Mohammed",
	friend4	= "Islam",
	friend5	= "Abdallah";
*/
var friends = new Array();

friends[0] = "Mahmoud";
friends[1] = "Ahmed";
friends[2] = "Mohammed";
friends[3] = "Islam";
friends[4] = "Abdallah";

console.log(friends);

// constructor way: another methods
var cars	= new Array("BMW", "Binz", "KIA", "OPEL", "SHABA7");

console.log(cars);

// or: write more readable code
var fruits	= new Array(
	"Banana",
	"Apple",
	"Kiwi",
	"Peach",
	"Grapes"
	);

console.log(fruits);

// literal way
var lovers	= [];
lovers[0]	= "Hala";
lovers[1]	= "Huda";
lovers[2]	= "Sohad";
lovers[3]	= "Nour";
lovers[4]	= "Ayah";

console.log(lovers);

// literal: another method
var myFriends	= ["Absi", "Hindi", "Ajour"];
console.log(myFriends);

/*
	Notes:
	* array syntax: var arrayName	= ["element1", "element2, "element3", ...];
	* array is zero index based! element1 is 0 index
*/

// check if the var is Array or not? this is useful for loops
if (Array.isArray(lovers)) {
	console.log("good");
} else {
	console.log("bad");
}

// anothe way of checking
if (lovers.constructor === Array) {
	console.log("good boy");
} else {
	console.log("bad boy");
}

// Know the length of the array

var hiMsg	= "Hi Mahmoud , How are you tody?";
console.log(hiMsg.length + " : " + "the number of " + hiMsg + " is " + hiMsg.length + " letters");

console.log(lovers.length);

// convert Array to string
lovers = lovers.toString();
console.log(lovers);

var theDate	= new Date(),
	stringDate	= theDate.toString(),
	localeDate	= theDate.toLocaleDateString();

console.log(theDate);
console.log(stringDate);
console.log(localeDate);

// using join method
// by defeault will put , between elements
/*friends	= friends.join();*/


friends = friends.join(" * ");
console.log(friends);

// add elements to the array

console.log(cars.length); // returns 5
cars[5] = "FORD";
console.log(cars); // returns 5 + the new = 6

// or: another way
cars[cars.length] = "Mitsubishi";
console.log(cars);

// adding to the end of the array
cars.push("Chevrolett");
console.log(cars);

// adding to the begining of the array
cars.unshift("Mazda");
console.log(cars);


// deleting / adding to the array
// we use splice for adding & deleting

/*
	Splice Syntax
		arrayName.splice(index, how many, item1, item2, item3)
		index:			will start from the givin value
		how many:		how many items you want to delete?
		item1, item2,..	optional values	
*/

// deleting example

cars.splice(2, 2); // will start deleting from the index 2 (will delete 2 items)
console.log(cars);

// adding example
cars.splice(0, 0, "King", "Magnum");
console.log(cars); // start adding from index 0 and will add 2 items
// the second (0: zero) is because we want to add not to delete!

// deleting from the array using pop and shift

// deleting the last item
cars.pop();
console.log(cars);

// deleting the first item
cars.shift(cars);
console.log(cars);

// sorting data in array

// sort: sorting alphaptically ( A - Z)
cars.sort();
console.log(cars);

// reverse: sorting from ( Z - A )
cars.reverse(cars);
console.log(cars);


// slicing the array 
/*
	Slicing Syntax:
		arrayName.slice(start, end);
		start is MUST be determined
		end isn't!
*/

var slicedCars	= cars.slice(2); // will cut from index 2 to the end
console.log(slicedCars);
var slicedCars	= cars.slice(0, 4); // start from first item to before item 5
console.log(slicedCars);

// combining arrays

var oldLovers	= [
	"Beso",
	"Sanabel",
	"Siwar",
	"Nourhan"
];

console.log(lovers.concat(oldLovers));

var workLovers	= [
	"Alaa",
	"Mona",
	"Asmaa"
];

var allLovers	= lovers.concat(oldLovers, workLovers);
console.log(allLovers);

// Searching in the array

var aunts	= [
	"Nahla",
	"Khairia",
	"Amal",
	"Fwzeya",
	"Maha", // index 4
	"Najwa",
	"Fadwa"
];

var favAunt	= aunts.indexOf("Maha");
console.log(favAunt);

// you can set a start point to search from: indexOf("value", start index)
// if the value isn't available it will return (-1)
// lastIndexOf("value" index start point): use the same index but will search from the bottom

// or: another way
console.log(aunts[4]);

// why this is useful?
// you can set color for the word in any line in the page