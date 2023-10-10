// A string can be converted to an array with the split() method:

let str  = new String("He is a boy boy.")

let newStr = str.split(" ")
console.log(newStr);




// text.split(",")    Split on commas
// text.split(" ")    Split on spaces
// text.split("|")    Split on pipe

// If the separator is omitted, the returned array will contain the whole string in index [0].

// If the separator is "", the returned array will be an array of single characters:

let str2  = new String("He is a boy boy.")

let newStr2 = str2.split("")
console.log(newStr2);

