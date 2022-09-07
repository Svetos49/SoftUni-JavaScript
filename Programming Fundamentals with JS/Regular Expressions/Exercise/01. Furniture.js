function furniture(input) {
  let result = "Bought furniture: \n";
  let sum = 0;
  
  for(let line of input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+([\.])?\d+)!(?<quantity>\d+)\b/g;
    let match = pattern.exec(line);
    if(match) {
       result += match.groups['name'] + '\n';
       sum += Number(match.groups.price) * Number(match.groups.quantity);
    }
  }
  result += `Total money spend: ${sum.toFixed(2)}`;
  console.log(result);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);