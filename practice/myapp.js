// DB information
let userDB = "chon";
let passDB = "qwerty";


function login(){
    // 1) get the username and password from prompt
    let userName = prompt("Enter your username:");
    let userPassword = prompt("Enter your password:");
    console.log(userName, userPassword);

    // 2) compare the passDB with the variable
    if(userName === userDB && userPassword === passDB){
        document.getElementById("notifications").innerHTML = "<p> Welcome to Canvas! </p>";
    }
    else{
        document.getElementById("notifications").innerHTML = "<p class='alert-error'> Invalid username or password </p>";
    }

    // 3) display on the HTML welcome to the system or invalid credentials
}