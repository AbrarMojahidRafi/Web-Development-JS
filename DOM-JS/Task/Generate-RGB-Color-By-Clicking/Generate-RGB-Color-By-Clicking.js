const btn = document.getElementById("change-btn");
btn.addEventListener("click", function () {
  console.log("Clicked");
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  document.body.style.backgroundColor = rgb;
});
