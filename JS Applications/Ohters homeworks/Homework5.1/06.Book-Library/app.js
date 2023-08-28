import { html, render } from '../node_modules/lit-html/lit-html.js';
import { bookTemplate } from '../06.Book-Library/templates.js';
import { addForm } from '../06.Book-Library/addForm.js';

let url = `http://localhost:3030/jsonstore/collections/books`;
let loadAllBooksBtn = document.getElementById('loadBooks');
let table = document.querySelector('table');
let body = document.querySelector('body');

render(addForm(),body);

loadAllBooksBtn.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let books = Object.entries(data);
            displayBooks(books);
        })
        .catch(error => console.log(error));
});

function displayBooks(books) {
    render(bookTemplate(books),table);
}