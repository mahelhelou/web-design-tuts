/*global
    console,
    alert,
    prompt,
    sayWow
*/
// functions in the global called without ()

// In js, functions arrangment is indifferent
/*
sayWow();

function sayWow() {
    "use strict";
    alert("Wow"); // must be put in the global rules in brackets
}

sayWow();
*/

// self invoke functions are used for dynamic changes (GoDaddy domain prices!)

// example about self invoke funtion
/*
(function sayWelcome() {
    "use strict";
    alert("Welcome Man");
})();
*/

// or best practice
/*
(function sayWelcome() {
    "use strict";
    alert("Welcome Man");
}());
*/

// currency price
/*
function dollarToShekel(amount) {
    "use strict";
    var result = amount * 3.5;
    return alert(result);
}

dollarToShekel(100);
*/

// result in id demo
function dollarToShekel(amount) {
    "use strict";
    var amount = document.getElementById("dollar").value,
        result = amount * 3.5;
    //alert(amount + " of dollars is equal to: " + result + " Shekels");
    // typing the result in demo
    var msg = document.getElementById("demo");
    //msg.innerHTML = amount + " of dollars is equal to: " + result + " Shekels";
    
    // check the data types in the input field
    if (amount === "") {
        msg.innerHTML = "this field can't be empty";
    } else if (isNaN(amount)) {
        msg.innerHTML = "this field accepts numbers only";
    } else if (amount === "0") {// because input type is text
        msg.innerHTML = "the value must not be 0";
    } else if (amount < 0) {
        msg.innerHTML = "the value must not be negative";
    } else {
        msg.innerHTML = amount + " of dollars is equal to: " + result + " Shekels";
    }
}

