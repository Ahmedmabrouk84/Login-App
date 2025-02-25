const mainForm = document.querySelector("form");
const email = document.getElementById("email");
const Password = document.getElementById("Password");
const loginBtn = document.getElementById("loginBtn");

// user massege hint
const Incorrect = document.getElementById("Incorrect");
const inputMsg = document.getElementById("inputMsg");
const msgSuccess = document.getElementById("msgSuccess");
let UserName = "";
let userList = [];

if (localStorage.getItem("userItem") !== null) {
  userList = JSON.parse(localStorage.getItem("userItem"));
}

mainForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
loginBtn.addEventListener("click", function () {
  userLogin();
});

function userLogin() {
  if (isEmpty() == false) {
    inputMsg.classList.remove("d-none");
    msgSuccess.classList.add("d-none");
    return false;
  } else {
    inputMsg.classList.add("d-none");
  }

  confiremAcount();
}

function confiremAcount() {
  for (let i = 0; i < userList.length; i++) {
    if (
      userList[i].userEmail == email.value &&
      userList[i].Password == Password.value
    ) {
      setTimeout(() => {
        localStorage.setItem("sessionName", JSON.stringify(userList[i].name));
        window.location = "./home.html";
      }, 1000);
      // ================
      console.log(userList);
      clearInput();
      Incorrect.classList.add("d-none");
      msgSuccess.classList.remove("d-none");
    }
    // ============
    else {
      Incorrect.classList.remove("d-none");
    }
  }
}

function clearInput() {
  email.value = null;
  Password.value = null;
}

function isEmpty() {
  if (email.value == "" || Password == "") {
    return false;
  } else {
    return true;
  }
}

// function inputsValidation() {}
