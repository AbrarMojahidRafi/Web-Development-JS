const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  XXX: 30,
  XX: 20,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  console.log("clicked");
  // get the value of input
  inputValue = input.value;
  console.log(inputValue, typeof inputValue);

  let s = "";
  // loop: into the dictionary
  for (var i = inputValue.length - 1; i >= 0; i++) {
    iv = Number(inputValue[i]);
    for (let key in romanObject) {
      if (iv == romanObject[key]) {
        s = key + s;
        break;
      }
    }
  }
  console.log(s);
});
