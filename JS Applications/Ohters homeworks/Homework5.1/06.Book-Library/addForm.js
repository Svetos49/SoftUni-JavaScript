import { html } from '../node_modules/lit-html/lit-html.js';

let url = `http://localhost:3030/jsonstore/collections/books`;

export let addForm = () => html`
<form id="add-form" @submit=${submit}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
`;

function submit(e) {
    e.preventDefault();

    let form = document.getElementById('add-form');
    let formData = new FormData(form);

    let author = formData.get('author');
    let title = formData.get('title');

    if (author.trim().length > 0 && title.trim().length > 0) {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, title })
        })
            .then(() => {
                form.reset();
            })
            .catch(error => console.log(error));
    }
}