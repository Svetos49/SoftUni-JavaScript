import {html, render} from '../../node_modules/lit-html/lit-html.js';

const root = document.querySelector('main');

function ctxRender(content) {
   render(content, root)
}

export function addRender(ctx, next) {
   ctx.render = ctxRender;
   
    next();
}