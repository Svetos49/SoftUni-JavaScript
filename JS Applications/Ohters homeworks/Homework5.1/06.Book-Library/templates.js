import { html, render } from '../node_modules/lit-html/lit-html.js';
import { editForm } from './editForm.js';

let url = `http://localhost:3030/jsonstore/collections/books`;

let bookTemplate = (books) => html`
<tbody>
    ${books.map((book) => html`
    <tr id=${book[0]}>
        <td class='title'>${book[1]['title']}</td>
        <td class='author'>${book[1]['author']}</td>
        <td>
            <button @click=${editFnc}>Edit</button>
            <button @click=${deleteFnc}>Delete</button>
        </td>
    </tr>`)}
</tbody>
`;

function editFnc(e) {
    e.preventDefault();

    let body = document.querySelector('body');
    let target = e.target.parentNode.parentNode;

    let id = target.id;
    let title = target.getElementsByClassName('title')[0];
    let author = target.getElementsByClassName('author')[0];

    render(editForm(title.textContent, author.textContent, id), body);
}

function deleteFnc(e) {
    e.preventDefault();

    let target = e.target.parentNode.parentNode;
    let id = target.id;

    fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
        .catch(error => console.log(error))
}

export {
    bookTemplate
}