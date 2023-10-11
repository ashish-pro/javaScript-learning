console.log(Math);

// abs(x) --- Returns the absolute value of x
console.log("abs(-4) :- ", Math.abs(-4))
console.log("abs(6) :- ", Math.abs(6))

// round(x) -- The Math.round() method rounds a number to the nearest integer

console.log("round(3.56) :- ", Math.round(3.56))
console.log("round(2.48) :- ", Math.round(2.48))


// floor(x) -- The Math.floor() method rounds a number DOWN to the nearest integer.

console.log("floor(0.60) :- ",Math.floor(0.60))
console.log("floor(0.40) :- ",Math.floor(0.40))
console.log("floor(5) :- ",Math.floor(5))
console.log("floor(-5.9) :- ",Math.floor(-5.9))
console.log("floor(-5.1) :- ",Math.floor(-5.1))


// ceil(x) -- The Math.ceil() method rounds a number rounded UP to the nearest integer.

console.log("ceil(0.60) :- ",Math.ceil(0.60))
console.log("ceil(0.40) :- ",Math.ceil(0.40))
console.log("ceil(5) :- ",Math.ceil(5))
console.log("ceil(-5.9) :- ",Math.ceil(-5.9))
console.log("ceil(-5.1) :- ",Math.ceil(-5.1))


// sqrt(x) -- The Math.sqrt() method returns the square root of a number.

console.log("sqrt(9) :- ",Math.sqrt(9))
console.log("sqrt(8) :- ",Math.sqrt(8))

// pow(x, y) -- The Math.pow() method returns the value of x to the power of y (x^y).

console.log("pow(4,3) :- ",Math.pow(4, 3));

// max(n1,n2,.....) -- The Math.max() method returns the number with the highest value.

console.log("max(4,3,12,18,36,-8,13) :- ",Math.max(4, 3,12,18,36,-8,13));


// min(n1,n2,.....) -- The Math.min() method returns the number with the lowest value.

console.log("min(4,3,12,18,36,-8,13) :- ",Math.min(4, 3,12,18,36,-8,13));


// random() -- The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).

console.log("Math.random() :- ",Math.random());

console.log("Math.random()*10 + 1 :- ",Math.random()*10 + 1);

console.log("Math.floor((Math.random()*10) + 1) :- ",Math.floor((Math.random()*10) + 1));

// Generate a random value between 10 to 20

let min = 10

let max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);



