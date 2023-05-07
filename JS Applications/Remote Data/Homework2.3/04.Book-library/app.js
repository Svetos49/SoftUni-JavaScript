function bookLibrary() {
  const url = `http://localhost:3030/jsonstore/collections/books`;

  let tableBodyElement = document.querySelector("body table tbody");
  tableBodyElement.innerHTML = "";
  let table = document.querySelector("body table");
  console.log(table.style.display);
  table.style.display = "none";

  let loadBooksBtn = document.querySelector("#loadBooks");
  loadBooksBtn.addEventListener("click", loadAllBooks);

  async function loadAllBooks() {
    tableBodyElement.innerHTML = "";
    let res = await fetch(url);
    let data = await res.json();
    if (Object.keys(data).length == 0) {
      table.style.display = "none";
      return;
    }
    table.style.display = "";

    Object.entries(data).map((b) => {
      let id = b[0];
      let author = b[1].author;
      let title = b[1].title;

      let tr = document.createElement("tr");
      tableBodyElement.appendChild(tr);
      let tdTitle = document.createElement("td");
      tdTitle.textContent = title;

      let tdAuthor = document.createElement("td");
      tdAuthor.textContent = author;

      let tdButtons = document.createElement("td");
      let editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      let deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";

      //   let tdId = document.createElement("td");
      //   tdId.textContent = id;
      //   tdId.style.display = "none";

      tr.appendChild(tdTitle);
      tr.appendChild(tdAuthor);
      tr.appendChild(tdButtons);
      tdButtons.appendChild(editBtn);
      tdButtons.appendChild(deleteBtn);
      // tr.appendChild(tdId);

      editBtn.addEventListener("click", editBook);

      function editBook() {
        let formELement = document.querySelector("form");
        let h3Element = formELement.querySelector("h3");
        h3Element.textContent = "Edit FORM";
        let titleInput = document.getElementsByName("title")[0];
        let authorInput = document.getElementsByName("author")[0];
        titleInput.value = title;
        authorInput.value = author;
        let submitBtn = document.querySelector("form button");
        submitBtn.textContent = "Save";
        submitBtn.removeEventListener("click", createBook);

        submitBtn.addEventListener("click", edit);
        async function edit(e) {
          e.preventDefault();
          let res = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              author: authorInput.value,
              title: titleInput.value,
            }),
          });
          h3Element.textContent = "FORM";
          titleInput.value = "";
          authorInput.value = "";
          submitBtn.textContent = "Submit";
          submitBtn.addEventListener("click", createBook);

          submitBtn.removeEventListener("click", edit);
          loadAllBooks();
        }
      }

      deleteBtn.addEventListener("click", deleteBook);
      async function deleteBook() {
        const confirmed = confirm("Are you sure you want to delete this book?");
        if(confirmed){
            const res = await fetch(url + `/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              let data1 = await res.json();
              loadAllBooks();
        }
        
      }
    });
  }
  let submitBtn = document.querySelector("form button");
  submitBtn.addEventListener("click", createBook);

  async function createBook(e) {
    e.preventDefault();

    let titleInput = document.getElementsByName("title")[0];
    let authorInput = document.getElementsByName("author")[0];

    if (titleInput.value == "" || authorInput.value == "") {
      alert("Invalid title or author");
    } else {
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author: authorInput.value,
          title: titleInput.value,
        }),
      });
      authorInput.value = "";
      titleInput.value = "";
      loadAllBooks();
    }
  }
}
bookLibrary();
