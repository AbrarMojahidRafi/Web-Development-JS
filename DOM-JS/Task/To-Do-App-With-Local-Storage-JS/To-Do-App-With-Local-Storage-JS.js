const userInput = document.getElementsByTagName("input")[0];
const addButton = document.getElementById("push");

const tasks = document.getElementById("tasks");

// console.log(userInput, addButton);

addButton.addEventListener("click", function () {
  const new_div = document.createElement("div");
  new_div.textContent = userInput.value;
  tasks.appendChild(new_div);
  console.log("clicked");
});

