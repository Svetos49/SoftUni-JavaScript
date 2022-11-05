function  area_VolumeCalculator(area, vol, dataAsJSON) {
   let coordinates = JSON.parse(dataAsJSON);
   let result = []
    const figures = coordinates.map(coord => {
       let output =  {area: area.call(coord),
         volume: vol.call(coord)};
         result.push(output);
    });
   return result;
}

let input = '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]';
 console.log(area_VolumeCalculator(area, vol, input));
  area_VolumeCalculator(area, vol, input)
 

function area() {
    return Math.abs(this.x * this.y);
};
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
let actual = result(area, vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
let expected = [
  { area: 2, volume: 20 },
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
];
assert.deepEqual(actual,expected,"The returned value is not correct")