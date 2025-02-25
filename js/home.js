const btnLogout = document.getElementById("btnLogout");
let homeName = document.getElementById("homeName");

let homeUserName = "";

if (localStorage.getItem("sessionName") !== null) {
  homeUserName = JSON.parse(localStorage.getItem("sessionName"));
  homeName.innerHTML += homeUserName;
}

btnLogout.addEventListener("click", function () {
  logout();
});

function logout() {
  localStorage.removeItem("sessionName");
  window.location = "./index.html";
}
