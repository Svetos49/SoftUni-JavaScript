function rotateArray(arr, numRot) {
    
   for(let i = 0; i < numRot; i++) {
      let rotNum = arr.pop();
      arr.unshift(rotNum);
   }
   console.log(arr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);