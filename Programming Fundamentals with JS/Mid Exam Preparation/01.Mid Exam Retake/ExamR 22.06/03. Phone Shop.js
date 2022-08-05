function phoneShop(input) {
    let listOfPhones = input.shift().split(', ');
    
    let index = 0;

    while (input[0] != 'End') {
        let [command, phoneType] = input.shift().split(' - ');
        switch (command) {
            case 'Add':
                if (listOfPhones.includes(phoneType)) {
                    continue;
                }
                listOfPhones.push(phoneType);
                break;
            case 'Remove':
                if (!listOfPhones.includes(phoneType)) {
                    continue;
                }
                index = listOfPhones.indexOf(phoneType);
                listOfPhones.splice(index, 1);
                break;
            case 'Bonus phone':
                let [oldPhone, newPhone] = phoneType.split(':');
                if (!listOfPhones.includes(oldPhone)) {
                    continue;
                }
                let index1 = listOfPhones.indexOf(oldPhone);
                let index2 = listOfPhones.indexOf(newPhone);
                listOfPhones.splice(index1 + 1, 0, newPhone);
                break;
            case 'Last':
               if(!listOfPhones.includes(phoneType)) {
                  continue;
               }
                index = listOfPhones.indexOf(phoneType);
                listOfPhones.splice(index, 1);
                listOfPhones.push(phoneType);
                break;
        }
    }
    console.log(listOfPhones.join(', '));
}

// phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
//     "Add - Iphone10",
//     "Remove - IphoneSE",
//     "End"]);

//  phoneShop(["HuaweiP20, XiaomiNote",
//  "Remove - Samsung",
//  "Bonus phone - XiaomiNote:Iphone5",
//  "End"]);   

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"]);