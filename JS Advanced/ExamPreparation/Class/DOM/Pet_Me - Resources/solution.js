function solve() {
    // get references to element of interest
    const fields = document.querySelectorAll('#container input');
    const addBtn = document.querySelector('#container button');;
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    }

    // configer invent listener
    addBtn.addEventListener('click', addPet);

    // # add new pet
    // read input fiels
    // validate values
    // create new list item
    // configure ivent listener for newly created element
    function addPet(event) {
        event.preventDefault();

        // const [name, age, kind, owner] = fields.map(f => f.value.trim() || Number.isNan(Number(age)));

        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();

        if (name == '' || input.age.value.trim() == '' || Number.isNaN(age) || kind == '' || owner == '') {
            return;
        }

        // if(fields.map(f => f.value.trim()).some(v => v == '')) {
        //     return;
        // }
        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind),
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );
        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);
    
        // input.name.value = '';
        // input.age.value = '';
        // input.kind.value = '';
        // input.owner.value = '';

        Array.from(fields).forEach(f => f.value = ''); 

     // # contact owner
    // create confirmation div
    // configure ivent listener for new button
    // replace existing button with confirmation div

    function contact() {
        const confirmInput = e('input', { placeholder: 'Enter your names' });
        const confirmBtn = e('button', {}, 'Yes! I take it!');

        const confirmDiv = e('div', {},
            confirmInput,
            confirmBtn
        );

        confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

        contactBtn.remove();
        pet.appendChild(confirmDiv);

    }
}
    // # adopt pet
    // read and validate input
    // create new button for checking
    // configure ivent listener for new button
    // replace confirmation div with new button
    // change text content of owner span
    // move element to other list
    function adopt(input, pet) {
        const newOwner = input.value.trim();
        if(newOwner == '') {
            return
        }


        const checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet));

       // pet.querySelector('div').replaceWith(checkBtn) - it no work in judge
        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);
        
        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);
    }

    // # checking of adopted pet
    // remove element from DOM
    function check(pet) {
       pet.remove();
    }

    // const pet = document.createElement('li');
    // pet.innerHTML = 

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }

}

