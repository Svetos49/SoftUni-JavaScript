import { logInPage } from "./src/login.js";
import { registerPage } from "./src/register.js";
import { homePage } from "./src/app.js";

const mainElementToAddContentTo = document.querySelector("main"); // for main page
const mainHomeViewElement = document.getElementById("home-view"); //for main page;
const mainRegisterViewElement = document.getElementById("register-view"); // for main page
const mainLoginViewElement = document.getElementById("login-view"); // for main page

homePage();

let navigationElement = document.querySelector("nav");

navigationElement.addEventListener("click", navigationButtonsManagement);

function navigationButtonsManagement(e) {
  e.preventDefault();

  let allNavigationButtons = Array.from(
    navigationElement.querySelectorAll("a")
  ).forEach((x) => {
    x.classList.remove("active");
  });

  let clickedButton = e.target;

  changeView(clickedButton);
}

function changeView(clickedButton) {
  switch (clickedButton.id) {
    case "home":
      homePage();
      mainHomeViewElement.style.display = "block"; //for main page
      mainRegisterViewElement.style.display = "none"; // for main page
      mainLoginViewElement.style.display = "none"; // for main page
      document.getElementById("home").classList.add("active");
      mainElementToAddContentTo.appendChild(mainHomeViewElement); // for main page
      break;
    case "logout":
      homePage();
      document.getElementById("home").classList.add("active");
      document.getElementById("login").style.display = "inline";
      document.getElementById("register").style.display = "inline";
      document.querySelector(".add").disabled = true;
      break;
    case "login":
      logInPage();
      mainHomeViewElement.style.display = "none"; //for main page
      mainRegisterViewElement.style.display = "none"; // for main page
      mainLoginViewElement.style.display = "block"; //for main page
      document.getElementById("login").classList.add("active");
      mainElementToAddContentTo.appendChild(mainLoginViewElement); // for main page
      break;
    case "register":
      registerPage();
      mainHomeViewElement.style.display = "none"; //for main page
      mainLoginViewElement.style.display = "none"; //for main page
      mainRegisterViewElement.style.display = "block"; // for main page
      document.getElementById("register").classList.add("active");
      mainElementToAddContentTo.appendChild(mainRegisterViewElement); // for main page
      break;
  }
  // console.log(clickedButton);
}
