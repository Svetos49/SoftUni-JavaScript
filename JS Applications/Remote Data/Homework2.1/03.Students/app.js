// console.log('TODO...');
// window.onload = students();

(function students() {
  let tableElement = document.getElementById("results");
  let tableElementChildren = Array.from(tableElement.childNodes);

  const firstNameInputElement = document.querySelector(
    'input[name="firstName"]'
  );
  const lastNameInputElement = document.querySelector('input[name="lastName"]');
  const facultyNumberNameInputElement = document.querySelector(
    'input[name="facultyNumber"]'
  );
  const gradeNameInputElement = document.querySelector('input[name="grade"]');
  const submitButtonElement = document.getElementById("submit");
  const url = "http://localhost:3030/jsonstore/collections/students";

  submitButtonElement.addEventListener("click", addStudent);

  fetch(url)
    .then((response) => response.json())
    .then((students) => {
      listStudents(students);
    })
    .catch((error) => console.log(error));

  function listStudents(students) {
    for (let student of Object.entries(students)) {
      let tableRowElement = document.createElement("tr");
      let firstNameTableData = document.createElement("td");
      firstNameTableData.classList.add("firstName");
      let textForFirstNameTableData = document.createTextNode(
        `${student[1].firstName}`
      );
      firstNameTableData.appendChild(textForFirstNameTableData);

      let lastNameTableData = document.createElement("td");
      lastNameTableData.classList.add("lastName");
      let textForLastNameTableData = document.createTextNode(
        `${student[1].lastName}`
      );
      lastNameTableData.appendChild(textForLastNameTableData);

      let facultyNumberTableData = document.createElement("td");
      facultyNumberTableData.classList.add("facultyNumber");
      let textForFacultyNumberTableData = document.createTextNode(
        `${student[1].facultyNumber}`
      );
      facultyNumberTableData.appendChild(textForFacultyNumberTableData);

      let gradeTableData = document.createElement("td");
      gradeTableData.classList.add("facultyNumber");
      let textForgradeTableData = document.createTextNode(
        `${Number(student[1].grade).toFixed(2)}`
      );
      gradeTableData.appendChild(textForgradeTableData);

      tableRowElement.appendChild(firstNameTableData);
      tableRowElement.appendChild(lastNameTableData);
      tableRowElement.appendChild(facultyNumberTableData);
      tableRowElement.appendChild(gradeTableData);

      tableElementChildren[3].appendChild(tableRowElement);
    }
  }

  function addStudent(e) {
    e.preventDefault();

    if (
      firstNameInputElement.value !== "" &&
      lastNameInputElement.value !== "" &&
      facultyNumberNameInputElement.value !== "" &&
      gradeNameInputElement.value > 0
    ) {
      let newStudent = {
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        facultyNumber: facultyNumberNameInputElement.value,
        grade: gradeNameInputElement.value,
      };

      fetch(url, {
        method: "POST",
        header: { "content-type": "application/json" },
        body: JSON.stringify(newStudent),
      }).catch((error) => console.log(error));

      let tableRowElement = document.createElement("tr");
      let firstNameTableData = tableRowElement.insertCell(0);
      let lastNameTableData = tableRowElement.insertCell(1);
      let facultyNumberTableData = tableRowElement.insertCell(2);
      let gradeTableData = tableRowElement.insertCell(3);

      firstNameTableData.innerText = newStudent.firstName;
      lastNameTableData.innerText = newStudent.lastName;
      facultyNumberTableData.innerText = newStudent.facultyNumber;
      gradeTableData.innerText = Number(newStudent.grade).toFixed(2);

      tableElementChildren[3].appendChild(tableRowElement);

      firstNameInputElement.value = "";
      lastNameInputElement.value = "";
      facultyNumberNameInputElement.value = "";
      gradeNameInputElement.value = "";
    }
  }
})();

// students();
