document.querySelector(".load").addEventListener("click", loadAll);

async function loadAll() {
    const catchesDiv = document.querySelector("#catches");
    let response = await fetch(`http://localhost:3030/data/catches/`);
    let data = await response.json();
    catchesDiv.innerHTML = ""
    for (let c of data) {
        catchesDiv.innerHTML += `<div class="catch" id = "${c._id}"><label>Angler</label><input type="text" class="angler" value="${c.angler}"/><hr><label>Weight</label><input type="number" class="weight" value="${c.weight}" /><hr><label>Species</label><input type="text" class="species" value="${c.species}" /><hr><label>Location</label><input type="text" class="location" value="${c.location}" /><hr><label>Bait</label><input type="text" class="bait" value="${c.bait}"/><hr><label>Capture Time</label><input type="number" class="captureTime" value="${c.captureTime}"/><hr><button disabled class="update">Update</button><button disabled class="delete">Delete</button></div></div>`
    }
}

document.querySelector('#guest').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll("button")[1].addEventListener('click', onSubmit);
    console.log(document.querySelectorAll("button"));
    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await fetch(`http://localhost:3030/users/login`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        if (response.ok) {
            e.target.reset();
            const data = await response.json();
            sessionStorage.setItem('authToken', data.accessToken);
            sessionStorage.setItem('userId', data._id);
            sessionStorage.setItem('email', data.email);
            window.location.href = 'index.html'
        } else {
            const error = await response.json();
            alert(error.message)
        }
    }
})