/*global console*/

// Math Methods

// ceil: give me the top number of specif float number!!

var x = Math.ceil(8.00008);
var y = Math.ceil(-4.999);
var z = Math.ceil(1 - 0.999999);
console.log(x);
console.log(y);
console.log(z);

// floor: eskhato ard ard
var a = Math.floor(8.999);
var b = Math.floor(-4.000001);
var c = Math.floor(1 - 0.000001);
console.log(a);
console.log(b);
console.log(c);

// round: to the nearest
var d = Math.round(4.49999);
var e = Math.round(1.5);
console.log(d);
console.log(e);


// min and max

var f = Math.min(11, 118, 8383, -83838.1, 0.3, -10000);
// or max
console.log(Math.floor(Math.round(f) + 1.44));


// random: generates random numbers from 0 to 1
var g = Math.random();
console.log(Math.floor(g * 10) + 1);