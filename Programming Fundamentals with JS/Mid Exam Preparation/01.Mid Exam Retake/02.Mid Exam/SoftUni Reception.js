function softUniReception(input) {
   let arr = input.map(Number);
   let employee1 = arr.shift();
   let employee2 = arr.shift();
   let employee3 = arr.shift();
   let studentsPerHour = employee1 + employee2 + employee3;
   let students = arr.shift();
   let hours = 0;
   
   while(students > 0) {
        hours++;
        if(hours % 4 == 0) {
            continue;
        }
        students -= studentsPerHour;
   }
   console.log(`Time needed: ${hours}h.`);
}

softUniReception(['1','2','3','45']);
softUniReception(['5','6','4','20']);