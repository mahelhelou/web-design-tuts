/*global console*/

// converting anything to string or dealing with string itself

var myString	= "I love \"Javascript\"";
console.log(myString);
console.log(typeof (myString));
console.log(myString.length);

// convert numbers to string
var myNumber = 100;

console.log(myNumber);
console.log(typeof (myNumber));

var newNumber = myNumber.toString();
console.log(typeof (newNumber));

// indexof => locate

var theString = "I am in love with javascript";
console.log(theString);

var theWord = theString.indexOf("love");
console.log(theWord);


// indexof with starting point

var loveCoding	= "I am in love with javascript and in love with php";
console.log(loveCoding);

/*var findLove	= loveCoding.indexOf("love", 18);
// start search about love word from the index 18
console.log(findLove);*/

// decending search
var lastLove	= loveCoding.lastIndexOf("love", 18);
console.log(lastLove);

var lastLove	= loveCoding.lastIndexOf("love", 38);
console.log(lastLove);


// search and regular expressions

/*
var searchLove	= loveCoding.search("love");
console.log(searchLove);
*/

var searchLove	= loveCoding.search("Love");
console.log(searchLove);
// will return (-1) because the letters in search function is case sensitive

// we use regular expressions in this case
var searchLove	= loveCoding.search(/LoVe/i);
// i: stands for case (i)n sensitive
console.log(searchLove);


// Split method

/*
	SYNTAX:
	splict( separator, limit);
*/

var outSplit	= "I love javascrpt and json",
	withSplit	= outSplit.split("a");
// the default separator is (" "), which generates (,) between objects
// default limit is 0: generates all available separators

console.log(outSplit);
console.log(withSplit);

// split converts normal string into array

// slice
/*
	SYNTAX
	slice(start, end);
	start: mandatory
	end: optional
	* if the start isn't setted, the slice method wont work
*/
var outSlice	= "give me more big fish and rice",
	withSlice	= outSlice.slice(2, 6),
	withFish	= outSlice.slice(17, 21), // generates fish word
	getLastChar	= outSlice.slice(-1),
	lastChars	= outSlice.slice(-4);

console.log(withSlice);
console.log(withFish);
console.log(getLastChar);
console.log(lastChars);
// Substring => I want a different explanation


// Find & Replace String in JavaScript

// charAt()
var loveJavaScript	= "I love javascript & all programming langs",
	findChar		= loveJavaScript.charAt(0), // 0 index: first char
	findFirstV		= loveJavaScript.charAt(4), // get the letter v
	findLastChar	= loveJavaScript.charAt(loveJavaScript.length - 1),
	withReplace		= loveJavaScript.replace("javascript", "jquery");

console.log(findChar);
console.log(findFirstV);
console.log(findLastChar);

console.log(loveJavaScript.length);

// charCodeAt => search about it!! Didn't understood!

// replace(firstValue, secondValue);
console.log(withReplace);

// learn about regular expressions


// Concatenation:

var theMsg	= "I love",
	msg2	= "Javascript",
	msg3	= "and php";

console.log(theMsg.concat(" ", msg2, msg3, " "));


// Uppercase and Lowercase

var sen0	= "I LOve JAvasCript",
	normalSen	= sen0.toLocaleLowerCase(),
	capitalSen	= sen0.toUpperCase();

console.log(normalSen);
console.log(capitalSen);


// Trim: eleminate the white spaces in the sentences

var sen1	= " I love you so much     Hala		";
console.log(sen1.trim());
// it eleminates the white spaces only in the begining / end of the sentence

var sen2	= "google";
console.log("go to: " + sen2.link("http://www.google.com"));

// learn chain

