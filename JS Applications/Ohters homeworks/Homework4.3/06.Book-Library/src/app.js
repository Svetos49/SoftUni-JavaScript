import { render } from "../node_modules/lit-html/lit-html.js";
import { showHome } from "./home.js";
import { showCreate } from "./create.js";

const root = document.querySelector('body');


const ctx = {
    update,
};
ctx.update();
function update() {
    render([showHome(ctx),
    showCreate(ctx)], root);
};
