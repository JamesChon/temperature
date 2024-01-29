function convertTemperature() {
    // Prompt the user for input and store it in the 'temperature' variable
    var temperatureInCelsius = parseFloat(prompt("Enter temperature in Celsius:"));

    // Convert Celsius to Fahrenheit using the formula
    var temperatureInFahrenheit = (temperatureInCelsius * 9/5) + 32;

    // Display the converted temperature
    console.log("Temperature in Fahrenheit: " + temperatureInFahrenheit.toFixed(2));

    // Update the result display
    var resultMessage = "The conversion of Celsius " + temperatureInCelsius.toFixed(2) + " to Fahrenheitis " + temperatureInFahrenheit.toFixed(2) + " °F";
    document.getElementById("result").innerText =resultMessage;
}