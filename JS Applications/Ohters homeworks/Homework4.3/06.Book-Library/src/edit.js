import { html, render } from "../node_modules/lit-html/lit-html.js";
import { showCreate } from "./create.js";
import { editBook, getBook } from "./data.js";
import { showHome } from "./home.js";

const root = document.querySelector('body');


const editTemplate = (data) => html`
<form @submit=${onSubmit} id="edit-form">
    <input type="hidden" value=${data[0]} name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" value=${data[1].title} placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" value=${data[1].author} placeholder="Author...">
    <input type="submit" value="Save">
</form>`;

let ctx = null;
export function showEdit(ctxTarget) {
    //  ctx = ctxTarget;
    return editTemplate();
};

export async function updateBook(data, ctxTarget) {
    let result = editTemplate(data);
    render([ctxTarget.mockData,
        result], root);
    ctx = ctxTarget;
};
async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();
    const id = formData.get('id').trim();
    await editBook(id, { author, title });
    console.log(ctx)
    ctx.update();
}