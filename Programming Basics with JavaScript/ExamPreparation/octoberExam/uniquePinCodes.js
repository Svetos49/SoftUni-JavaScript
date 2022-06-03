function uniquePinCodes(input) {
 let firstLimit = Number(input[0]);
 let secondLimit = Number(input[1]);
 let thirdLimit = Number(input[2]);

  for(let i = 2; i <= firstLimit; i++) {
      if(i % 2 == 0) {
          for(j = 2; j <= secondLimit; j++) {
              if(j == 2 || j == 3 || j == 5 || j == 7) {
                  for(n = 2; n <= thirdLimit; n++) {
                      if(n % 2 == 0) {
                        console.log(`${i} ${j} ${n}`);
                      }
                      
                  }
              }
          }
      }
  }
}

uniquePinCodes(['3', '5', '5']);