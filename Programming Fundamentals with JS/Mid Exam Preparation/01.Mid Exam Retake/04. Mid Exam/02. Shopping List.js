function shoppinList(input) {
 let groceries = input.shift().split('!');
 let command = input.shift();

 while(command !== 'Go Shopping!') {
    let [typeOfCommand, item, item1] = command.split(' ');

    if(typeOfCommand == 'Urgent') {
        if(groceries.includes(item)) {
            command = input.shift();
            continue;
        }
        groceries.unshift(item);
    } else if(typeOfCommand == 'Unnecessary') {
        let index = groceries.indexOf(item);
       if(index > 0) {
       groceries.splice(index, 1);
       }
    } else if(typeOfCommand == 'Correct') {
       let index = groceries.indexOf(item);
       if(index > 0) {
        groceries.splice(index,1,item1);
       }
    } else if(typeOfCommand == 'Rearrange') {
        let index = groceries.indexOf(item);
        if(index > 0) {
        groceries.splice(index,1).push(item);
        }
    }

    command = input.shift();
 }
 console.log(groceries.join(', '));
}

shoppinList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
console.log('---------------------------');
shoppinList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"]);