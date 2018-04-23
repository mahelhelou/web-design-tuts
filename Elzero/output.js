/*
    Outputs in Js:
    1. alert()
    2. write(): used only for testing purposes
    3. console.log
    4. the browser: javascript:alert("hi")
*/

var name    = "Mahmoud",
    age     = 28,
    print   = document.getElementById("demo"); // for caching purposes (recommended)

print.innerHTML = ("<h1>hi</h1>");
document.write("I am waiting for you");