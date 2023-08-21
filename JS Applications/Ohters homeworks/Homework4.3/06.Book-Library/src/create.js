import { html } from "../node_modules/lit-html/lit-html.js";
import { addBook } from "./data.js";


const createTemplate = () => html`
<form @submit=${onSubmit} id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>`
let ctx = null;
export function showCreate(ctxTarget) {
    ctx = ctxTarget;
    return createTemplate();
};

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();
    await addBook({ author, title });
    ctx.update();
}
