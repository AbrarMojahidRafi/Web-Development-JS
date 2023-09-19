const romanObject = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const input = document.getElementById("input");
const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  // console.log("clicked");
  // get the value of input
  inputValue = input.value;
  // console.log(inputValue, typeof inputValue);

  if (inputValue != "") {
    // loop: into the dictionary
    function romanize(num) {
      (roman = ""), i;
      for (var i in romanObject) {
        while (num >= romanObject[i]) {
          roman += i;
          num -= romanObject[i];
        }
      }
      return roman;
    }

    const romanNumberIs = romanize(Number(inputValue));

    const span = document.getElementsByTagName("span")[0];

    // console.log(span);

    span.textContent = romanNumberIs;
  } else {
    alert("Please Enter a number !");
  }
});
