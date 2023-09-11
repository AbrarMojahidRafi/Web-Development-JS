function checkButton() {
  if (document.getElementById("summer").checked) {
    document.getElementById("disp").innerHTML =
      document.getElementById("summer").value + " radio button is checked";
    document.getElementById("summer").checked = false;
  } else if (document.getElementById("winter").checked) {
    document.getElementById("disp").innerHTML =
      document.getElementById("winter").value + " radio button is checked";
    document.getElementById("winter").checked = false;
  } else if (document.getElementById("rainy").checked) {
    document.getElementById("disp").innerHTML =
      document.getElementById("rainy").value + " radio button is checked";
    document.getElementById("rainy").checked = false;
  } else if (document.getElementById("autumn").checked) {
    document.getElementById("disp").innerHTML =
      document.getElementById("autumn").value + " radio button is checked";
    document.getElementById("autumn").checked = false;
  } else {
    document.getElementById("error").innerHTML =
      "You have not selected any season";
  }
}
