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

const passwordBox = document.getElementById("passwordBox");

lengthPassword.addEventListener("click", function () {
  document.getElementById("length-val").textContent = lengthPassword.value;
});

function passwordLengthGenerator() {
  return lengthPassword.value;
}

function genPassword(passwordLength) {
  // toast message deleted
  document.getElementById("toast").style.display = "none";

  // generate a password using the length and checkboxes.
  const passLen = passwordLength;
  let password = "";
  let i = 0;
  while (i < passLen) {
    if (symbolCheckbox.checked) {
      password =
        password +
        keys["symbol"][Math.floor(Math.random() * keys["symbol"].length)];
    }

    if (numberCheckbox.checked) {
      password =
        password +
        keys["number"][Math.floor(Math.random() * keys["number"].length)];
    }

    if (lowerCaseCheckbox.checked) {
      password =
        password +
        keys["lowerCase"][Math.floor(Math.random() * keys["lowerCase"].length)];
    }

    if (upperCaseCheckbox.checked) {
      password =
        password +
        keys["upperCase"][Math.floor(Math.random() * keys["upperCase"].length)];
    }
    i++;
  }

  // show the password in the "passwordBox"
  if (password.length === passLen) {
    // console.log(password);
    // console.log(password.length);
    passwordBox.textContent = password;
  } else {
    password = password.slice(0, passLen);
    // console.log(password);
    // console.log(password.length);
    passwordBox.textContent = password;
  }
}

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.textContent);
  // console.log(passwordBox.textContent);
  if (passwordBox.textContent === "") {
    alert("Before generating the password, You can't able to copy it.");
  } else {
    document.getElementById("toast").style.display = null;
    // console.log(document.getElementsByTagName("i")[0]);
  }
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
    // console.log(passwordLength);

    genPassword(passwordLength);
  }
}
