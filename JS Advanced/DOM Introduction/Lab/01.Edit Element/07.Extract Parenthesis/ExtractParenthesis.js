function extract(content) {
   const text = document.getElementById(content).textContent;
  const regex = /\((.+?)\)/g;
  //const regex = /\(([^)]+)\)/gm;
  let match = regex.exec(text);
  //let result = [];
  let result = '';
  while(match != null) {
    result += match[1];
    result += '; ';
    //result.push(match[1]);
      match = regex.exec(text);

  }
  return result;
  //return result.join('; ');
}