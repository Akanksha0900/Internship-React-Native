var Name = "Akanksha",
  Email,
  Password;

function Signupform() {
  Name = document.getElementById("Name").value;
  Email = document.getElementById("Email").value;
  Password = document.getElementById("Password").value;

  console.log(" Name: " + Name);
  console.log(" Email: " + Email);
  console.log(" Password: " + Password);
  alert(`Hello ${Name}, you have successfully signed up!!`);
  window.location.href = "Login.html";
}

var userEmail, userPassword;

function loginform() {
  userEmail = document.getElementById("userEmail").value;
  userPassword = document.getElementById("password").value;

  if (userEmail === "akanksha0900@gmail.com") {
    if (userPassword === "Hello") {
      alert(`Hello ${Name}`);
      window.location.href = "Welcome.html";
    } else {
      alert("Invalid credential");
    }
  }
}
