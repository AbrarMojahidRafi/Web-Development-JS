const button = document.getElementById("button");
const display = document.getElementById("data-after-fatch");

// // using promise
// button.addEventListener("click", function () {
//   fetch(" https://api.clever.com/v1.2/contacts")
//     .then(function (res) {
//       return res.text(); // here we can use json/text and so on.
//     })
//     .then(function (data) {
//       display.textContent = data;
//     });
// });

button.addEventListener("click", function () {
  async function dis() {
    const res = await fetch(" https://api.clever.com/v1.2/contacts");

    const data = await res.text();

    // console.log(data);
    display.textContent = data;
  }

  dis();
});
