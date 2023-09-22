const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "@#$%^&*()_+~|}{[]></-=",
};

const symbolCheckbox = document.getElementById("symbol");
const numberCheckbox = document.getElementById("number");
const lowerCaseCheckbox = document.getElementById("lowerCase");
const upperCaseCheckbox = document.getElementById("upperCase");

const lengthPassword = document.getElementById("length");

lengthPassword.addEventListener("click", function () {
  document.getElementById("length-val").textContent = lengthPassword.value;
});

function passwordLengthGenerator() {
  return lengthPassword.value;
}

function genPassword() {
  // generate a password using the length and checkboxes.
  // show the password in the "passwordBox"
}

function createPassword() {
  // console.log("Clicked");
  // console.log(symbolCheckbox.checked);
  // console.log(numberCheckbox.checked);
  // console.log(lowerCaseCheckbox.checked);
  // console.log(upperCaseCheckbox.checked);
  // console.log(false + false + false + false);
  if (
    symbolCheckbox.checked +
      numberCheckbox.checked +
      lowerCaseCheckbox.checked +
      upperCaseCheckbox.checked ===
    0
  ) {
    alert("Please select atleast one checkbox");
  } else {
    // it means she/he select atleast one checkbox

    // know the length of a password
    const passwordLength = passwordLengthGenerator();
    console.log(passwordLength);

    genPassword();
  }
}
