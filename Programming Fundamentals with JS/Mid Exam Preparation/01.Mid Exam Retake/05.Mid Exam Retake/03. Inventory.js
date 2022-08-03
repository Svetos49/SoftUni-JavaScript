function inventory(input) {
  let items = input.shift().split(', ');
  let tokens = input.shift().split(' - ');
  let index = 0;
  
  while(tokens[0] != 'Craft!') {
      if(tokens[0] == 'Collect') {
        if(items.includes(tokens[1])) {
            continue;
        }
        items.push(tokens[1]);
      } else if(tokens[0] == 'Drop') {
        index = items.indexOf(tokens[1]);
        if(index > -1) {
         items.splice(index, 1);
        }
          
      } else if(tokens[0] == 'Combine Items') {
         let [oldItem, newItem] = tokens[1].split(':');
         index = items.indexOf(oldItem);
         if(index > -1) {
          items.splice(index + 1, 0, newItem);
         } 
   
      } else if(tokens[0] == 'Renew') {
        index = items.indexOf(tokens[1]);
         if(index > -1) {
           
          items.splice(index, 1);
          items.push(tokens[1]);
         }
      }

   tokens = input.shift().split(' - ');
  }
    console.log(items.join(', '));
}



// function inventory(input) {
//   let invertoryInput = input.shift();
//   let inventory = invertoryInput.split(', ');
//   let commandLine = input.shift();
   
//   while(commandLine !== 'Craft!') {
//     let[command, argument] = commandLine.split(' - ')

//     switch(command) {
//         case 'Collect':
//             collectItem(inventory, argument);
//         break;
//         case 'Drop':
//             dropItem(inventory, argument);
//             break;
//         case 'Combine Items':
//             let [oldItem, newItem] = argument.split(':')
//             combineItems(inventory, oldItem, newItem);
//             break;
//         case 'Renew':
//             renewItem(inventory, argument);
//             break;
//     }

//      commandLine = input.shift();
//   }

//      function collectItem(inventory, item) {
//          if(!inventory.includes(item)) {
//              inventory.push(item);
//          }
//      }
      
//      function dropItem(inventory, item) {
//          let itemIndex = inventory.indexOf(item);
//          if(itemIndex > -1) {
//              inventory.splice(itemIndex, 1);
//          }
//      }
//      function combineItems(inventory, oldItem, newItem) {
//          let oldItemIndex = inventory.indexOf(oldItem);
//          if(oldItemIndex > -1) {
//              inventory.splice(oldItemIndex + 1, 0, newItem);
//          }
//      }
//      function renewItem(inventory, item) {
//         let itemIndex = inventory.indexOf(item);

//         if(itemIndex > -1) {
//             inventory.splice(itemIndex, 1);
//             inventory.push(item);
//         }
        
//      }
//      let result = inventory.join(', ');
//      console.log(result);

// }

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]);

inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]);