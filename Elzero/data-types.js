// Data Types in Js

/*
    1. Boolean: accepts true and false only
    2. Array: ["facebook", "twitter", "linkedin"]
    3. Object: {firstName: "Mahmoud", lastName: "El Helou"}
    4. String: just take care about single and double quotes
    5. Number: use numbers without quotes
    6. Undefined: the default data type
    7. Null
    8. NaN : not a number
    9. Symbol
*/

// to know the data type, just type in the console typeof varName

// Boolean Example
var mainPrice   = 450,
    hasDiscount = false;

if (hasDiscount === true) {
    var mainPrice = 300; // rather than 450
} else {
    var mainPrice = 450;
}
document.getElementById("demo").innerHTML = mainPrice;

// Array Example
var socialWebsites = ["www.facebook.com", "www.twitter.com", "linkedin.com"];

document.getElementById("demo").innerHTML = socialWebsites[1];

// Object Example
var myInfo = {
    firstName: "Mahmoud",
    lastName: "El Helou" // the last object value is empty of ,
}; // at the end there's a simi colon ;

document.getElementById("demo").innerHTML = myInfo.firstName;