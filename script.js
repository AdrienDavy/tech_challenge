let error;
let pseudo = document.getElementById("pseudo");
let mail = document.getElementById("mail");
let message = document.getElementById("message");

document.getElementById("myForm").addEventListener("submit", function (e) {
  if (!message.value) {
    error = "You must write a message";
  }
  if (!mail.value) {
    error = "You must type your email";
  }
  if (!pseudo.value) {
    error = "You must type your name";
  }
  if (message.value && mail.value && pseudo.value) {
    error = "";
  }

  if (error) {
    e.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } else {
    alert("Your message has been sent !");
  }
});
