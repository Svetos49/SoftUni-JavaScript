function operationBetweenNumbers(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);
  let operation = input[2];
  let result = 0;
  let typeOfResult = '';

  if(operation == "+") {
    result = N1 + N2;
    if(result % 2 == 0) {
      typeOfResult = 'even';
    } else {
        typeOfResult = 'odd'
    }
    console.log(`${N1} ${operation} ${N2} = ${result} - ${typeOfResult}`);
  } else if(operation == "-") {
    result = N1 - N2;
    if(result % 2 == 0) {
      typeOfResult = 'even';
    } else {
        typeOfResult = 'odd'
    }
    console.log(`${N1} ${operation} ${N2} = ${result} - ${typeOfResult}`);
  } else if(operation == "*") {
    result = N1 * N2;
    if(result % 2 == 0) {
      typeOfResult = 'even';
    } else {
        typeOfResult = 'odd'
    }
    console.log(`${N1} ${operation} ${N2} = ${result} - ${typeOfResult}`);
  } else if(operation == '/') {
      if(N2 == 0) {
          console.log(`Cannot divide ${N1} by zero`);
      } else {
          result = N1 / N2;
          console.log(`${N1} ${operation} ${N2} = ${result.toFixed(2)}`);
      }
  } else if(operation == '%') {
      if(N2 == 0) {
          console.log(`Cannot divide ${N1} by zero`);
      } else {
        result = N1 % N2;
        console.log(`${N1} ${operation} ${N2} = ${result}`);
      }
     
  }
}

operationBetweenNumbers(['10', '3', '%']);