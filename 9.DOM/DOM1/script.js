/**
 * The function "display" alerts a message when called.
 */
// function display(){
//     alert("your clicks are working")
// }



/* The code is selecting an HTML element with the id "abc" using the `getElementById` method and
assigning it to the variable `ref`. Then, it sets the innerHTML property of the selected element to
the string "This line is written with the help of javaScript". This will change the content of the
HTML element with the id "abc" to the specified string. */
// let ref = document.getElementById("abc")
// ref.innerHTML = "This line is written with the help of javaScript"


// let a = document.querySelector("#xyz")
// a.innerHTML="Kat gaya tumhara LOL"

function change_Name(){
    document.querySelector("#xyz").innerHTML="Kat Gaya Tumhara LOL"
    document.querySelector("#xyz").style.backgroundColor = "yellow"
    document.querySelector("#xyz").style.color = "black"

}