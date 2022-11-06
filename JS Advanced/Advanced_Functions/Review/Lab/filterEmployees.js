function filterEmployees(input, criteria) {
  let employees = JSON.parse(input);
  let [prop, value] = criteria.split('-');

  employees
   .filter((empl) => empl[prop] == value)
   .map((empl, i) => `${i}. ${empl.first_name} ${empl.last_name} - ${empl.email}`)
   .forEach(empl => console.log(empl));
}

filterEmployees(`[{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"},
{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"},
 {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"},
  {"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"}]`,
   'gender-Female')

