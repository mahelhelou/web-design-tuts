// Documentation of the course

/*
	Three ways to write script in the page:
	1. inline script (within html tag)
	2. using script tag <script></script>
		a. in the head after the css files
		b. in the body anywhere
	3. in an external file
*/

// write(): used to write any thing in the web page
document.write("<h1>Hi Mahmoud</h1>");

// alert(): used to type an alert in the web page
alert("hi");

// typing within the doc
document.getElementById("demo").innerHTML = "Hi";

// declaring variables: method 1
var x = 1;
var y = 2;
var z = 3;

// declaring variable: method 2 (best practice)
var x = 1,
	y = 2,
	z = 3;

// variables are case sensitive
var name = "Mahmoud";
// doesn't equal
var Name = "Mahmoud";
// or
var nAmE = "Mahmoud";

// variables are written with camel case way
firstName = "Mahmoud";
theLastName = "El Helou";

// conditions

if (100 < 99) {
    alert("true"); // first condition almost true
} else {
    alert("false");
}