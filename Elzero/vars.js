// VAriables

/*
	* Vars start with var keyword (seized by js lang)
	* Vars starts with (_) ($), letters BUT NOT Numbers (1, 2)
	* Avoid using pre defined js functions and vars names
*/

var x;
//var 1x; : false way
var $name; // correct
var firstName; // camel case is recommended
var lastName = "El Helou";

// firstName is undefined and lastName = "El Helou"

// the vars must have value to return it, if not it will return undefined
// replacing current content or add new
//document.getElementById("demo").innerHTML = "hi";
//document.getElementById("demo").innerHTML = firstName; // returns undefined
//document.getElementById("demo").innerHTML = lastName;

var oldPrice		= 100,
	newPrice 	= 88,
	theDiscount	= oldPrice - newPrice - (.01* oldPrice); // 12 - 1 = 11

document.getElementById("demo").innerHTML = theDiscount; // returns 11