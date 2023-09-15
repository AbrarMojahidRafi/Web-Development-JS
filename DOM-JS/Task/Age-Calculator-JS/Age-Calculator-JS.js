const b = document.getElementById("birthday");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
result.style.display = "none";

b.addEventListener("click", function () {
  // console.log("clicked");
  result.style.display = "none";
});

btn.addEventListener("click", function () {
  birthday = b.value; // 2023-09-21
  const myArray = birthday.split("-");
  if (myArray.length != 1) {
    const d = new Date();
    const currentYear = d.getFullYear();

    const age = currentYear - Number(myArray[0]);
    result.style.display = null;
    result.textContent = `Your age is ${age} years old`;
  } else {
    alert("Please Enter your BIRTHDAY!");
  }
});
