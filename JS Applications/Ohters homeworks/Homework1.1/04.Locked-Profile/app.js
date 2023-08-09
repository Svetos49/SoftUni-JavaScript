async function lockedProfile() {
  const mainElement = document.getElementById("main");
  const profileElement = document.querySelector(".profile");
  const people = await getData();

  let personOrderNumber = 0;
  let shouldClone = false;

  for (let person of people) {
    const personDetails = person[1];
    if (shouldClone) {
      const clone = profileElement.cloneNode(true);
      createPerson(personDetails, clone, mainElement, ++personOrderNumber);
    } else {
      createPerson(
        personDetails,
        profileElement,
        mainElement,
        ++personOrderNumber
      );
      shouldClone = true;
    }
  }

  const buttons = [...document.getElementsByTagName("button")];
  buttons.forEach((btn) => btn.addEventListener("click", showHide));
}

async function getData() {
  const url = "http://localhost:3030/jsonstore/advanced/profiles";
  const response = await fetch(url);
  const data = await response.json();
  return Object.entries(data);
}

function createPerson(
  personDetails,
  personElement,
  mainElement,
  personOrderNumber
) {
  personElement.querySelector("input[name='user1Username']").value =
    personDetails.username;
  personElement.querySelector("input[name='user1Email']").value =
    personDetails.email;
  personElement.querySelector("input[name='user1Age']").value =
    personDetails.age;

  const personRadioButtons = personElement.querySelectorAll(
    "input[name='user1Locked']"
  );
  personRadioButtons.forEach((e) => {
    e.removeAttribute("name");
    e.setAttribute("name", `user${personOrderNumber}Locked`);
  });

  mainElement.appendChild(personElement);
}

function showHide(event) {
  const button = event.target;
  const profile = button.parentNode;
  const hiddenInformation = profile.querySelectorAll(
    ".hiddenInfo label, .hiddenInfo input"
  );
  const lockStatus = profile.querySelector('input[type="radio"]:checked');

  if (lockStatus.value === "unlock") {
    if (button.textContent === "Show more") {
      hiddenInformation.forEach((e) => {
        e.style.display = "block";
      });

      button.textContent = "Hide it";
    } else if (button.textContent === "Hide it") {
      hiddenInformation.forEach((e) => {
        e.style.display = "none";
      });

      button.textContent = "Show more";
    }
  }
}
