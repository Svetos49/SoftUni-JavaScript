
import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('menu');
const input = document.getElementById('itemText');
document.querySelector('[type="submit"]').addEventListener('click', onSubmit);

async function getList() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await response.json();
    return Object.values(data);
};
update();
async function update() {
    const list = await getList()
    render(list.map(optionTemplate), root);
};

const optionTemplate = (opt) => html`
<option value=${opt._id}>${opt.text}</option>`;

async function onSubmit(event) {
    event.preventDefault();
    
    const text = input.value;
    await addOpt({ text });
    update();
};
async function addOpt(data) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
};

