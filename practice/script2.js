//functions
let counter = 0;

// 1) Creating the function
function increase(){
    counter++;
    console.log(counter);
    
}

function decrease(){
    counter--;
    console.log(counter);
}

// 2) call/run/execute the function

function sayHi(){
    let userName=promt("Enter your name:");

    console.log("Welcome ... " + userName);
}

function multiByThree(){
    //1. get the number from a prompt
    let number = Number (prompt("Enter the number: "));
    //2. multi teh number by 3
    let result = number*3; 
    //3. display the result on the console
    document.getElementById("total").innerHTML=result;
}
// create a function that adding up two number (get thhem from the prompt)

function addByNumbers(){

let number1= Number(prompt("Enter the first number: "));
let number2= Number(prompt("Enter the second number:"));
let sum = number1 + number2;
console.log("The sum of " + number1 + " + " + number2 + " = " + sum);
}