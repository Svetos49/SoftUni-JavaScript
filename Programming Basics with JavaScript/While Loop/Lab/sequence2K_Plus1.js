function sequence2K_Plus1(input) {
   let n = Number(input[0]);
   let count = 1;
   while(count <= n) {
       console.log(count);
       count = 2 * count + 1;

   }
}

sequence2K_Plus1(['31'])