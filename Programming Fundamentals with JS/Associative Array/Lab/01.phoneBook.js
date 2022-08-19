function phoneBook(input) {
   let result = {};
   for(line of input) {
    let [name, phone] = line.split(' ');
    result[name] = phone;
   }
   
   let entries = Object.entries(result);
   for([people, phone] of entries) {
     console.log(`${people} -> ${phone}`);
   }
} 

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])


