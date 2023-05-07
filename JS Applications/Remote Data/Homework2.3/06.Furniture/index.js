let user = localStorage.getItem("user");
if (user != null) {
  user = JSON.parse(user);

  async function getUserDetails() {
    let res = await fetch("http://localhost:3030/users/me", {
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
    });
    if (res.status == 403) {
      localStorage.removeItem("user");
      window.location.href = "index.html";
    }
  }
  getUserDetails();
}

let loginDiv = document.querySelector("#guest");
let logoutBtn = document.querySelector("#logoutBtn");
let createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", createFurniture);

let tableOfFurnitures = document.querySelector(".table");
let tableBody = tableOfFurnitures.querySelector("tbody");
let buyBtn = document.querySelector("#buy");
buyBtn.addEventListener("click", buyFurnitures);

let ordersDiv = document.querySelector(".orders");
let boughtFurnituresSpan = ordersDiv.querySelector("#bought");
let totalPriceSpan = ordersDiv.querySelector("#total-price");
let allOrdersBtn = ordersDiv.querySelector("button");
allOrdersBtn.addEventListener("click", loadOrders);
boughtFurnituresSpan.textContent = "";
totalPriceSpan.textContent = "";

async function buyFurnitures() {
  //console.log(Array.from(tableBody.children));
  let furnitures = [];
  Array.from(tableBody.children).forEach((ch) => {
    let checkedInput = ch.querySelector("input");

    if (checkedInput.checked) {
      furnitures.push({
        name: ch.children[2].children[0].textContent,
        price: Number(ch.children[3].children[0].textContent),
      });
    }
  });
  let res = await fetch("http://localhost:3030/data/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify(furnitures),
  });
}
async function loadOrders() {
  if (user == null) {
    return;
  }
  let res = await fetch(
    `http://localhost:3030/data/orders?where=_ownerId%3D"${user._id}"`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": user.accessToken,
      },
    }
  );
  let data = await res.json();
  let names = [];
  let totalPrice = 0;
  data.forEach((x) => {
    names.push(x[0].name);
    totalPrice += x[0].price;
  });
  boughtFurnituresSpan.textContent = names.join(", ");
  totalPriceSpan.textContent = `${totalPrice}$`;
}

async function getFurniture() {
  let res = await fetch("http://localhost:3030/data/furniture");
  let data = await res.json();

  tableBody.innerHTML = "";
  data.forEach((f) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    tdId.textContent = f._id;
    tdId.style.display = "none";

    let tdImage = document.createElement("td");
    let imgImg = document.createElement("img");
    imgImg.src = f.img;
    tdImage.appendChild(imgImg);

    let tdName = document.createElement("td");
    let pName = document.createElement("p");
    pName.textContent = f.name;
    tdName.appendChild(pName);

    let tdPrice = document.createElement("td");
    let pPrice = document.createElement("p");
    pPrice.textContent = f.price;
    tdPrice.appendChild(pPrice);

    let tdFactor = document.createElement("td");
    let pFactor = document.createElement("p");
    pFactor.textContent = f.factor;
    tdFactor.appendChild(pFactor);

    let tdMark = document.createElement("td");
    let inputMark = document.createElement("input");
    inputMark.type = "checkbox";
    tdMark.appendChild(inputMark);

    tableBody.appendChild(tr);
    tr.appendChild(tdId);
    tr.appendChild(tdImage);
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdFactor);
    tr.appendChild(tdMark);
  });
}
getFurniture();

async function createFurniture(e) {
  e.preventDefault();

  const formData = new FormData(createForm);

  const name = formData.get("name");
  const price = Number(formData.get("price"));
  const factor = formData.get("factor");
  const img = formData.get("img");

  if (isNaN(price)) {
    alert("Invalid price!");
    return;
  }

  let res = await fetch("http://localhost:3030/data/furniture", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Authorization": user.accessToken,
    },
    body: JSON.stringify({ name, price, factor, img }),
  });
  createForm.reset();
  getFurniture();
}

if (user !== null) {
  loginDiv.style.display = "none";

  logoutBtn.addEventListener("click", logoutFunc);

  async function logoutFunc() {
    if (user !== null) {
      let res = await fetch("http://localhost:3030/users/logout", {
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": user.accessToken,
        },
      });
      localStorage.removeItem("user");
      window.location.href = "/index.html";
    }
  }
} else {
  logoutBtn.style.display = "none";

  let createDiv = document.querySelector("#create-product");
  createDiv.style.display = "none";

  let buyBtn = document.querySelector("#buy");
  buyBtn.style.display = "none";
  let ordersDiv = document.querySelector(".orders");
  ordersDiv.style.display = "none";

  document.querySelectorAll("input").forEach((i) => {
    i.disabled = true;
  });
}
