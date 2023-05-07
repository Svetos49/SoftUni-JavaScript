const registerForm = document.querySelector("#register");
registerForm.addEventListener("submit", onRegister);

async function onRegister(e){
    e.preventDefault();
    const formData = new FormData(registerForm);

    const email = formData.get("email");
    const password = formData.get("password");
    const repPass = formData.get("rePass");

    if(password !== repPass){
        alert("Passwords do not match!");
        return;
    }
    
    try{
        const res = await fetch("http://localhost:3030/users/register",{
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        if(!res.ok){
            const error = await res.json()
            throw new Error(error.message)
        }
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/index.html";
    } catch(err){
        alert(err.message);
        throw err;
    }
}


const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit",onSubmitLogin);


async function onSubmitLogin(e){
    console.log("Login");
    e.preventDefault();
   
    const formData = new FormData(loginForm);

    const email = formData.get("email");
    const password = formData.get("password");

    
    try{
        const res = await fetch("http://localhost:3030/users/login",{
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        });
        if(!res.ok){
            const error = await res.json()
            throw new Error(error.message)
        }
        const user = await res.json();
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/index.html";
    } catch(err){
        alert(err.message);
        throw err;
    }
}


