function volumeCalculator(area, vol, dataAsJSON ) {
  // parse input
  const figures = JSON.parse(dataAsJSON);
  // perform operation
  const result = figures.map(figure =>({
      area: area.call(figure),
      volume: vol.call(figure)
  }));
  return result
//   for(let figure of figures) {
//       const output = {
//           area: area.call(figure),
//           volume: vol.call(figure),
//       };
//       result.push(output);
//   }
//   // return result as array
//   return result;
 }
const exampel1 =  `[{"x":"1","y":"2","z":"10"},
                    {"x":"7","y":"7","z":"10"},
                    {"x":"5","y":"2","z":"10"}]`;


volumeCalculator(area, vol, exampel1);
console.log(volumeCalculator(area, vol, exampel1));

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
}