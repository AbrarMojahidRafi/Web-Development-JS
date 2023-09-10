document.getElementById("btn").addEventListener("click", function () {
  var inputVal = document.getElementById("myInput").value;
  // console.log(inputVal);
  var tag = document.createElement("div");
  var text = document.createTextNode(inputVal);
  tag.appendChild(text);
  document.body.appendChild(tag);
  // console.log(document.getElementsByTagName("body"));
});
