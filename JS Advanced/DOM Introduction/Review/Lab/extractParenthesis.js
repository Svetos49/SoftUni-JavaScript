function ectract(content) {
  let textElement = document.getElementById(content).textContent;
  let result = '';

  const patern = /\((.+?)\)/g;
  let match = patern.exec(text);

  while(match != null) {
      result += match[1];
      result += '; ';
    match = patern.exec(text);
  }
  return result;
}