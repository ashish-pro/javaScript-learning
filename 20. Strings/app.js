let name = "xyz";
// console.log(name.length)
// console.log(typeof name);

const getName = new String('xyz');
 // lenght property returns the length of a string
 //console.log(getName.length);

// Extracting the string in JavaScript

// slice(start, end) ---
// slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included).
 let str = new String("RahulGandhi")
 let newStr =  str.slice(0, 4);
 console.log(newStr);

//  If you omit the second parameter, the method will slice out the rest of the string:
    let newStr2 =  str.slice(4);
    console.log(newStr2);

// If a parameter is negative, the position is counted from the end of the string:
    let newStr3 =  str.slice(-4);
    console.log(newStr3);

    let newStr4 =  str.slice(-4,-2);
    console.log(newStr4);