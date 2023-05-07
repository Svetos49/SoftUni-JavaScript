async function createStudent() {
  const url = `http://localhost:3030/jsonstore/collections/students`;

  let tableBody = document.querySelector("#results tbody");
  console.log(tableBody);

  const response = await fetch(url);
  const data = await response.json();

  Object.values(data).forEach((s) => {
    const firstName = s.firstName;
    const lastName = s.lastName;
    const facultyNumber = s.facultyNumber;
    const grade = Number(s.grade);

    const trElement = document.createElement("tr");

    const firstNameCell = trElement.insertCell(0);
    firstNameCell.innerText = firstName;

    const lastNameCell = trElement.insertCell(1);
    lastNameCell.innerText = lastName;

    const facultyNumberCell = trElement.insertCell(2);
    facultyNumberCell.innerText = facultyNumber;

    const gradeCell = trElement.insertCell(3);
    gradeCell.innerText = grade;

    tableBody.appendChild(trElement);
  });

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", addStudent);

  async function addStudent(e) {
    e.preventDefault();

    const firstNameInput = document.getElementsByName("firstName")[0];
    const lastNameInput = document.getElementsByName("lastName")[0];
    const facultyNumberInput = document.getElementsByName("facultyNumber")[0];
    const gradeInput = document.getElementsByName("grade")[0];

    if (isNaN(facultyNumberInput.value) || isNaN(gradeInput.value)) {
      return alert("Wrong format!");
    }
    if (
      firstNameInput.value !== "" &&
      lastNameInput.value !== "" &&
      facultyNumberInput.value !== "" &&
      gradeInput.value !== ""
    ) {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstNameInput.value,
          lastName: lastNameInput.value,
          facultyNumber: Number(facultyNumberInput.value),
          grade: Number(gradeInput.value),
        }),
      });

      const tr = document.createElement("tr");

      const firstNameCell = tr.insertCell(0);
      firstNameCell.innerText = firstNameInput.value;

      const lastNameCell = tr.insertCell(1);
      lastNameCell.innerText = lastNameInput.value;

      const facultyNumberCell = tr.insertCell(2);
      facultyNumberCell.innerText = facultyNumberInput.value;

      const gradeCell = tr.insertCell(3);
      gradeCell.innerText = gradeInput.value;
      tableBody.appendChild(tr);
    }

    firstNameInput.value = "";
    lastNameInput.value= "";
    facultyNumberInput.value = "";
    gradeInput.value = "";
  }
}
createStudent();
