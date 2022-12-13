// function solve(input) {
 
//     let brands = {};
 
//     while(input.length > 0) {
//         let [brand, model, producedCars] = input.shift().split(' | ');
//         producedCars = Number (producedCars);
 
//         if (!brands[brand]) {
//             brands[brand] = {[model]: producedCars};
 
//         } else if(!brands[brand][model]){
//             brands[brand][model] = producedCars;
 
//         }else {
//             brands[brand][model] += producedCars; 
//         }
//     }
//     let allCarBrands = Object.keys(brands);
//     for (let brand of allCarBrands) {
//         console.log(brand);
//         let models = Object.keys(brands[brand]);
//         for (let model of models) {
//             console.log(`###${model} -> ${brands[brand][model]}`);
//         }
//     }
// }

function solve(input) {
    const brands = {};
   
    for (const item of input) {
      const [brand, model, quant] = item.split(" | ");
   
      if (!brands.hasOwnProperty(brand)) {
        brands[brand] = {};
      }
   
      if (!brands[brand].hasOwnProperty(model)) {
        brands[brand][model] = 0;
      }
   
      brands[brand][model] += Number(quant);
    }
   
    for (const [brand, models] of Object.entries(brands)) {
      console.log(brand);
   
      for (const [model, quant] of Object.entries(models)) {
        console.log(`###${model} -> ${quant}`);
      }
    }
  }
  

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
    'Citroen | C5 | 10&#39'])

// ['Audi | Q7 | 1000',
//     'Audi | Q6 | 100',
//     'BMW | X5 | 1000',
//     'BMW | X6 | 100',
//     'Citroen | C4 | 123',
//     'Volga | GAZ-24 | 1000000',
//     'Lada | Niva | 1000000',
//     'Lada | Jigula | 1000000',
//     'Citroen | C4 | 22',
//         'Citroen | C5 | 10&#39'];