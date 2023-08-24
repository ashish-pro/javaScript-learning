/*
The while loop loops through a block of code as long as a specified condition is true.
Syntax: 
while (condition) {
    // code block to be executed
  }
*/

/* The code is using a while loop to print the numbers from 10 to 1 in descending order. It starts with
the variable `i` initialized to 10. The loop continues as long as `i` is greater than or equal to 1.
Inside the loop, the current value of `i` is printed using `console.log()`, and then `i` is
decremented by 1. This process continues until `i` becomes less than 1, at which point the loop
terminates. */
let i = 10;
while(i>=1){
    console.log(i)
    i--
}