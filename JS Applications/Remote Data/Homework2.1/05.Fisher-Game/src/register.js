// console.log("TODO:// Implement Register functionality");
import { homePage } from "./app.js";

export function registerPage() {
  const homeButtonElement = document.getElementById("home");
  const logoutButtonElement = document.getElementById("logout");
  const mainRegisterButtonElement = document.getElementById("register");
  const wholeRegisterElement = document.getElementById("register-view");
  const registerFormElement = wholeRegisterElement.querySelector("#register");
  const registerButtonElement = registerFormElement.querySelector("button");

  // homeButtonElement.classList.remove("active"); //deselected for main page purposes
  // mainRegisterButtonElement.classList.add("active"); //deselected for main page purposes
  logoutButtonElement.style.display = "none";

  registerButtonElement.addEventListener("click", registerUser);

  registerFormElement.querySelectorAll("input").forEach((x) => {
    x.value = "";
  });
}

registerPage();

function registerUser(e) {
  e.preventDefault();

  const urlToRegister = "http://localhost:3030/users/register";

  const wholeRegisterElement = document.getElementById("register-view");
  const registerFormElement = wholeRegisterElement.querySelector("#register");

  let notificationElement = registerFormElement.querySelector("p");
  let form = new FormData(registerFormElement);
  let email = form.get("email");
  let password = form.get("password");
  let repeatedPassword = form.get("rePass");

  validator(
    registerFormElement,
    email,
    password,
    repeatedPassword,
    notificationElement
  );

  if (notificationElement.textContent === "") {
    fetch(urlToRegister, {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.code === 409) {
          let message = "A user with the same email already exists.";
          visibilityOfButtonsAndElements(
            wholeRegisterElement,
            message,
            notificationElement
          );
        } else {
          localStorage.setItem("user", JSON.stringify(user));
          visibilityOfButtonsAndElements(wholeRegisterElement, user);
          console.log(loacalStorage);
        }
      })
      .catch((error) => console.log(error));
  }
}

function validator(
  registerFormElement,
  email,
  password,
  repeatedPassword,
  notificationElement
) {
  const regExForEmail = /[\w]+@[a-z(?\-)]+\.[a-z]+/gm;

  let message = "";

  let isEmailValid = regExForEmail.test(email);

  if (email === "" && password === "") {
    message = "You need to enter valid e-mail address and password!";
  } else if (!isEmailValid) {
    message = "You need to enter a valid e-mail address!";
  } else if (password === "") {
    message = "You need to enter a valid password!";
  } else if (repeatedPassword === "" || repeatedPassword !== password) {
    message = "You passwords do not match.";
  }

  visibilityOfButtonsAndElements(
    registerFormElement,
    message,
    notificationElement
  );
}

function visibilityOfButtonsAndElements(
  registerFormElement,
  message,
  notificationElement
) {
  const mainLogInButtonElement = document.getElementById("login");
  const logoutButtonElement = document.getElementById("logout");
  const registerButtonElement = document.getElementById("register");

  let guestNameElement = document.querySelector("span");

  if (notificationElement !== undefined) {
    notificationElement.textContent = message;
  }

  if (localStorage.length > 0) {
    let dataInLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (dataInLocalStorage.accessToken) {
      mainLogInButtonElement.style.display = "none";
      registerButtonElement.style.display = "none";
      registerFormElement.style.display = "none";
      logoutButtonElement.style.display = "inline";
      guestNameElement.textContent = message.email;
      homePage();
    }
  }
}
