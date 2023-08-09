async function attachEvents() {
    const loadPostsButton = document.querySelector("#btnLoadPosts");
    const viewCommentsElement = document.querySelector("#btnViewPost");
    const postsElement = document.querySelector("#posts");
    const postTitleElement = document.querySelector("#post-title");
    const postBodyElement = document.querySelector("#post-body");
    const postedCommentsElement = document.querySelector("#post-comments");

    const postsUrl = "http://localhost:3030/jsonstore/blog/posts";
    let posts = await getData(postsUrl);
    posts = Object.entries(posts);

    loadPostsButton.addEventListener("click", loadPosts);
    viewCommentsElement.addEventListener("click", viewComments);
    function loadPosts() {
        if (postsElement.length < 1) {
            for (let post of posts) {
                post = post[1];
                const option = document.createElement("option");
                option.value = post.id;
                option.textContent = post.title;
                postsElement.appendChild(option);
            }
        }
    }

    async function viewComments() {
        const selection = postsElement.options[postsElement.selectedIndex];
        const commentsUrl = "http://localhost:3030/jsonstore/blog/comments";
        let comments = await getData(commentsUrl);
        comments = Object.entries(comments);

        for (let comment of comments) {
            comment = comment[1];
            if (selection.value === comment.postId) {
                postTitleElement.textContent = selection.textContent;
                const commentElement = document.createElement("li");
                commentElement.id = comment.id;
                commentElement.textContent = comment.text;
                postedCommentsElement.appendChild(commentElement);
            }
        }

        for (let post of posts) {
            post = post[1];
            if (selection.value === post.id) {
                postBodyElement.textContent = post.body;
            }
        }
    }
}

async function getData(url) {
    const response = await fetch(url);
    return response.json();
}

attachEvents();
