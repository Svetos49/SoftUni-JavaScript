
import { html, render } from "../node_modules/lit-html/lit-html.js";
import { until } from "../node_modules/lit-html/directives/until.js";
import { showCreate, } from "./create.js";
import { showEdit, updateBook } from "./edit.js";
import { deleteBook } from "./data.js";


const root = document.querySelector('body');

const homeTemplate = (booksPromise) => html`
<button @click=${loadAllBooks} id="loadBooks">LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>${until(booksPromise, html`<tr>
            <td colSpan="3">Loading...</td>
        </tr>`)}
    </tbody>
</table>`;

const bookRow = (book) => html`
<tr>
    <td>${book[1].title}</td>
    <td>${book[1].author}</td>
    <td id=${book[0]}>
        <button @click=${()=> updateBook(book, ctx)}>Edit</button>
        <button @click=${() => deleteCurrBook(book, ctx)}>Delete</button>
    </td>
</tr>`
let ctx = null;
export function showHome(ctxTarget) {
    ctx = ctxTarget;
    ctx.mockData = homeTemplate(getAllBooks());
    return homeTemplate(getAllBooks());
}

async function getAllBooks() {
    const response = await fetch('http://localhost:3030/jsonstore/collections/books');
    const data = await response.json();
    let result = Object.entries(data).map(bookRow);
    
    return result;
};

export async function loadAllBooks() {
    return render([showHome(ctx),
    showCreate(ctx)], root);
};

function deleteCurrBook(book, ctx) {
    deleteBook(book[0])
    ctx.update();
    console.log(book)
};