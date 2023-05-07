const form = document.querySelector("form");
form.addEventListener("submit",onSubmit);

let user = localStorage.getItem("user");

if(user == null){
    let logoutBtn = document.querySelector("#logout");
    logoutBtn.style.display = "none";

    let registerBtn = document.querySelector("#register");
    registerBtn.style.display = "none" ;
}

async function onSubmit(e){
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPassword = formData.get("rePass");
    if(password !== repeatPassword){
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
        console.log(JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/index.html";
    } catch(err){
        alert(err.message);
        throw err;
    }
}

