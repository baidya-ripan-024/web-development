const temperature = document.getElementById("tempInput");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");

let temp;

function convertTemperature() {
    temp = Number(temperature.value);

    if(toFahrenheit.checked) {
        let celsius = (temp - 32) * 5 / 9;
        result.textContent = `Converted to Celsius: ${celsius.toFixed(2)} °C`;
    } else if (toCelsius.checked) {
        let fahrenheit = (temp * 9 / 5) + 32;
        result.textContent = `Converted to Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    } else {
        result.textContent = "Please select a unit.";
    }
}