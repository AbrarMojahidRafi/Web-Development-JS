const bulbButton = document.getElementById("bulb-button");
var flag = 0;
bulbButton.addEventListener("click", function () {
  // console.log("Clicked");

  if (flag === 1) {
    document.getElementById("bulbImg").src =
      "https://image.ibb.co/hoBxtm/light_bulb_off.png";
    flag = 0;
    bulbButton.textContent = "Bulb ON";
  } else {
    document.getElementById("bulbImg").src =
      "https://image.ibb.co/cBBaeR/light_bulb_on.png";
    flag = 1;
    bulbButton.textContent = "Bulb OFF";
  }
});
