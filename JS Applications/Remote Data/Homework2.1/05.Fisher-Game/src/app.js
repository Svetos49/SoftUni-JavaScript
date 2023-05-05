// console.log("TODO:// Implement Home functionality");

export function homePage() {
  const mainElementToAddContentTo = document.querySelector("main"); // for main page
  const mainHomeViewElement = document.getElementById("home-view"); //for main page;
  const mainRegisterViewElement = document.getElementById("register-view"); // for main page
  const mainLoginViewElement = document.getElementById("login-view"); // for main page
  const homeButtonElement = document.getElementById("home");
  const logoutButtonElement = document.getElementById("logout");
  const loadButtonElement = document.querySelector(".load");
  const mainCatchDisplayElement = document.getElementById("main");
  const separateCatches = mainCatchDisplayElement.querySelector("#catches");

  logoutButtonElement.style.display = "none";
  mainCatchDisplayElement.style.display = "none";
  mainRegisterViewElement.style.display = "none"; // for main page
  mainLoginViewElement.style.display = "none"; // for main page
  mainHomeViewElement.style.display = "block"; // for main page

  let dataInLocalStorage; // for main page

  if (localStorage.length > 0) {
    // for main page
    dataInLocalStorage = JSON.parse(localStorage.getItem("user")); // for main page
    if (dataInLocalStorage.accessToken) {
      // for main page
      logoutButtonElement.style.display = "inline"; // for main page
      logoutButtonElement.addEventListener("click", logout); // for main page
    } // for main page
  } // for main page

  separateCatches.innerHTML = "";

  homeButtonElement.addEventListener("click", homePage);
  loadButtonElement.addEventListener("click", listAvailableCatches);

  mainElementToAddContentTo.appendChild(mainHomeViewElement); // for main page
  userInteractions(dataInLocalStorage); // for main page
}

homePage();

async function listAvailableCatches() {
  const urlToGetAvailableCatches = "http://localhost:3030/data/catches";

  const mainCatchDisplayElement = document.getElementById("main");
  const separateCatches = mainCatchDisplayElement.querySelector("#catches");
  const homeButtonElement = document.getElementById("home");

  homeButtonElement.classList.remove("active");
  separateCatches.innerHTML = "";

  let result = await fetch(urlToGetAvailableCatches);
  let catches = await result.json();

  for (let singleCatch of catches) {
    createCatch(singleCatch, separateCatches);
  }

  mainCatchDisplayElement.style.display = "inline";
}

function createCatch(singleCatch, separateCatches) {
  let ownerId = singleCatch._ownerId;
  let divElement = document.createElement("div");

  divElement.setAttribute("class", "catch");
  divElement.setAttribute("_ownerId", ownerId);

  let labelData = [
    "Angler",
    "Weight",
    "Species",
    "Location",
    "Bait",
    "Capture Time",
  ];
  let inputClassData = [
    "angler",
    "weight",
    "species",
    "location",
    "bait",
    "captureTime",
  ];
  let inputValueData = [
    singleCatch.angler,
    singleCatch.weight,
    singleCatch.species,
    singleCatch.location,
    singleCatch.bait,
    singleCatch.captureTime,
  ];

  for (let i = 0; i < 6; i++) {
    let labelElement = document.createElement("label");
    let inputElement = document.createElement("input");

    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", inputClassData[i]);

    labelElement.textContent = labelData[i];
    inputElement.value = inputValueData[i];

    divElement.appendChild(labelElement);
    divElement.appendChild(inputElement);

    if (i === 5) {
      inputElement.setAttribute("type", "number");
      let catchId = singleCatch._id;
      createButtons(divElement, ownerId, catchId);
    }
  }

  separateCatches.appendChild(divElement);
}

