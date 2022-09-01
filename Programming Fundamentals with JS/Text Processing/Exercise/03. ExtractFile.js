function extractFile(input) {
   
   let last = input.lastIndexOf('\\');
   let firstDot  = input.indexOf('.');
   let lastDot = input.lastIndexOf('.');
   let fileName = input.substring(last +1, lastDot);
   let extension = input.substring(lastDot + 1);
   console.log(`File name: ${fileName}`);
   console.log(`File extension: ${extension}`);
}

// function extractFile(str) {
//     let i = str.lastIndexOf('.');
//    let extension = str.slice(i + 1);
//    let name = str.slice(str.lastIndexOf('\\') + 1, + i);
//    console.log(`File name: ${name}`);
//    console.log((`File extension: ${extension}`));
  
// }

extractFile('C:\\Internal\\training-internal\\Template.pptx');