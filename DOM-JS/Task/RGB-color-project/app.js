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
const copyButton = document.getElementById("copy-to-clipboard");
const radioButtonHex = document.getElementById("color-mode-Hex");
const radioButtonRGB = document.getElementById("color-mode-rgb");
const saveButton = document.getElementById("save-to-custom");
const customColors = document.getElementById("custom-colors");
const presetColor = document.getElementById("preset-colors");
const bgFileInputBtn = document.getElementById("bg-file-input-btn");
const bgFileInput = document.getElementById("bg-file-input");
const backgroundPreview = document.getElementById("background-preview");
const bgFileDeleteBtn = document.getElementById("bg-file-delete-btn");
bgFileDeleteBtn.style.display = "None";
const bgSize = document.getElementById("bg-size");
const bgRepeat = document.getElementById("bg-repeat");
const bgPosition = document.getElementById("bg-position");
const bgAttachment = document.getElementById("bg-attachment");
const bgController = document.getElementById("bg-controller");
bgController.style.display = "none";

let redColorCodeRGB = colorSliderRedLabel.textContent;
let greenColorCodeRGB = colorSliderGreenLabel.textContent;
let blueColorCodeRGB = colorSliderBlueLabel.textContent;

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function setRGBColorsToTheColorDisplayAsA_backgroundColor(
  redColorCodeRGB,
  greenColorCodeRGB,
  blueColorCodeRGB
) {
  colorDisplay.style.backgroundColor = `rgb(${redColorCodeRGB}, ${greenColorCodeRGB}, ${blueColorCodeRGB})`;
  inputRGB.value = `rgb(${redColorCodeRGB}, ${greenColorCodeRGB}, ${blueColorCodeRGB})`;
  inputHex.value = rgbToHex(
    redColorCodeRGB,
    greenColorCodeRGB,
    blueColorCodeRGB
  );
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function setHexValueToTheHexDisplayUsing_rgbToHexFunction() {
  const hex = rgbToHex(redColorCodeRGB, greenColorCodeRGB, blueColorCodeRGB);
  inputHex.value = `${hex}`;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `${r}, ${g}, ${b}`;
  return rgb;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// rgb to hex

function rgbToHex(r, g, b) {
  return ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
// hex to rgb
const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // return {r, g, b}
  return { r, g, b };
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function Adjust_RGB_Colors_levels_value_update() {
  // Adjust RGB Colors levels value update
  colorSliderRedLabel.innerText = redColorCodeRGB;
  colorSliderGreenLabel.innerText = greenColorCodeRGB;
  colorSliderBlueLabel.innerText = blueColorCodeRGB;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// copy button
function createToastMsg() {
  const div = document.createElement("div");
  div.innerText = "Copied";
  div.className = "toast-message";
}

copyButton.addEventListener("click", function () {
  checkRadioButton();
  createToastMsg();
});

function checkRadioButton() {
  if (document.getElementById("color-mode-hex").checked) {
    navigator.clipboard.writeText(`#${inputHex.value}`);
    document.getElementById("color-mode-hex").checked = false;
  } else if (document.getElementById("color-mode-rgb").checked) {
    navigator.clipboard.writeText(inputRGB.value);
    document.getElementById("color-mode-rgb").checked = false;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// save button

saveButton.addEventListener("click", function () {});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// preset work

const defaultColor = {
  red: 221,
  green: 222,
  blue: 238,
};

const defaultPresetColors = [
  "#ffcdd2",
  "#f8bbd0",
  "#e1bee7",
  "#ff8a80",
  "#ff80ab",
  "#ea80fc",
  "#b39ddb",
  "#9fa8da",
  "#90caf9",
  "#b388ff",
  "#8c9eff",
  "#82b1ff",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#80d8ff",
  "#84ffff",
  "#a7ffeb",
  "#c8e6c9",
  "#dcedc8",
  "#f0f4c3",
  "#b9f6ca",
  "#ccff90",
  "#ffcc80",
];

for (let i = 0; i < defaultPresetColors.length; i++) {
  // create div
  const div = createDiv(defaultPresetColors[i]);
  // add to the preset div
  presetColor.appendChild(div);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// div create

function createDiv(clr_hex) {
  const div = document.createElement("div");
  div.className = "color-box";
  div.style.backgroundColor = clr_hex;
  // div.setAttribute("data-color", color);
  div.addEventListener("click", function () {
    const rgb = hex2rgb(clr_hex); // return {r: 225, g: 190, b: 231}
    // display it and write it in the hex input and rgb input box
    setRGBColorsToTheColorDisplayAsA_backgroundColor(
      rgb["r"],
      rgb["g"],
      rgb["b"]
    );
    // adjust rgb colors updates with value and button
    colorSliderRed.value = `${rgb["r"]}`;
    colorSliderGreen.value = `${rgb["g"]}`;
    colorSliderBlue.value = `${rgb["b"]}`;
    colorSliderRedLabel.innerText = rgb["r"];
    colorSliderGreenLabel.innerText = rgb["g"];
    colorSliderBlueLabel.innerText = rgb["b"];
  });

  return div;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// custom color work

let countNumberOfCUSTOM_Colors = 0;
let listOfAdded_CUSTOM_Colors = [];

function checkItIsAlreadyAddedOrNot(hex) {
  if (listOfAdded_CUSTOM_Colors.indexOf(hex) === -1) {
    return true;
  }
  return false;
}

saveButton.addEventListener("click", function () {
  // convert rgb to hex
  const hex = rgbToHex(redColorCodeRGB, greenColorCodeRGB, blueColorCodeRGB);

  if (checkItIsAlreadyAddedOrNot(hex)) {
    listOfAdded_CUSTOM_Colors.push(hex);
    if (countNumberOfCUSTOM_Colors < 24) {
      // create div
      const div = createDiv(`#${hex}`);
      // set it to it's location
      customColors.appendChild(div);
      // append the hex color in the listOfAdded_CUSTOM_Colors:
      countNumberOfCUSTOM_Colors += 1;
    } else {
      customColors.removeChild(customColors.firstElementChild);
      // convert rgb to hex
      const hex = rgbToHex(
        redColorCodeRGB,
        greenColorCodeRGB,
        blueColorCodeRGB
      );
      // create div
      const div = createDiv(`#${hex}`);
      // set it to it's location
      customColors.appendChild(div);
    }
    // listOfAdded_CUSTOM_Colors.push
  } else {
    console.log("You Already Added");
  }
  console.log(listOfAdded_CUSTOM_Colors);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Background color upload and remove

const s = document.body.style.backgroundSize;
const r = document.body.style.backgroundRepeat;
const p = document.body.style.backgroundPosition;
const a = document.body.style.backgroundAttachment;

let backgroundByDefaultColorCode = document.body.style.background;

bgFileInputBtn.addEventListener("click", function () {
  bgFileInput.click();

  bgFileInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    // console.log(url);
    backgroundPreview.style.background = `url(${url})`;
    // backgroundByDefaultColorCode = document.body.style.background;
    document.body.style.background = `url(${url})`;
    // console.log(backgroundByDefaultColorCode);
    bgFileDeleteBtn.style.display = null;
    bgController.style.display = null;
  });

  bgSize.addEventListener("change", function () {
    changeBackground();
  });

  bgRepeat.addEventListener("change", function () {
    changeBackground();
  });

  bgPosition.addEventListener("change", function () {
    changeBackground();
  });

  bgAttachment.addEventListener("change", function () {
    changeBackground();
  });
});

bgFileDeleteBtn.addEventListener("click", function () {
  document.body.style.background = backgroundByDefaultColorCode;
  backgroundPreview.style.background = backgroundByDefaultColorCode;
  bgFileDeleteBtn.style.display = "None";
  bgController.style.display = "none";

  document.body.style.backgroundSize = s;
  document.body.style.backgroundRepeat = r;
  document.body.style.backgroundPosition = p;
  document.body.style.backgroundAttachment = a;
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function changeBackground() {
  document.body.style.backgroundSize = bgSize.value;
  // console.log(bgSize.value);
  document.body.style.backgroundRepeat = bgRepeat.value;
  // console.log(bgRepeat.value);
  document.body.style.backgroundPosition = bgPosition.value;
  // console.log(bgPosition.value);
  document.body.style.backgroundAttachment = bgAttachment.value;
  // console.log(bgAttachment.value);
}

// const bgSize = document.getElementById("bg-size")
// const bgRepeat = document.getElementById("bg-repeat")
// const bgPosition = document.getElementById("bg-position")
// const bgAttachment = document.getElementById("bg-attachment")
// const bgController = document.getElementById("bg-controller")
