function train(input) {
    let wagonsArr = input
                .shift()
                .split(' ')
                .map(Number);
     
     let capacity = Number(input.shift());
  ;  for(comand of input) {
          let [firstCom, secondCom] = comand.split(' ');
          if(firstCom == 'Add') {
              secondCom = Number(secondCom);
              wagonsArr.push(secondCom);
          } 
          if(firstCom != 'Add') {
              firstCom = Number(firstCom);
              for(let i = 0; i < wagonsArr.length; i++) {
                  if(firstCom + wagonsArr[i] <= capacity) {
                      wagonsArr[i] = firstCom + wagonsArr[i];
                      break;
                  }
              }
          }
  }
       console.log(wagonsArr.join(' '));         
  }

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);





