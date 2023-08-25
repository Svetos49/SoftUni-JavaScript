import { html,render } from '../node_modules/lit-html/lit-html.js';
import { cats } from '../02.HTTP-Status-Cats/catSeeder.js';

let allCats = document.getElementById('allCats');

let catTemplate = (data) => html`
<li>
    <img src="./images/${data['imageLocation']}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn" @click=${handler}>Show status code</button>
        <div class="status" style="display: none" id="${data['statusCode']}">
            <h4 class="card-title">Status Code: ${data['statusCode']}</h4>
            <p class="card-text">${data['statusMessage']}</p>
        </div>
    </div>
</li>
`;

let catsTemplate = (cats) => html`
<ul>
    ${cats.map((cat) => catTemplate(cat))}
</ul>
`;

render(catsTemplate(cats),allCats);

function handler(e){
   let div = e.target.parentNode.getElementsByClassName('status')[0];
   if(e.target.textContent == 'Show status code'){
        div.style.display = 'block';
        e.target.textContent = 'Hide status code';
   }
   else{
    div.style.display = 'none';
    e.target.textContent = 'Show status code';
   }
}