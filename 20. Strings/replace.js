// The replace() method replaces a specified value with another value in a string:
// The replace() method does not change the string it is called on.

// The replace() method returns a new string.

// The replace() method replaces only the first match

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

// By default, the replace() method replaces only the first match:

let str  = new String("He is a boy boy.")

//  Replace first boy with bad

let newStr = str.replace("boy","bad");
console.log(newStr);



//  ReplaceAll() --replaceAll() is an ES2021 feature. replaceAll() does not work in Internet Explorer.
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

let newStr2 = str.replaceAll("boy","bad")
console.log(newStr2);
