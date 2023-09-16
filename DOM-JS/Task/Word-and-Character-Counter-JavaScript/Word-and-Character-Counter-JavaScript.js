let myText = document.getElementById("my-text");
myText.addEventListener("input", function () {
  // Finding The Character:
  let numberOfCharacter = myText.value.length;
  document.getElementById(
    "count-character"
  ).textContent = `Total characters: ${numberOfCharacter}`;

  // Finding the number of Word:
  const txt = myText.value;
  let txtList = txt.split(" ");
  // console.log(txtList);
  let count = 0;
  for (var i = 0; i < txtList.length; i++) {
    if (txtList[i] != "") {
      count += 1;
    }
  }
  document.getElementById("count-word").textContent = `Total Word: ${count}`;
});
