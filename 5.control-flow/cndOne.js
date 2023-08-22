/*
We use control flow / conditional flow statements to perform different actions for diffrent decisions.
In javaScript we have following types of conditional statements:
if -- execute if the specified condition is true
else -- execute if the specified condition is false
if-else -- "if" block executed only if the specified condition is "true" otherwise "else" block will execute
switch -- The switch statement is used to perform different actions based on different conditions. To know more 
        about switch open cndTwo.js file
*/

// if statement

let hour = 17;
if(hour < 18){
    console.log("good day") 
};

// if - else statement

let hr = 19;
if( hr < 18){
    console.log("good day") 
}
else
{
    console.log("bad day")
};

// if-else if statements

let abc = 1;
if( abc < 12){
    console.log("good morning") 
}
else if(abc < 19)
{
    console.log("good evening")
}
else if(abc <= 24)
{
    console.log("good night")
}
else{
    console.log("abc value excedded 24, please make abc vlue less than 24")
}