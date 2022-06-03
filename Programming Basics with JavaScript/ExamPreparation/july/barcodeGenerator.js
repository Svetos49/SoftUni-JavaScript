function barcodeGenerator(input) {
  let startRange = input[0];
  let endRange = input[1];

  let line = '';
    let startDigit1 = Math.floor((startRange / 1000) % 10);
    let  startDigit2 = Math.floor((startRange / 100) % 10);
    let startDigit3 = Math.floor((startRange / 10) % 10);
    let startDigit4 = Math.floor(startRange  % 10);

    let endDigit1 = Math.floor((endRange / 1000) % 10);
    let endDigit2 = Math.floor((endRange / 100) % 10);
    let endDigit3 = Math.floor((endRange / 10) % 10);
    let endDigit4 = Math.floor(endRange % 10);
  
    for(let a = startDigit1; a <= endDigit1; a++) {
        if(a % 2 != 0) {
          for(let b = startDigit2; b <= endDigit2; b++) {
            if(b % 2 != 0) {
              for(let c = startDigit3; c <= endDigit3; c++) {
                if(c % 2 != 0) {
                  for(let d = startDigit4; d <= endDigit4; d++) {
                    if(d % 2 != 0) {
                      line += `${a}${b}${c}${d} `;
                    }
                  }
                }
              }
            }
          }
        }
          
          
          
          
    }
    console.log(line);
}


barcodeGenerator(['2345', '6789']);