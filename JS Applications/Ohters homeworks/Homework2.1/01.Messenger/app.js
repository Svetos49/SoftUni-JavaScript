function attachEvents() {
  // console.log('TODO...');
  const submitButtonElement = document.getElementById("submit");
  const refreshButtonElement = document.getElementById("refresh");
  const messageDisplayElement = document.getElementById("messages");
  const url = "http://localhost:3030/jsonstore/messenger";
  let nameInputElements = document.querySelector('input[name="author"]');
  let messageInputElements = document.querySelector('input[name="content"]');

  submitButtonElement.addEventListener("click", createPost);
  refreshButtonElement.addEventListener("click", getPosts);

  function createPost(e) {
    if (nameInputElements.value !== "" && messageInputElements.value !== "") {
      let post = {
        author: `${nameInputElements.value}`,
        content: `${messageInputElements.value}`,
      };

      fetch(url, {
        method: "POST",
        header: { "content-type": "aplication/json" },
        body: JSON.stringify(post),
      }).catch((error) => console.log(error));

      nameInputElements.value = "";
      messageInputElements.value = "";
    }
  }

  function getPosts(e) {
    fetch(url)
      .then((response) => response.json())
      .then((posts) => {
        let content = Object.entries(posts).map(
          (x) => `${x[1].author}: ${x[1].content}`
        );
        messageDisplayElement.textContent = content.join("\n");
      })
      .catch((error) => console.log(error));
  }
}

attachEvents();
