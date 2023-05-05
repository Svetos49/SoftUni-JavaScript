// console.log('My requests...')

(function books() {
  const loadAllBooksButtonElement = document.getElementById("loadBooks");
  const tableBodyElement = document.querySelector("tbody");
  const formElement = document.querySelector("form");
  const titleInputElement = formElement.querySelector('input[name="title"');
  const authorInputElement = formElement.querySelector('input[name="author"]');
  const submitButtonElement = formElement.querySelector("button");

  let tableBodyElementChildren = Array.from(tableBodyElement.childNodes);
  let tableBodyElementChildrenL = tableBodyElementChildren.length;

  let formTitle = formElement.querySelector("h3");

  loadAllBooksButtonElement.addEventListener(
    "click",
    listAdditionalBooksFromDatabase
  );
  submitButtonElement.addEventListener("click", createBook);

  const urlToListAdditionalBooksFromDatabase =
    "http://localhost:3030/jsonstore/collections/books";
  let urlForChanges = "http://localhost:3030/jsonstore/collections/books/";

  for (let i = 1; i < tableBodyElementChildrenL; i += 2) {
    let tableRowChildren = Array.from(tableBodyElementChildren[i].childNodes);
    let buttons = Array.from(
      tableRowChildren[tableRowChildren.length - 2].childNodes
    );
    buttons[1].addEventListener("click", editBook);
    buttons[3].addEventListener("click", deleteBook);
  }

  async function listAdditionalBooksFromDatabase(e) {
    tableBodyElementChildren = Array.from(tableBodyElement.childNodes);

    let response = await fetch(urlToListAdditionalBooksFromDatabase);
    let data = await response.json();

    Object.entries(data).forEach((x) => {
      for (let book of tableBodyElementChildren) {
        if (book.id === x[0]) {
          book.remove();
        }
      }

      let tableRowElement = document.createElement("tr");
      tableRowElement.setAttribute("id", `${x[0]}`);

      let firstTableDataElement = document.createElement("td");
      let secondTableDataElement = document.createElement("td");
      let thirdTableDataElement = document.createElement("td");
      let editButtonElement = document.createElement("button");
      let deleteButtonElement = document.createElement("button");

      firstTableDataElement.innerText = `${x[1].title}`;
      secondTableDataElement.innerText = `${x[1].author}`;
      editButtonElement.textContent = "Edit";
      deleteButtonElement.textContent = "Delete";

      editButtonElement.addEventListener("click", editBook);
      deleteButtonElement.addEventListener("click", deleteBook);

      thirdTableDataElement.appendChild(editButtonElement);
      thirdTableDataElement.appendChild(deleteButtonElement);

      tableRowElement.appendChild(firstTableDataElement);
      tableRowElement.appendChild(secondTableDataElement);
      tableRowElement.appendChild(thirdTableDataElement);

      tableBodyElement.appendChild(tableRowElement);
    });
  }

  function createBook(e) {
    e.preventDefault();

    if (authorInputElement.value !== "" && titleInputElement.value !== "") {
      let newBook = {
        author: authorInputElement.value,
        title: titleInputElement.value,
      };

      fetch(urlToListAdditionalBooksFromDatabase, {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(newBook),
      });

      titleInputElement.value = "";
      authorInputElement.value = "";
      loadAllBooksButtonElement.click();
    }
  }

  function editBook(e) {
    let clickedEditButton = e.target;
    let tableRowOfClickedEditButton = clickedEditButton.parentNode.parentNode;
    let tableRowOfClickedEditButtonChildren = Array.from(
      tableRowOfClickedEditButton.childNodes
    );

    if (tableRowOfClickedEditButtonChildren.length === 3) {
      titleInputElement.value =
        tableRowOfClickedEditButtonChildren[0].textContent;
      authorInputElement.value =
        tableRowOfClickedEditButtonChildren[1].textContent;
    } else {
      titleInputElement.value =
        tableRowOfClickedEditButtonChildren[1].textContent;
      authorInputElement.value =
        tableRowOfClickedEditButtonChildren[3].textContent;
    }

    formTitle.textContent = "Edit FORM";
    const submitButtonElement = formElement.querySelector("button").remove();

    let saveButtonElement = document.createElement("button");
    saveButtonElement.textContent = "Save";
    formElement.appendChild(saveButtonElement);

    saveButtonElement.addEventListener("click", (e) =>
      saveChanges(
        e,
        tableRowOfClickedEditButtonChildren,
        tableRowOfClickedEditButton
      )
    );

    // saveButtonElement.addEventListener("click", (e) => {
    //   e.preventDefault();

    //   saveButtonElement.remove();

    //   if (tableRowOfClickedEditButtonChildren.length === 3) {
    //     tableRowOfClickedEditButtonChildren[0].textContent =
    //       titleInputElement.value;
    //     tableRowOfClickedEditButtonChildren[1].textContent =
    //       authorInputElement.value;
    //   } else {
    //     tableRowOfClickedEditButtonChildren[1].textContent =
    //       titleInputElement.value;
    //     tableRowOfClickedEditButtonChildren[3].textContent =
    //       authorInputElement.value;
    //   }

    //   if (tableRowOfClickedEditButton.id) {
    //     changeBookInDatabase(
    //       tableRowOfClickedEditButton.id,
    //       titleInputElement.value,
    //       authorInputElement.value
    //     );
    //   }

    //   createSubmitButton();
    // });
  }

  function deleteBook(e) {
    let clickedDeleteButton = e.target;
    let tableRowOfClickedDeleteButton =
      clickedDeleteButton.parentNode.parentNode;

    if (tableRowOfClickedDeleteButton.id) {
      fetch(urlForChanges + tableRowOfClickedDeleteButton.id, {
        method: "DELETE",
      }).catch((error) => console.log(error));
    }

    tableRowOfClickedDeleteButton.remove();

    if (formTitle.textContent === "Edit FORM") {
      const saveButtonElement = formElement.querySelector("button").remove();
      createSubmitButton();
    }
  }

  async function changeBookInDatabase(bookId, changedTitle, changedAuthor) {
    let changedBook = {
      author: changedAuthor,
      title: changedTitle,
    };

    await fetch(urlForChanges + bookId, {
      method: "PUT",
      header: { "content-type": "application/json" },
      body: JSON.stringify(changedBook),
    }).catch((error) => console.log(error));
  }

  function createSubmitButton() {
    formTitle.textContent = "FORM";
    titleInputElement.value = "";
    authorInputElement.value = "";

    let submitButtonElement = document.createElement("button");
    submitButtonElement.textContent = "Submit";
    submitButtonElement.addEventListener("click", createBook);
    formElement.appendChild(submitButtonElement);
  }

  function saveChanges(
    e,
    tableRowOfClickedEditButtonChildren,
    tableRowOfClickedEditButton
  ) {
    e.preventDefault();

    if (titleInputElement.value !== "" && authorInputElement.value !== "") {
      const saveButtonElement = formElement.querySelector("button").remove();

      if (tableRowOfClickedEditButtonChildren.length === 3) {
        tableRowOfClickedEditButtonChildren[0].textContent =
          titleInputElement.value;
        tableRowOfClickedEditButtonChildren[1].textContent =
          authorInputElement.value;
      } else {
        tableRowOfClickedEditButtonChildren[1].textContent =
          titleInputElement.value;
        tableRowOfClickedEditButtonChildren[3].textContent =
          authorInputElement.value;
      }

      if (tableRowOfClickedEditButton.id) {
        changeBookInDatabase(
          tableRowOfClickedEditButton.id,
          titleInputElement.value,
          authorInputElement.value
        );
      }

      createSubmitButton();
    }
  }
})();
