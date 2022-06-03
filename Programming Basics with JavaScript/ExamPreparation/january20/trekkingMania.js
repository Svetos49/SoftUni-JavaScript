function trekkingMania(input) {
  let groupsCounter = input[0];
  let sizeOfGroup = 0;
  let peopleCount = 0;
  
  let size1 = 0;
  let size2 = 0;
  let size3 = 0;
  let size4 = 0;
  let size5 = 0;

  for(let i = 1; i <= groupsCounter; i++) {
         sizeOfGroup = input[i];
         peopleCount += sizeOfGroup;
      if(sizeOfGroup <= 5) {
         size1 += sizeOfGroup;

      } else if(sizeOfGroup > 5 && sizeOfGroup <= 12) {
         size2 += sizeOfGroup;
      } else if(sizeOfGroup > 12 && sizeOfGroup <= 25) {
         size3 += sizeOfGroup;
      } else if(sizeOfGroup > 25 && sizeOfGroup <= 40) {
         size4 += sizeOfGroup;
      } else if(sizeOfGroup > 40) {
         size5 += sizeOfGroup;
      }
  }
    
     console.log(`${(size1 / peopleCount * 100).toFixed(2)}%`);
     console.log(`${(size2 / peopleCount * 100).toFixed(2)}%`);
     console.log(`${(size3 / peopleCount * 100).toFixed(2)}%`);
     console.log(`${(size4 / peopleCount * 100).toFixed(2)}%`);
     console.log(`${(size5 / peopleCount * 100).toFixed(2)}%`);
    
}

trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);