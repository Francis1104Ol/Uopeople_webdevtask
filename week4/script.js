// Select elements
const input = document.getElementById("temperatureInput");
const dropdown = document.getElementById("conversionType");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");

// Conversion Functions
function celsiusToFahrenheit(celsius) {
  return (9 / 5) * celsius + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Event Listener
button.addEventListener("click", function () {
  const value = input.value.trim();
  error.textContent = "";
  result.textContent = "";

  // Validation
  if (value === "" || isNaN(value)) {
    error.textContent = "Please enter a valid numeric temperature.";
    return;
  }

  const temp = parseFloat(value);
  const type = dropdown.value;

  let converted;

  // Control Structure
  if (type === "CtoF") {
    converted = celsiusToFahrenheit(temp);
    result.textContent = `${temp} °C = ${converted.toFixed(2)} °F`;
  } else if (type === "FtoC") {
    converted = fahrenheitToCelsius(temp);
    result.textContent = `${temp} °F = ${converted.toFixed(2)} °C`;
  }
});