function createButtons(divElement, ownerId, catchId) {
  let updateButtonElmement = document.createElement("button");
  let deleteButtonElmement = document.createElement("button");

  updateButtonElmement.setAttribute("class", "update");
  deleteButtonElmement.setAttribute("class", "delete");
  updateButtonElmement.setAttribute("_id", `${catchId}`);
  deleteButtonElmement.setAttribute("_id", `${catchId}`);

  updateButtonElmement.textContent = "UPDATE";
  deleteButtonElmement.textContent = "DELETE";

  updateButtonElmement.addEventListener("click", updateCatch);
  deleteButtonElmement.addEventListener("click", deleteCatch);

  if (localStorage.length > 0) {
    let dataInLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (ownerId === dataInLocalStorage._id) {
      updateButtonElmement.disabled = false;
      deleteButtonElmement.disabled = false;
    } else {
      updateButtonElmement.disabled = true;
      deleteButtonElmement.disabled = true;
    }
  } else {
    updateButtonElmement.disabled = true;
    deleteButtonElmement.disabled = true;
  }

  divElement.appendChild(updateButtonElmement);
  divElement.appendChild(deleteButtonElmement);
}

// from here on it is applicable for main page only

function userInteractions(dataInLocalStorage) {
  const addButtonElement = document.querySelector(".add");

  if (dataInLocalStorage) {
    addButtonElement.disabled = false;
    addButtonElement.addEventListener("click", addNewCatch);
  }
}

function addNewCatch(e) {
  e.preventDefault();
  const mainCatchDisplayElement = document.getElementById("main");
  const separateCatches = mainCatchDisplayElement.querySelector("#catches");
  const addFormElement = document.getElementById("addForm");
  const urlToAddCatch = "http://localhost:3030/data/catches";

  let dataInLocalStorage = JSON.parse(localStorage.getItem("user"));
  let token = dataInLocalStorage.accessToken;
  let allInputElements = Array.from(addFormElement.querySelectorAll("input"));

  if (
    allInputElements[0].value &&
    allInputElements[1].value &&
    allInputElements[2].value &&
    allInputElements[3].value &&
    allInputElements[4].value &&
    allInputElements[5].value
  ) {
    let singleCatch = {
      _ownerId: `${dataInLocalStorage._id}`,
      angler: `${allInputElements[0].value}`,
      weight: `${allInputElements[1].value}`,
      species: `${allInputElements[2].value}`,
      location: `${allInputElements[3].value}`,
      bait: `${allInputElements[4].value}`,
      captureTime: `${allInputElements[5].value}`,
    };

    fetch(urlToAddCatch, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-Authorization": token,
      },
      body: JSON.stringify(singleCatch),
    });

    createCatch(singleCatch, separateCatches);

    allInputElements.forEach((x) => (x.value = ""));
    document.querySelector(".load").click();
  }
}

function updateCatch(e) {
  let clickedUpdateButton = e.currentTarget;
  let dataInLocalStorage = JSON.parse(localStorage.getItem("user"));
  let fieldsToEdit = clickedUpdateButton.parentNode.querySelectorAll("input");

  let updatedCatch = {
    _ownerId: `${clickedUpdateButton.getAttribute("_id")}`,
    angler: `${fieldsToEdit[0].value}`,
    weight: `${fieldsToEdit[1].value}`,
    species: `${fieldsToEdit[2].value}`,
    location: `${fieldsToEdit[3].value}`,
    bait: `${fieldsToEdit[4].value}`,
    captureTime: `${fieldsToEdit[5].value}`,
  };

  const urlToUpdate =
    "http://localhost:3030/data/catches/" +
    clickedUpdateButton.getAttribute("_id");

  fetch(urlToUpdate, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": dataInLocalStorage.accessToken,
    },
    body: JSON.stringify(updatedCatch),
  });
}

function deleteCatch(e) {
  let clickedDeleteButton = e.currentTarget;
  let dataInLocalStorage = JSON.parse(localStorage.getItem("user"));

  const urlToDeleteCatch =
    "http://localhost:3030/data/catches/" +
    clickedDeleteButton.getAttribute("_id");
  
  fetch(urlToDeleteCatch, {
    method: "DELETE",
    headers: {
      "X-Authorization": dataInLocalStorage.accessToken,
    },
  });

  clickedDeleteButton.parentNode.remove();
}

function logout(e) {
  let guestNameElement = document.querySelector("span");

  guestNameElement.textContent = "guest";
  localStorage.clear();
  homePage();
}
