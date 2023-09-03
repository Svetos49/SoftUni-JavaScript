import { html, render } from '../node_modules/lit-html/lit-html.js';

const liTemplate = (data) => html`
<ul>
${data.map(t => html`<li>${t}</li>`)}
</ul>
`;

let loadBtn = document.getElementById('btnLoadTowns');
loadBtn.addEventListener('click', loadTowns);

function loadTowns(e) {
    e.preventDefault();

    const root = document.getElementById('root');
    const towns = document.getElementById('towns').value.split(', ');

    if (towns == '') {
        alert('Input field is required!');
        return;
    }

    document.getElementById('towns').value = '';

    const ul = document.createElement('ul');

    const result = liTemplate(towns);
    render(result, root);
}