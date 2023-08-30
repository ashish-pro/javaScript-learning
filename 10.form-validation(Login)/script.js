let username = document.getElementById("username");
let password = document.getElementById("password");

let flag = 1;

function valiidateForm(){
    if(username.value == ""){
        document.getElementById("userError").innerHTML = "User name is Empty";
        flag = 0;
    }else if(username.value.length < 3){
        document.getElementById("userError").innerHTML = "User name required minimun 3 character";
        flag = 0;
    }else{
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }
    if(password.value == ""){
        document.getElementById("passError").innerHTML = "Password is Empty";
        flag = 0;
    }else{
        document.getElementById("passError").innerHTML = "";
        flag = 1;
    }
   if(flag == 1){
    return true;
   }else{
    return false;
   }
}

