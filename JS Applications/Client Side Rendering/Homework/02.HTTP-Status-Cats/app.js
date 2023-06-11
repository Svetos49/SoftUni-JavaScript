import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

const root = document.getElementById('allCats');

const catTemlate = (cats, toggleDetails) => html`
<ul>${cats.map(cat => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${toggleDetails}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}</ul>`;

update();
function update() {
    render(catTemlate(cats, toggleDetails), root);
};
function toggleDetails(event) {
    const hiddenDiv = event.target.parentElement.querySelector('.status');
    if(hiddenDiv.style.display == 'none'){
        hiddenDiv.style.display = 'block';
        event.target.textContent = 'Hide status code';
    } else{
        hiddenDiv.style.display = 'none';
        event.target.textContent = 'Show status code';
    };
};
console.log(cats)

