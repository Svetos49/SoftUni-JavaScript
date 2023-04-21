async function solve() {
    const url = `http://localhost:3030/jsonstore/collections/students`;
    const table = document.querySelector('#results tbody');

    const responce = await fetch(url);
    const data = await responce.json();
    Object.values(data).forEach(s =>{
        const firstName = s.firstName;
        const lastName = s.lastName;
        const facultyNum = s.facultyNumber;
        const grade = Number(s.grade);
         
        const tr = document.createElement('tr');
        
        const firstNameCell = tr.insertCell();
        firstNameCell.innerText = firstName;

        const lastNameCell = tr.insertCell();
        lastNameCell.innerText = lastName;

        const facultyNumCell = tr.insertCell();
        facultyNumCell.innerText = facultyNum;

        const gradeCell = tr.insertCell();
        gradeCell.innerText = grade;
        
       table.appendChild(tr);
    });

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', onClickSubmit);
    
    async function onClickSubmit(ev) {
        ev.preventDefault();

        const firstNameInput = document.getElementsByName('firstName')[0];
        const lastNameInput = document.getElementsByName('lastName')[0];
        const facultyNumberInput = document.getElementsByName('facultyNumber')[0];
        const gradeInput = document.getElementsByName('grade')[0];

        if(isNaN(facultyNumberInput.value) || isNaN(gradeInput.value)) {
               return alert('Wrong input data!');
        }

        if(firstNameInput.value != '' &&
        lastNameInput.value != '' &&
        facultyNumberInput.value != '' &&
        gradeInput.value != '') {
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    facultyNum: Number(facultyNumberInput.value),
                    grade: Number(gradeInput.value),
    
                })
            });
            const tr = document.createElement('tr');
    
            const firstNameCell = tr.insertCell();
            firstNameCell.innerText = firstNameInput.value;
    
            const lastNameCell = tr.insertCell();
            lastNameCell.innerText = lastNameInput.value;
    
            const facultyNumCell = tr.insertCell();
            facultyNumCell.innerText = facultyNumberInput.value;
    
            const gradeCell = tr.insertCell();
            gradeCell.innerText = gradeInput.value;
            
            table.appendChild(tr);
        }

       

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';
    }
}

solve()