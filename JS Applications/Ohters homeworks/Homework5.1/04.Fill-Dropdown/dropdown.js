import { html, render } from '../node_modules/lit-html/lit-html.js';

let url = `http://localhost:3030/jsonstore/advanced/dropdown`;
let itemMenu = document.getElementById('menu');
let form = document.querySelector('form');

let itemsTemplate = (entries) => html`
${entries.map((item) => html`<option value='${item[0]}'>${item[1]['text']}</option>`)}
`;

loadAllItems();

function loadAllItems() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let entries = Object.entries(data);
            render(itemsTemplate(entries), itemMenu);
        })
        .catch(error => console.log(error));
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.getElementById('itemText');
    let text = input.value;

    fetch(url,{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({text})
    })
    .then(() => {
        input.value = '';
        loadAllItems()
    })
    .catch(error => console.log(error))
});