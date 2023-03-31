import {html} from '../../node_modules/lit-html/lit-html.js'
import {register} from '../api/api.js'

const registerTemplate = (formSubmit, inValidEmail, inValidPass, inValidRe) => html `
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${formSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${'form-control '  + (inValidEmail ? 'is-invalid' : 'is-valid')} id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${'form-control ' +  (inValidPass ? 'is-invalid' : 'is-valid')} id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class=${'form-control '  + (inValidRe ? 'is-invalid' : 'is-valid')} id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
    `



export async function registerPage(ctx){
    ctx.render(registerTemplate(formSubmit))

    async function formSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.target)
        const email = formData.get('email')
        const password = formData.get('password')
        const repass = formData.get('rePass')
    
        if(email == '' || password == '' || repass == ''){
            ctx.render(registerTemplate(formSubmit, email == '', password == '' , repass == ''))
            return alert ('You must fill all fields')
        }
        if (password != repass){
            ctx.render(registerTemplate(formSubmit, false, true , true))
            return alert('Password Mismatch')
        }
        await register(email, password)
        ctx.setUserNav
        ctx.page.redirect('/')
    }


}