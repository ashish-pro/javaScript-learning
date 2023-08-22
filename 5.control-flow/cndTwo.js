// Use the switch statement to select one of many code blocks to be executed.
// Syntax

// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

//   This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// The getDay() method returns the weekday as a number between 0 and 6.

// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
    case 6:
      console.log("Today is Saturday");
      break;
    case 0:
        console.log("Today is Sunday");
      break;
    default:
        console.log("Looking forward to the Weekend");
  }