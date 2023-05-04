function attachEvents() {
  // console.log('TODO...');
  const loadButtonElement = document.getElementById("btnLoad");
  const createButtonElement = document.getElementById("btnCreate");
  const personInputElement = document.getElementById("person");
  const phoneInputElement = document.getElementById("phone");

  let phoneBookElement = document.getElementById("phonebook");

  loadButtonElement.addEventListener("click", loadPhones);
  createButtonElement.addEventListener("click", createEntry);

  let createGetUrl = "http://localhost:3030/jsonstore/phonebook";
  let deleteUrl = "http://localhost:3030/jsonstore/phonebook/";

  function loadPhones(e) {
    fetch(createGetUrl)
      .then((response) => response.json())
      .then((phoneBookEntries) => {
        getThePhones(phoneBookEntries);
      })
      .catch((error) => console.log(error));
  }

  function createEntry(e) {
    if (personInputElement.value !== "" && phoneInputElement.value > 0) {
      let newEntry = {
        person: `${personInputElement.value}`,
        phone: `${phoneInputElement.value}`,
      };

      fetch(createGetUrl, {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(newEntry),
      }).catch((error) => console.log(error));

      personInputElement.value = "";
      phoneInputElement.value = "";

      loadButtonElement.click();
    }
  }

  function getThePhones(phoneBookEntries) {
    phoneBookElement.innerHTML = "";

    Object.entries(phoneBookEntries).forEach((x) => {
      let newListElement = document.createElement("li");
      let buttonElement = document.createElement("button");

      newListElement.setAttribute("id", `${x[1]._id}`);

      newListElement.textContent = `${x[1].person}:${x[1].phone}`;
      buttonElement.textContent = "Delete";

      newListElement.appendChild(buttonElement);
      phoneBookElement.appendChild(newListElement);

      buttonElement.addEventListener("click", deleteEntry);
    });
  }

  function deleteEntry(e) {
    let clickedDeleteButton = e.target;
    let clickedDeleteButtonParent = clickedDeleteButton.parentNode;
    clickedDeleteButton.removeEventListener("click", deleteEntry);
    clickedDeleteButtonParent.remove();

    fetch(deleteUrl + `${clickedDeleteButtonParent.id}`, {
      method: "DELETE",
    });
  }
}

attachEvents();
