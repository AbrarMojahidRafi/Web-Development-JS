const btn = document.getElementById("change-btn");

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

btn.addEventListener("click", function () {
  // console.log("Clicked");
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgb;
  document.getElementById("output-RGB").value = rgb;

  const hex = rgbToHex(r, g, b);
  document.getElementById("output-Hexadecimal").value = hex;
});
