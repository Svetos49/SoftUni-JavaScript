import { editFurniture, getOneFurniture } from "../api/furniture.js";
import { furnitureEditTemplate } from "../templates/furniture-edit-template.js";
import { areFieldsValid } from "../utils/furniture-field-validation.js";

export async function renderFurnitureEditPage(ctx) {
    const furnitureId = ctx.params.id;
    const furnitureData = await getOneFurniture(furnitureId);
    ctx.render(furnitureEditTemplate(furnitureData, onEdit.bind(null, ctx, furnitureId)));
}

async function onEdit(ctx, furnitureId, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target));

    if (!areFieldsValid(e.target, formData)) return;
    e.target.reset();

    await editFurniture(furnitureId, formData);
    ctx.page.redirect(`/details/${furnitureId}`);
}
