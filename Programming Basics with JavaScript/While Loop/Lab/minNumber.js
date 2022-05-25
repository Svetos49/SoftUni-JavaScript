function minNumber(input) {
   let inputEl = input[0];
   index = 1;
   let min = Number.MAX_SAFE_INTEGER;

   while(inputEl != 'Stop') {
       inputEl = Number(inputEl);
       if(inputEl < min) {
           min = inputEl;
       }
       inputEl = input[index];
       index++;
   }
   console.log(min);
}

minNumber(['100', '99', '80', '70', 'Stop' ]);