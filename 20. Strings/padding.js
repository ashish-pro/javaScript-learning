// ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to 
// support padding at the beginning and at the end of a string.

// JavaScript String padStart()
// The padStart() method pads a string from the start.

// It pads a string with another string (multiple times) until it reaches a given length.

let str = new String("hello")
console.log(str.length)
// Padding of 5 white spaces at starting
let newStr = str.padStart(10," ");
console.log(`The new String with padding is : ${newStr} and length of string is : ${newStr.length}`);

// JavaScript String padEnd()
// The padEnd() method pads a string from the end.

// It pads a string with another string (multiple times) until it reaches a given length.

let str2 = new String("hello")
console.log(str2.length)
// Padding of 5 white spaces at starting
let newStr2 = str2.padEnd(10," ");
console.log(`The new String with padding is : ${newStr2} and length of string is : ${newStr2.length}`);


