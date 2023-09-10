import { updateNav } from "../auth/update-nav.js";
import { register } from "../auth/users.js";
import { registerTemplate } from "../templates/register-template.js";

export function renderRegisterPage(ctx) {
    ctx.render(registerTemplate(onLogin.bind(null, ctx)));
}

async function onLogin(ctx, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();

    if (Object.values(formData).some(x => !x)) {alert('All fields must be filled'); return }
    if (formData.password !== formData.rePass) { alert('Passwords must match!'); return }

    await register(formData.email, formData.password);
    updateNav();
    ctx.page.redirect('/');
}
