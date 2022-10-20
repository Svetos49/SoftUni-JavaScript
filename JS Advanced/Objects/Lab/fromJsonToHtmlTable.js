function fromJsontoHtmlTable(input) {
   let jsonData = input.shift();
    let students = JSON.parse(jsonData);
   
   let first = students[0];

   let html = '<table>';

   html += `<tr>${Object.keys(first).map(x => `<th>${x}</th>`).join('')}</tr>`;
   students.forEach(student => {
        html += '<tr>';
        html += Object.values(student).map(x => `<td>${x}</td>`).join('');
        html += '</tr>';
   });
   html += '</table>';
   //   return html;
   console.log(html);
}

// fromJSONtoHTMLTable(['[{"Name":"Tomatoes & Chips", "Price":2.35},{"Name":"J&B Chocolate", "Price":0.96}]'])
// console.log(fromJSONtoHTMLTable(['[{"Name":"Tomatoes & Chips", "Price":2.35},{"Name":"J&B Chocolate", "Price":0.96}]'])):



fromJsontoHtmlTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]')