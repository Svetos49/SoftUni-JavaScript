function companyUsers(input) {
  let obj = {};
  for(line of input) {
    let [companyName, employeeId] = line.split(' -> ');
    if(obj.hasOwnProperty(companyName) == false) {
        obj[companyName] = [];
    }
    // if(obj[companyName].includes(employeeId)) {
    //     continue;
    // }
     obj[companyName].push(employeeId);
  }
  
  let sorted = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
  for(let line of sorted) {
    let companyName = line[0];
    console.log(companyName);
    let employeeId = line[1];
        employeeId = new Set(employeeId);
    for(let employee of employeeId) {
        console.log(`-- ${employee}`);
    }
    
  }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);
console.log('---------------');
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345',
 'Movement -> DD11111' ]);