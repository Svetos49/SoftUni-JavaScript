// function attachEvents() {
//     document.getElementById('btnLoadPosts').addEventListener('click', getPost);
//     document.getElementById('btnViewPost').addEventListener('click', displayPost);
   
// }

// attachEvents();
// async function getPost() {
//     const url = 'http://localhost:3030/jsonstore/blog/posts';

//     const response = await fetch(url);
//     const data = await response.json();

//     const select = document.getElementById('posts');
//     select.innerHTML = '';

//    Object.values(data).map(createOption).forEach(o => select.appendChild(o));

  
// }
// function createOption(post) {
//     const result = document.createElement('option');
//     result.textContent = post.title;
//     result.value = post.id;

//     return result;
// }

// function displayPost() {
 
//    const postId = document.getElementById('posts').value;
  
//   getComment(postId);
  
// }

// async function getComment(postId) {
//   const commentsUl = document.getElementById('post-comments');
//   commentsUl.innerHTML = '';

//    const postUrl = 'http://localhost:3030/jsonstore/blog/posts/' + postId;
//    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

//  const [postResponce, commentsResponse] = await Promise.all([
//        fetch(postUrl),
//        fetch(commentsUrl)
//    ])
  
  
//    const postData = await postResponce.json();

//    document.getElementById('post-title').textContent = postData.title;
//    document.getElementById('post-body').textContent = postData.body;

   

//    const commentsData = await commentsResponse.json();

//    const comments = Object.values(commentsData).filter(c => c.postId == postId);

  

//    comments.map(createComment).forEach(c => commentsUl.appendChild(c)); 

  
// }

// function createComment(comment) {
//     const result = document.createElement('li');
//     result.textContent = comment.text;
//     result.id = comment.id;
//     return result;
// }




function attachEvents() {
      document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
      document.getElementById("btnViewPost").addEventListener('click', displayPost);
}

attachEvents();

async function displayPost() {
    const titleElement = document.getElementById("post-title");
    const bodyElement = document.getElementById("post-body");
    const ulElement = document.getElementById("post-comments");

    titleElement.textContent = 'Loading...';
    bodyElement.textContent = '';
    ulElement.replaceChildren();
    
    const selectedId = document.getElementById('posts').value;
   const [post, comments] = await Promise.all([
        getPostById(selectedId),
        getComentsByPostId(selectedId)
    ]);


    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;

        
    comments.forEach(c => {
       const liElement = document.createElement('li');
       liElement.textContent = c.text;
       ulElement.appendChild(liElement);
    });
}


async function getAllPosts() {
    const url = `http://localhost:3030/jsonstore/blog/posts`;

    const res = await fetch(url);
    const data = await res.json();

    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();
    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;

        selectElement.appendChild(optionElement);
    })
}

async function getPostById(postId) {
    const url = `http://localhost:3030/jsonstore/blog/posts/`+ postId;

    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getComentsByPostId(postId) {
    const url = `http://localhost:3030/jsonstore/blog/comments`;

    const res = await fetch(url);
    const data = await res.json();

    const comments = Object.values(data).filter(c => c.postId == postId);

    return comments;
}