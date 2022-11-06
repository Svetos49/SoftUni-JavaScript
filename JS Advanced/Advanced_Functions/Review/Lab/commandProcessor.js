function commandProcessor() {
   let result = '';

   return {
       append(str) {
        result += str;
       },
       removeStart(n) {
        result = result.substring(n);
       },
       removeEnd(n) {
        result = result.substring(0, result.length - n);
       },
       print() {
       console.log(result);
       }
   }
}

let secondZero = commandProcessor();
secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3);
secondZero.removeEnd(4);
secondZero.print();