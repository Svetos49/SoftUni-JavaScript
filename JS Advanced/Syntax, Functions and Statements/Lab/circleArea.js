function circleArea(arg) {
   if(typeof(arg) === 'number') {
       console.log((arg ** 2 * Math.PI).toFixed(2)); 
   } else {
       console.log(`We can not calculate the circle area, because we receive a ${typeof(arg)}.`);
   }
}

circleArea(5);
circleArea('name');