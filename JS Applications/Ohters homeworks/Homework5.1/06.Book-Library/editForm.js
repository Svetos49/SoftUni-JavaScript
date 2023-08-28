import { html,render } from '../node_modules/lit-html/lit-html.js';
import {addForm} from './addForm.js';

let url = `http://localhost:3030/jsonstore/collections/books`;

export let editForm = (title, author, id) => html`
<form id="edit-form" @submit=${edit}>
    <input type="hidden" name="id" value=${id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." value='${title}'>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." value='${author}'>
    <input type="submit" value="Save">
</form>
`;

function edit(e) {
    e.preventDefault();

    let form = document.getElementById('edit-form');;
    let formData = new FormData(form);
    let body = document.querySelector('body');

    let title = formData.get('title');
    let author = formData.get('author');
    let id = formData.get('id');

    if (author.trim().length > 0 && title.trim().length > 0) {
        fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, title })
        })
            .then(render(addForm(),body))
            .catch(error => console.log(error))
    }
}