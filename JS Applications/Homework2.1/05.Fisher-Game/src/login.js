// console.log("TODO:// Implement Login functionality");
import { homePage } from "./app.js";

export function logInPage() {
  // const homeButtonElement = document.getElementById("home"); //deselected for main page purposes
  // const mainLogInButtonElement = document.getElementById("login"); //deselected for main page purposes
  const logoutButtonElement = document.getElementById("logout");
  const wholeLogInElement = document.getElementById("login-view");
  const logInFormElement = wholeLogInElement.querySelector("#login");
  const logInButtonElement = logInFormElement.querySelector("button");

  // homeButtonElement.classList.remove("active"); //deselected for main page purposes
  // mainLogInButtonElement.classList.add("active"); //deselected for main page purposes
  logoutButtonElement.style.display = "none";

  logInButtonElement.addEventListener("click", logOn);

  logInFormElement.querySelectorAll("input").forEach((x) => {
    x.value = "";
  });
}

logInPage();

function logOn(e) {
  e.preventDefault();

  const urlToRequestLogIn = "http://localhost:3030/users/login";

  const wholeLogInElement = document.getElementById("login-view");
  const logInFormElement = wholeLogInElement.querySelector("#login");

  let form = new FormData(logInFormElement);
  let email = form.get("email");
  let password = form.get("password");

  fetch(urlToRequestLogIn, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((user) => {
      localStorage.setItem("user", JSON.stringify(user));
      visibilityOfButtonsAndElements(user, logInFormElement, wholeLogInElement);
    })
    .catch((error) => console.log(error));
}

function visibilityOfButtonsAndElements(
  user,
  logInFormElement,
  wholeLogInElement
) {
  const mainLogInButtonElement = document.getElementById("login");
  const logoutButtonElement = document.getElementById("logout");
  const registerButtonElement = document.getElementById("register");

  let guestNameElement = document.querySelector("span");
  let notificationElement = logInFormElement.querySelector("p");
  let dataInLocalStorage = JSON.parse(localStorage.getItem("user"));

  if (dataInLocalStorage.accessToken) {
    mainLogInButtonElement.style.display = "none";
    registerButtonElement.style.display = "none";
    wholeLogInElement.style.display = "none";
    logoutButtonElement.style.display = "inline";
    notificationElement.textContent = "";
    guestNameElement.textContent = user.email;
    homePage();
  }

  if (!user._id) {
    notificationElement.textContent =
      "Incorect username or password. Please try again!";
  }
}
