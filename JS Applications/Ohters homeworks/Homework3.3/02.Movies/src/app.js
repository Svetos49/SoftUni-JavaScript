import { showView } from "./router.js";


const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logoutPage,
    '/register': registerPage,
    '/create': createPage
};

document.querySelector('nav').addEventListener('click', (e) => {
    if(e.target.tagName === 'A' && e.target.href) {
        e.preventDefault();

        let url = new URL(e.target.href);
        const view = routes[url.pathname];
        
        if(typeof view == 'function') {
            view();
        }
    }
});

let homeSection = document.querySelector('#home-page');
let loginSection = document.querySelector('#form-login');
let registerSection = document.querySelector('#form-sign-up');
let createSection = document.querySelector('#add-movie');
let detailsSection = document.querySelector('#movie-example');
let editSection = document.querySelector('#edit-movie');


function homePage() {
    showView(homeSection)
}

function loginPage() {
    showView(loginSection)
}

function registerPage() {
    showView(registerSection)
}

function createPage() {
    showView(createSection)
}

function detailsPage() {
    showView(detailsSection)
}

function editPage() {
    showView(editSection)
}

function logoutPage() {
    alert('Logged Out')
}