import { html, render } from "./node_modules/lit-html/lit-html.js";

async function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchField = document.getElementById('searchField');
   const root = document.querySelector('tbody');

   const students = await getAllStudents();
   console.log(students)
   students.forEach(s => s.match = false);

   const template = (student) => html`
   <tr class=${student.match ? 'select' : '' }>
      <td>${student.firstName} ${student.lastName}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
   </tr>`

   function onClick() {

      const value = searchField.value.toLocaleLowerCase();
      if (value != '') {
         students.forEach(s => {
            if (Object.values(s).join(' ').toLocaleLowerCase().includes(value)) {
               s.match = true;
            } else {
               s.match = false;
            }
         });
      } else {
         students.forEach(s => s.match = false);
      };
      update();
   };
   update();
   function update() {
      render(students.map(template), root);
   };

   async function getAllStudents() {
      const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
      const data = await response.json();
      return Object.values(data);
   };
};
solve();