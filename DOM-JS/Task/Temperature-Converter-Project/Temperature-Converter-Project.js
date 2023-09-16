const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

celsius.addEventListener("input", function () {
  let celsiusInputValue = celsius.firstElementChild.value;

  let faherenhitFromCelsius = parseFloat(celsiusInputValue) * (9 / 5) + 32;
  let kelvinFromCelsius = parseFloat(celsiusInputValue) + 273.15;

  fahrenheit.firstElementChild.value = faherenhitFromCelsius;
  kelvin.firstElementChild.value = kelvinFromCelsius;
});

fahrenheit.addEventListener("input", function () {
  let fahrenheitInputValue = fahrenheit.firstElementChild.value;

  let celsiusFromFahrenheit = (5 / 9) * (parseFloat(fahrenheitInputValue) - 32);
  let kelvinFromFahrenheit =
    (5 / 9) * (parseFloat(fahrenheitInputValue) - 32) + 273.15;

  celsius.firstElementChild.value = celsiusFromFahrenheit;
  kelvin.firstElementChild.value = kelvinFromFahrenheit;
});

kelvin.addEventListener("input", function () {
  let kelvinInputValue = kelvin.firstElementChild.value;

  let celciusFromKelvin = parseFloat(kelvinInputValue) - 273.15;
  let fahrenheitFromKelvin =
    (parseFloat(kelvinInputValue) - 273.15) * (9 / 5) + 32;

  celsius.firstElementChild.value = celciusFromKelvin;
  fahrenheit.firstElementChild.value = fahrenheitFromKelvin;
});

const button = document.querySelectorAll(".button")[0];

button.firstElementChild.addEventListener("click", function () {
  celsius.firstElementChild.value = "";
  fahrenheit.firstElementChild.value = "";
  kelvin.firstElementChild.value = "";
});
