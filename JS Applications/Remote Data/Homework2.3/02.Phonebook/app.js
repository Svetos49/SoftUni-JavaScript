function attachEvents() {
  const url = `http://localhost:3030/jsonstore/phonebook`;

  document.getElementById("btnLoad").addEventListener("click", getAllEntries);

  async function getAllEntries() {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();

    let ulElement = document.getElementById("phonebook");
    ulElement.innerHTML = "";
    let ids = Object.keys(data);

    for (let i = 0; i < ids.length; i++) {
      let currId = ids[i];

      let personalInfoObj = data[currId];
      let liElement = document.createElement("li");
      liElement.textContent = `${personalInfoObj.person}: ${personalInfoObj.phone}`;
      ulElement.appendChild(liElement);
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      liElement.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", deletePhone);

      async function deletePhone() {
        const res = await fetch(url + `/${currId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data1 = await res.json();
        console.log(data1);
        liElement.remove();
      }
    }
  }
  document.getElementById("btnCreate").addEventListener("click", addNewPhone);

  async function addNewPhone() {
    let personName = document.getElementById("person");
    let phone = document.getElementById("phone");
    if (personName.value !== "" && phone.value !== "") {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ person: personName.value, phone: phone.value }),
      });
      personName.value = "";
      phone.value = "";
      getAllEntries();
    }
  }
}

attachEvents();
