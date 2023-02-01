function solve() {
    let divElement = document.querySelector(".modules");
 
    //Attach click event to the main Div Element
    divElement.addEventListener('click',function (e) {
        if(e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
            Array.from(divElement.children).forEach(div => {
                if (div.querySelector('li') == null){
                    div.remove();
                }
            })
        }
 
    })
    
    //taking the form references
    let inputs = document.querySelectorAll('.form-control>input')
    let nameInput = inputs[0];
    let dateInput = inputs[1];
    let dropDown = document.querySelector('.form-control>select');
    //adding event to the add button
    let addBtn = document.querySelector('.form-control>button');
    addBtn.addEventListener('click', add);
 
    function add(e) {
        //prevent default behaviour a.k.a refresh
              e.preventDefault();
        //checking the values of the dropmenu and other input fields  
        if (dropDown.selectedIndex <= 0 || dateInput.value == "" || nameInput.value == "") {
            
            return; 
        }
        //Transforming data
 
        let arrayOfValues = dateInput.value.split("T");
        arrayOfValues[0] = arrayOfValues[0].replace(/-/g,"/");
        arrayOfValues.unshift(nameInput.value);
 
        //Creating the lecture only the Li element and his children
        let newLiElement = document.createElement('li');
        let newh4Element = document.createElement('h4');
        let newBtnElement = document.createElement('button');
    
        newLiElement.classList.add('flex');
        newBtnElement.classList.add('red');
 
        newh4Element.textContent = arrayOfValues.join(" - ");
        newBtnElement.textContent = 'Del';
 
        newLiElement.appendChild(newh4Element);
        newLiElement.appendChild(newBtnElement);
        // We are finding if there is an existing module with the current entered module name 
        let index = Array.from(divElement.querySelectorAll('div')).findIndex(div => div.firstElementChild.textContent === `${dropDown.value.toUpperCase()}-MODULE`)
        // if there is , we append the Lecture (li element) to it.
        if (index !== -1) {
            let existingUl = divElement.querySelectorAll('div')[index].querySelector('ul')
            existingUl.appendChild(newLiElement);
            Array.from(existingUl.children).sort((a, b) => {
                return a.firstElementChild.textContent.split(" - ")[1].localeCompare(b.firstElementChild.textContent.split(" - ")[1]) || a.firstElementChild.textContent.split(" - ")[2].localeCompare(b.firstElementChild.textContent.split(" - ")[2])
 
            }).forEach(li => existingUl.appendChild(li))
            // putting again Default Values
            dateInput.value = "";
            nameInput.value = "";
            dropDown.querySelector('option').selected = true;
 
 
        } else {
            //There is not existing module we create it and append the Lecture to it
            let newDivElement = document.createElement('div');
            let newh3Element = document.createElement('h3');
            let newUlElement = document.createElement('ul');
 
 
            newDivElement.classList.add("module");
            newh3Element.textContent = `${dropDown.value.toUpperCase()}-MODULE`;
            newUlElement.appendChild(newLiElement);
            newDivElement.appendChild(newh3Element);
            newDivElement.appendChild(newUlElement);
             
            divElement.appendChild(newDivElement);
 
            dateInput.value = "";
            nameInput.value = "";
            dropDown.querySelector('option').selected = true;
        }
 
    }
 
}