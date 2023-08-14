let user = localStorage.getItem("user");
const welcomeSpan = document.querySelector(".email span");
const addBtn = document.querySelector("#addForm button");

if(user !== null){
    user = JSON.parse(user);
    welcomeSpan.textContent = user.email;
    addBtn.disabled = false;
    let loginBtn = document.querySelector("#login");
    loginBtn.style.display = "none";

    let registerBtn = document.querySelector("#register");
    registerBtn.style.display = "none"   
} else {
    let logoutBtn = document.querySelector("#logout");
    logoutBtn.style.display = "none";
}

document.querySelector("#logout").addEventListener("click",logoutFunc);
document.querySelector(".load").addEventListener("click", loadCatches);
let divCatches = document.querySelector("#catches");
divCatches.innerHTML = "";

async function logoutFunc(){

    if(user !== null){
        
        let res = await fetch("http://localhost:3030/users/logout",{
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": user.accessToken
        }
    });
        localStorage.removeItem("user");
        window.location.href = "/index.html";
    }
}

async function loadCatches(){
    divCatches.innerHTML = "";

    const res = await fetch("http://localhost:3030/data/catches");
    const data = await res.json();
    console.log(data);

    data.forEach(c => {
        let div = document.createElement("div");
        div.classList.add("catch");
    
        console.log(c)
        let labelAngler = document.createElement("label");
        labelAngler.textContent = "Angler";

        let inputAngler= document.createElement("input");
        inputAngler.value = c.angler;
        inputAngler.classList.add("angler");

        let labelWeight = document.createElement("label");
        labelWeight.textContent = "Weight";

        let inputWeight= document.createElement("input");
        inputWeight.value = c.weight;
        inputWeight.classList.add("weight");

        let labelSpecies = document.createElement("label");
        labelSpecies.textContent = "Species";

        let inputSpecies = document.createElement("input");
        inputSpecies.value = c.species;
        inputSpecies.classList.add("species");

        let labelLocation = document.createElement("label");
        labelLocation.textContent = "Location"

        let inputLocation = document.createElement("input");
        inputLocation.value = c.location;
        inputLocation.classList.add("location")

        let labelBait = document.createElement("label");
        labelBait.textContent = "Bait";

        let inputBait = document.createElement("input");
        inputBait.value = c.bait;
        inputBait.classList.add("bait")

        let labelCapture = document.createElement("label");
        labelCapture.textContent = "Capture Time";

        let inputCapture = document.createElement("input");
        inputCapture.value = c.captureTime;
        inputCapture.classList.add("captureTime");

        let updateButton = document.createElement("button");
        updateButton.classList.add("update");
        updateButton.setAttribute("data-id", c._id);
        updateButton.textContent = "UPDATE";
        updateButton.addEventListener("click", updateCatch);

        async function updateCatch(){
            let res = await fetch(`http://localhost:3030/data/catches/${c._id}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                    "X-Authorization": user.accessToken
                },
                body: JSON.stringify({angler: inputAngler.value, weight: inputWeight.value, species: inputSpecies.value, location: inputLocation.value, bait: inputBait.value, captureTime: inputCapture.value})
            });
            loadCatches();
            
        }

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        updateButton.setAttribute("data-id", c._id);
        deleteButton.textContent = "DELETE";
        deleteButton.addEventListener("click", deleteCatch)

        async function deleteCatch(){
            let res = await fetch(`http://localhost:3030/data/catches/${c._id}`,{
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": user.accessToken
                }
            })
            loadCatches();
        }

        if(user == null || user._id !== c._ownerId){
            updateButton.disabled = true;
            deleteButton.disabled = true;
        }
       
        div.appendChild(labelAngler);
        div.appendChild(inputAngler);
        div.appendChild(labelWeight);
        div.appendChild(inputWeight);
        div.appendChild(labelSpecies);
        div.appendChild(inputSpecies);
        div.appendChild(labelLocation);
        div.appendChild(inputLocation);
        div.appendChild(labelBait);
        div.appendChild(inputBait);
        div.appendChild(labelCapture);
        div.appendChild(inputCapture);
        div.appendChild(updateButton);
        div.appendChild(deleteButton);
        divCatches.appendChild(div);
    })
}

let form = document.querySelector("#addForm");
form.addEventListener("submit", onSubmit);

async function onSubmit(){
   
    const formData = new FormData(form);

    const angler = formData.get("angler");
    const weight = formData.get("weight");
    const species = formData.get("species");
    const location = formData.get("location");
    const bait = formData.get("bait");
    const captureTime = formData.get("captureTime");

    if(angler !== "" && weight !== "" && species !== "" && location !== "" && bait !== "" && captureTime !== ""){
        let res = await fetch("http://localhost:3030/data/catches",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Authorization": user.accessToken
            },
            body: JSON.stringify({angler, weight, species, location, bait, captureTime})
        })
    }

}


