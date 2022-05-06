function histogram(input) {
  let countNum = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;
  for(let i = 1; i <= countNum; i++) {
      let num = Number(input[i]);
      if(num < 200) {
        p1 += 1;
      } else if(num >= 200 && num < 400) {
        p2 += 1;
      } else if(num >= 400 && num < 600) {
        p3++;
      } else if(num >= 600 && num < 800) {
        p4++;
      } else if(num >= 800) {
        p5++;
      }
    }
    p1 = p1 / countNum * 100;
    console.log(`${p1.toFixed(2)}%`);
    p2 = p2 / countNum * 100;
    console.log(`${p2.toFixed(2)}%`);
    p3 = p3 / countNum * 100;
    console.log(`${p3.toFixed(2)}%`);
    p4 = p4 / countNum * 100;
    console.log(`${p4.toFixed(2)}%`);
    p5 = p5 / countNum * 100;
    console.log(`${p5.toFixed(2)}%`);
}

histogram(['3', '1', '2', '999'])