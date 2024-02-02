let number = 100;

while (number<=100){
    console.log(number);
    number=number+10; 
}


let number2=0;
console.log("------- Do Loop -------")
do{
    console.log(number2);
    number2=number2+10;
}while(number2<=100);

console.log("------- For Loop -------")
for(let i=10; i<=100; i+=10){
console.log(i);
}

let myArray = ["George", "Andrew", "Daniel", "Ricardo", "James", "Fernanda", "Rami", "Roneisha", "Guillermo", "Philip"];

for(let i=0; i<myArray.length;i++){
    document.write(`
        <p>${myArray[i]} </p>
    `);
}

// from 1 to 10; the result of multiply by 3

// 1 x 3 = 3




function multiply(number,msg){
    document.write(`----- ${msg} ----- ${number}`);
    for(let i = 1; i <= 10; i++){
        document.write(`<p>${i} x ${number}</p>`);
    }
}

multiply(1,"Multi");
multiply(2,"Mult");




// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");

//     } else if (i % 3 === 0) {
//         console.log("Fizz");

//     } else if (i % 5 === 0) {
//         console.log("Buzz");

//     } else {
//         console.log(i);
//     }
// }

