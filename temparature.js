function convertTemperature() {
    const temperatureInput = document.getElementById("celsius");
    const resultElement = document.getElementById("result");

    if (temperatureInput.value !== "") {
        const celsius = parseFloat(temperatureInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `${fahrenheit.toFixed(2)} °F`;
    } else {
        resultElement.textContent = "Please enter a temperature in Celsius.";
    }
}
