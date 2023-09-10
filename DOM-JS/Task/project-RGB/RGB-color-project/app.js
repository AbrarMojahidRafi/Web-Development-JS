const generateRandomColor = document.getElementById("generate-random-color");
const colorDisplay = document.getElementById("color-display");
const inputHex = document.getElementById("input-hex");
const inputRGB = document.getElementById("input-rgb");
const colorSliderRedLabel = document.getElementById("color-slider-red-label");
const colorSliderGreenLabel = document.getElementById(
  "color-slider-green-label"
);
const colorSliderBlueLabel = document.getElementById("color-slider-blue-label");
const colorSliderRed = document.getElementById("color-slider-red");
const colorSliderGreen = document.getElementById("color-slider-green");
const colorSliderBlue = document.getElementById("color-slider-blue");

let redColorCodeRGB = colorSliderRedLabel.textContent;
let greenColorCodeRGB = colorSliderGreenLabel.textContent;
let blueColorCodeRGB = colorSliderBlueLabel.textContent;

//////////////////////////////////////////////////////////////////////////

function setRGBColorsToTheColorDisplayAsA_backgroundColor(
  redColorCodeRGB,
  greenColorCodeRGB,
  blueColorCodeRGB
) {
  colorDisplay.style.backgroundColor = `rgb(${redColorCodeRGB}, ${greenColorCodeRGB}, ${blueColorCodeRGB})`;
  inputRGB.value = `rgb(${redColorCodeRGB}, ${greenColorCodeRGB}, ${blueColorCodeRGB})`;
}

//////////////////////////////////////////////////////////////////////////

function setHexValueToTheHexDisplayUsing_rgbToHexFunction() {
  const hex = rgbToHex(redColorCodeRGB, greenColorCodeRGB, blueColorCodeRGB);
  inputHex.value = `${hex}`;
}

//////////////////////////////////////////////////////////////////////////

generateRandomColor.addEventListener("click", function () {
  // Create RGB, and show it in the RGB's box
  const rgbColors = rgbColorGenerator().split(", ");
  redColorCodeRGB = rgbColors[0];
  greenColorCodeRGB = rgbColors[1];
  blueColorCodeRGB = rgbColors[2];
  setRGBColorsToTheColorDisplayAsA_backgroundColor(
    redColorCodeRGB,
    greenColorCodeRGB,
    blueColorCodeRGB
  );

  // Convert RGB to Hexadecimal, and show it in the Hexadecimal's box
  setHexValueToTheHexDisplayUsing_rgbToHexFunction();

  Adjust_RGB_Colors_levels_value_update();
  // As far as the RGB color is generated, the slider value will be changed.
  colorSliderRed.value = `${redColorCodeRGB}`;
  colorSliderGreen.value = `${greenColorCodeRGB}`;
  colorSliderBlue.value = `${blueColorCodeRGB}`;
});

//////////////////////////////////////////////////////////////////////////

// Input color slider listener
colorSliderRed.addEventListener("input", function () {
  redColorCodeRGB = this.value;
  // console.log(this.value);
  setRGBColorsToTheColorDisplayAsA_backgroundColor(
    redColorCodeRGB,
    greenColorCodeRGB,
    blueColorCodeRGB
  );
  Adjust_RGB_Colors_levels_value_update();
  setHexValueToTheHexDisplayUsing_rgbToHexFunction();
});
/////////////////////////
colorSliderGreen.addEventListener("input", function () {
  greenColorCodeRGB = this.value;
  // console.log(this.value);
  setRGBColorsToTheColorDisplayAsA_backgroundColor(
    redColorCodeRGB,
    greenColorCodeRGB,
    blueColorCodeRGB
  );
  Adjust_RGB_Colors_levels_value_update();
  setHexValueToTheHexDisplayUsing_rgbToHexFunction();
});
/////////////////////////
colorSliderBlue.addEventListener("input", function () {
  blueColorCodeRGB = this.value;
  // console.log(this.value);
  setRGBColorsToTheColorDisplayAsA_backgroundColor(
    redColorCodeRGB,
    greenColorCodeRGB,
    blueColorCodeRGB
  );
  Adjust_RGB_Colors_levels_value_update();
  setHexValueToTheHexDisplayUsing_rgbToHexFunction();
});

//////////////////////////////////////////////////////////////////////////

function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `${r}, ${g}, ${b}`;
  return rgb;
}

//////////////////////////////////////////////////////////////////////////

function rgbToHex(r, g, b) {
  return ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

//////////////////////////////////////////////////////////////////////////

function Adjust_RGB_Colors_levels_value_update() {
  // Adjust RGB Colors levels value update
  colorSliderRedLabel.innerText = redColorCodeRGB;
  colorSliderGreenLabel.innerText = greenColorCodeRGB;
  colorSliderBlueLabel.innerText = blueColorCodeRGB;
}

//////////////////////////////////////////////////////////////////////////
