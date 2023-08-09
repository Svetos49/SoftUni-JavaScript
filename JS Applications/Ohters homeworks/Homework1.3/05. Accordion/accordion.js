async function solution() {
  const main = document.getElementById('main');

  const baseURL = `http://localhost:3030/jsonstore/advanced/articles/list`;
  const response = await fetch(baseURL);
  const data = await response.json();

  data.forEach((a) => {
    main.appendChild(createArticle(a));
  });

  function createArticle(obj) {
   
    const ArticleElement = document.createElement('div');
    ArticleElement.classList.add('accordion');
    const headElement = document.createElement('div');
    headElement.classList.add('head');
    const titleSpan = document.createElement('span');
    titleSpan.textContent = obj.title;
    const moreBtn = document.createElement('button');
    moreBtn.classList.add('button');
    moreBtn.textContent = 'More';
    moreBtn.setAttribute('id', obj._id);

    moreBtn.addEventListener('click', extraInfoHandler);
    headElement.appendChild(titleSpan);
    headElement.appendChild(moreBtn);

    const extraElement = document.createElement('div');
    extraElement.classList.add('extra');
    const pElement = document.createElement('p');
    extraElement.appendChild(pElement);

    ArticleElement.appendChild(headElement);
    ArticleElement.appendChild(extraElement);

    return ArticleElement;
  }

  async function extraInfoHandler(e) {
    let id = e.currentTarget.getAttribute('id');
    let currentButton = e.currentTarget;
    let extraEl =
      currentButton.parentElement.parentElement.querySelector('.extra');
    const objectURL = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

    if (currentButton.textContent === 'More') {
      const response = await fetch(objectURL);
      const data = await response.json();

      currentButton.textContent = 'Less';
      extraEl.textContent = data.content;
      extraEl.style.display = 'block';
    } else {
      currentButton.textContent = 'More';
      extraEl.style.display = 'none';
    }
  }
}

solution();
