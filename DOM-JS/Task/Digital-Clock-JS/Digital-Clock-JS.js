setInterval(displayHello, 1000);

function displayHello() {
  const d = new Date();

  const hour = document.getElementById("hour");
  hour.textContent = d.getHours();
  // console.log(d.getHours());

  const minutes = document.getElementById("minutes");
  minutes.textContent = d.getMinutes();

  const seconds = document.getElementById("seconds");
  seconds.textContent = d.getSeconds();

  if (d.getHours() >= 12) {
    document.getElementById("ampm").textContent = "PM";
  } else {
    document.getElementById("ampm").textContent = "AM";
  }
}
