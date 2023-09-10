import { updateNav } from "../auth/update-nav.js";
import { login } from "../auth/users.js";
import { loginTemplate } from "../templates/login-template.js";

export function renderLoginPage(ctx) {
    ctx.render(loginTemplate(onLogin.bind(null, ctx)));
}

async function onLogin(ctx, e) {
    e.preventDefault();

    let formData = Object.fromEntries(new FormData(e.target));
    e.target.reset();

    if (Object.values(formData).some(x => !x)) {alert('All fields must be filled'); return }

    await login(formData.email, formData.password);
    updateNav();
    ctx.page.redirect('/');
}
