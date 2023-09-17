const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const emailInput = document.getElementById("email-input");
const messageInput = document.getElementById("message-input");

// getting input values
let nameInputValue;
let phoneInputValue;
let emailInputValue;
let messageInputValue;

function contains(m, inp) {
  for (var i = 0; i < m.length; i++) {
    let main = m[i];
    for (var j = 0; j < inp.length; j++) {
      if (main === inp[j]) {
        return true;
      }
    }
  }
  return false;
}

nameInput.addEventListener("input", function () {
  nameInputValue = nameInput.value;
  if (
    contains(
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ",
      nameInputValue
    )
  ) {
    console.log("Valid input");
  } else {
    console.log("Invalid input, Because it doesn't contains any alphabet");
  }
});

phoneInput.addEventListener("input", function () {
  phoneInputValue = phoneInput.value;
  if (phoneInputValue.length === 11 || phoneInputValue.length === 14) {
    if (phoneInputValue.startsWith("+8801")) {
      phoneInputValue = phoneInputValue.substring(3);
    }
    console.log("get the valid number");
  } else {
    console.log("wrong number");
  }
});

emailInput.addEventListener("input", function () {
  emailInputValue = emailInput.value;
});

messageInput.addEventListener("input", function () {
  messageInputValue = messageInput.value;
});
