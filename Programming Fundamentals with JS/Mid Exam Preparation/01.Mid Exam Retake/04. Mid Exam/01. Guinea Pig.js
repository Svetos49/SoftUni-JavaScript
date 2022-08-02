function guineaPig(input) {
  let arr = input.map(Number);
  let food = arr.shift();
  let hay = arr.shift();
  let cover = arr.shift();
  let weight = arr.shift();

  for(let i = 1; i <= 30; i++) {
    food -= 0.3;
    if(food <= 0) {
        console.log("Merry must go to the pet store!");
        break;
    }
    if(i % 2 == 0) {
        hay -= food *0.05;
        if(hay <= 0) {
            console.log("Merry must go to the pet store!");
            break;
        }
    } 
    if(i % 3 == 0) {
       cover -= weight / 3;
       if(cover <= 0) {
        console.log("Merry must go to the pet store!");
        break;
    }
    }
  }
  if(food > 0 && hay > 0 && cover > 0 ) {
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
  }
  
}

guineaPig(["10", "5", "5.2", "1"]);

guineaPig(["1", 
"1.5", 
"3", 
"1.5"
]);