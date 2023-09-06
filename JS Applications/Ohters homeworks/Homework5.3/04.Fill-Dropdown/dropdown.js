import { html, render } from '../node_modules/lit-html/lit-html.js';
const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

const template = (data) => html`
${data.map(x => html`<option value = ${x._id}>${x.text} </option>`)}
`;

const main = document.getElementById('menu');

async function loadMenu() {
    const response = await fetch(url);
    const data = await response.json();

    render(template(Object.values(data)), main);
}

loadMenu();

document.querySelector('form').addEventListener('submit', addItem);

async function addItem(e) {
    e.preventDefault();

    let input = document.getElementById('itemText').value;

    if (input !== '') {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/js'
            },
            body: JSON.stringify({ text: input })
        });

        const data = await response.json();

        if (response.status != 200) {
            throw new Error(data.message);
        }

        loadMenu();
        input = '';
    } else {
        alert('Input field is empty or the dropdown menu already contains this option!');
    }
}