window.addEventListener('load', solve);

function solve() {
    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');

    let buttonElement = document.getElementById('add-btn');

    let songContainerElement = document.querySelector('#all-hits .all-hits-container');
    let saveSongElement = document.querySelector('#saved-hits .saved-container');
    let likeCounterElement = document.querySelector('#total-likes .likes p');

    let likes = 0;

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let genre = genreElement.value;
        let name = nameElement.value;
        let author = authorElement.value;
        let date = dateElement.value;

        if (genre && name && author && date) {
            let divElement = document.createElement('div');
            divElement.classList.add('hits-info');

            let imgElement = document.createElement('img');
            imgElement.src = './static/img/img.png';
            divElement.appendChild(imgElement);

            let h2GenreElement = document.createElement('h2');
            h2GenreElement.textContent = `Genre: ${genre}`;
            divElement.appendChild(h2GenreElement);

            let h2NameElement = document.createElement('h2');
            h2NameElement.textContent = `Name: ${name}`;
            divElement.appendChild(h2NameElement);

            let h2AuthorElement = document.createElement('h2');
            h2AuthorElement.textContent = `Author: ${author}`;
            divElement.appendChild(h2AuthorElement);

            let h3DateElement = document.createElement('h3');
            h3DateElement.textContent = `Date: ${date}`;
            divElement.appendChild(h3DateElement);

            let saveButton = document.createElement('button');
            saveButton.classList.add('save-btn');
            saveButton.textContent = 'Save song';
            divElement.appendChild(saveButton);

            let likeButton = document.createElement('button');
            likeButton.classList.add('like-btn');
            likeButton.textContent = 'Like song';
            divElement.appendChild(likeButton);

            let deleteButton = document.createElement('button');
            deleteButton.classList.add('delete-btn');
            deleteButton.textContent = 'Delete';
            divElement.appendChild(deleteButton);

            songContainerElement.appendChild(divElement);

            genreElement.value = '';
            nameElement.value = '';
            authorElement.value = '';
            dateElement.value = '';

        }
    });

    songContainerElement.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {


            if (e.target.className == 'save-btn') {
                let divElement = e.target.parentNode;
                let saveButton = divElement.querySelector('.save-btn');
                let likeButton = divElement.querySelector('.like-btn');
                let deleteButton = divElement.querySelector('.delete-btn');
                divElement.removeChild(saveButton);
                divElement.removeChild(likeButton);
                deleteButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.target.parentNode.remove();
                })
                saveSongElement.appendChild(divElement);
            } else if (e.target.className == 'like-btn') {

                if (!e.target.hasAttribute('disabled')) {
                    likes++;
                    e.target.disabled = true;
                    likeCounterElement.textContent = `Total Likes: ${likes}`;
                }
            } else if (e.target.className == 'delete-btn') {
                e.target.parentNode.remove();
            }
        }
    })
}