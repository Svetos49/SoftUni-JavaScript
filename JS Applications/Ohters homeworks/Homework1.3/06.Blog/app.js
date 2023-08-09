function attachEvents() {
  const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
  const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

  let btnLoadPosts = document.getElementById('btnLoadPosts');
  let selector = document.getElementById('posts');
  let btnViewPost = document.getElementById('btnViewPost');

  btnLoadPosts.addEventListener('click', getPostsHandler);
  btnViewPost.addEventListener('click', getCommentsHandler);

  async function getPostsHandler(ev) {
    let res = await fetch(postsURL);
    let data = await res.json();

    for (const key in data) {
      let result = e('option', { value: `${key}` }, data[key].title);

      selector.appendChild(result);
    }
  }

  async function getCommentsHandler(ev) {
    let postTitle = document.getElementById('post-title');
    postTitle.textContent = '';
    let postBody = document.getElementById('post-body');
    postBody.textContent = '';
    let postComments = document.getElementById('post-comments');
    postComments.textContent = '';

    let res = await fetch(commentsURL);
    let data = await res.json();

    let filteredCommentsByPost = Object.entries(data).filter(
      ([a, b]) => b['postId'] == `${selector.value}`
    );

    //console.log(filteredCommentsByPost);
    //console.log(selector.value);

    let resPost = await fetch(postsURL + `/${selector.value}`);
    let dataPost = await resPost.json();

    let [...commentsArr] = filteredCommentsByPost.map(([id, cData]) => {
      return e('li', { id: `${[cData.id]}` }, `${cData.text}`);
    });

    //  console.log(commentsArr);

    postTitle.textContent = `${dataPost['title']}`;
    postBody.textContent = `${dataPost.body}`;
    commentsArr.forEach((x) => postComments.appendChild(x));

    //console.log(dataPost);
  }

  function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
      if (attr.substring(0, 2) == 'on') {
        result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
      } else {
        if (value === '') {
          result.setAttribute(attr, '');
        } else {
          result[attr] = value;
        }
      }
    }

    content = content.reduce(
      (a, c) => a.concat(Array.isArray(c) ? c : [c]),
      []
    );

    content.forEach((e) => {
      if (typeof e == 'string' || typeof e == 'number') {
        const node = document.createTextNode(e);
        result.appendChild(node);
      } else {
        result.appendChild(e);
      }
    });

    return result;
  }
}

attachEvents();
