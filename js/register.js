const mainForm = document.querySelector("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const Password = document.getElementById("Password");
const RePassword = document.getElementById("Re-Password");
const RegisterBtn = document.getElementById("registerBtn");

const inputMsg = document.getElementById("inputMsg");
const confiremPassword = document.getElementById("confiremPassword");
const emailExist = document.getElementById("emailExist");
const msgSuccess = document.getElementById("msgSuccess");

let userList = [];

// console.log(emailExist);

if (localStorage.getItem("userItem") !== null) {
  userList = JSON.parse(localStorage.getItem("userItem"));
}

mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
RegisterBtn.addEventListener("click", function () {
  AddUser();
});

function AddUser() {
  if (isEmpty() == false) {
    inputMsg.classList.remove("d-none");
    msgSuccess.classList.add("d-none");
    return false;
  } else {
    inputMsg.classList.add("d-none");
  }

  if (isEmailExist() == false) {
    emailExist.classList.remove("d-none");
    msgSuccess.classList.add("d-none");
    return false;
  } else {
    msgSuccess.classList.remove("d-none");
    emailExist.classList.add("d-none");
  }

  if (Password.value == RePassword.value) {
    const user = {
      name: userName.value,
      userEmail: email.value,
      Password: Password.value,
      RePassword: RePassword.value,
    };

    userList.push(user);
    localStorage.setItem("userItem", JSON.stringify(userList));
    clearInput();

    setTimeout(() => {
      window.location = "./index.html";
    }, 1000);
    confiremPassword.classList.add("d-none");
  }
  // 
  else {
    msgSuccess.classList.add("d-none");
    confiremPassword.classList.remove("d-none");
  }
}

function clearInput() {
  userName.value = null;
  email.value = null;
  Password.value = null;
  RePassword.value = null;
}

function isEmpty() {
  if (
    userName.value == "" ||
    email.value == "" ||
    Password == "" ||
    RePassword == ""
  ) {
    return false;
  } else {
    return true;
  }
}

function isEmailExist() {
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].userEmail.toLowerCase() == email.value.toLowerCase()) {
      return false;
    }
  }
}

// function inputsValidation() {}
