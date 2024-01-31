// function convertTemperature() {
//     // Prompt the user for input and store it in the 'temperature' variable
//     let temperatureInCelsius = Number(prompt("Enter temperature in Celsius:"));

//     // Convert Celsius to Fahrenheit
//     let temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;
    

//     // Display the converted temperature
//     console.log("Temperature in Fahrenheit: " + temperatureInFahrenheit.toFixed(2));

//     // Update the result display
//     let result = "The conversion of Celsius " + temperatureInCelsius.toFixed(0) + "°" + " to Fahrenheit is " + temperatureInFahrenheit.toFixed(1) + " °F";
//     document.getElementById("result").innerText = result;
// }

function convertTemperature() {
    // Get user input
    let userInput = Number(document.getElementById("temperature").value);
    let scale = document.getElementById("scale").value;
    
    // Check the scale parameter
    if (scale === "C") {
    
    // Convert Celsius to Fahrenheit
    let convertedTemperature = (userInput * 9/5) + 32;
    document.getElementById("result").innerHTML = userInput +  "°" + " Celsius is equal to " + convertedTemperature.toFixed(1) + "°" + " Fahrenheit.";
    } else if (scale === "F") {

    // Convert Fahrenheit to Celsius
    let convertedTemperature = (userInput - 32) * 5/9;
    document.getElementById("result").innerHTML = userInput + "°" + " Fahrenheit is equal to " + convertedTemperature.toFixed(1) +  "°" + " Celsius.";
    } 
}