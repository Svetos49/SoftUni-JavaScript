 import { start } from 'page';
import {page, render} from './lib.js';
 import { homePage } from './view/home.js';
 
 
  import * as api from './api/data.js';
  window.api = api;

const root = document.querySelector('main');

  page(decorateContext);
  page('/', homePage);
  page('/', catalogPage);

  page.start();

  function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);

    next();
  }