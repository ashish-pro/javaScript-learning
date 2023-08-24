// for loop syntax:
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }


/* The code is using a for loop to print the numbers 1 to 10. */
for(let i=1; i<=10; i++){
    console.log(i)
};

/* The code is using a for loop to print the multiplication table for the number 5. It iterates from 1
to 10 and for each iteration, it prints the value of `i` (the current iteration) and the result of
multiplying `i` by 5. */
for(let i =1; i<=10;i++){
    console.log("5 * ",i," = ",i*5)

};


// for(;;){
//     console.log("gm")
// }
// To stop infinite loop program press ctrl+c


/*
String Literal: Reading variables in the form of string
 ${}
 The above five tables can be written with the help of string literals and this concept is introduced
 in ES-6
*/

for(let i =1; i<=10;i++){
    console.log(`5 * ${i} = ${i*5}`)     // reading variable as string

};

