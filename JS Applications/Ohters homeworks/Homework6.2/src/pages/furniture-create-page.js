import { createFurniture } from "../api/furniture.js";
import { furnitureCreateTemplate } from "../templates/furniture-create-template.js";
import { areFieldsValid } from "../utils/furniture-field-validation.js";

export function renderFurnitureCreatePage(ctx) {
    ctx.render(furnitureCreateTemplate(onCreate.bind(null, ctx)));
}

async function onCreate(ctx, e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));
    if (!areFieldsValid(e.target, formData)) return;

    await createFurniture(formData);
    ctx.redirect('/');
}
