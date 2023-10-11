// Dates 

let myDate = new Date();

// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toLocaleString());

// console.log(typeof myDate)


let crtDate = new Date(2023,0,23);

let crtDate2 = new Date(2023,0,23,5,32,10);
console.log(crtDate.toLocaleString());
console.log(crtDate2.toLocaleString());

// ------------------------------------------------------

let myTimestamp = Date.now();

console.log(myTimestamp);

console.log(crtDate2.getTime());

// time in seconds

console.log(Math.floor(Date.now()/1000));


//  Mostly used toLocaleString()--