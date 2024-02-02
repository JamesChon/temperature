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


// Assignment 3

function convertTemperature() {
    // Get user input
    const userInput = Number(document.getElementById("temperature").value);
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

function convertTemperatureRange(startValue, endValue, scale) {
    for (let temperature = startValue; temperature <= endValue; temperature++) {
        let convertedTemperature;

        if (scale === "C") {
            convertedTemperature = (temperature * 9/5) + 32;
            document.write(`<p>${temperature}°C is ${convertedTemperature.toFixed(1)}°F</p>`);
        } else if (scale === "F") {
            convertedTemperature = (temperature - 32) * 5/9;
            document.write(`<p>${temperature}°F is ${convertedTemperature.toFixed(1)}°C</p>`);
        }
    }
}

// Get user inputs
const startTemperature = Number(prompt("Enter the starting temperature:"));
const endTemperature = Number(prompt("Enter the ending temperature:"));
const temperatureScale = prompt("Enter the temperature scale (C for Celsius, F for Fahrenheit):").toUpperCase();

// Call the function with user inputs
convertTemperatureRange(startTemperature, endTemperature, temperatureScale);
