import {page, render} from './lib.js';
import { homePage } from './view/home.js';
import {catalogPage} from './view/catalog.js';
import { loginPage } from './view/login.js';
import { registerPage } from './view/register.js';
import { logout } from './api/api.js';
import { getUserData } from './util.js';
import { createPage } from './view/create.js';
import { detailsPage } from './view/details.js';

// import * as api from './api/data.js';
// window.api = api;

const root = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/memes', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/details/:id', detailsPage)

updateUserNav();

page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

 function onLogout() {
   logout();
   updateUserNav();
}

function updateUserNav() {
    const userData = getUserData();

    if(userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}