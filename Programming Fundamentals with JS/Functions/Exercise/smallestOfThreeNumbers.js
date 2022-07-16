// function solve(n1, n2, n3) {
//     let smallest = 0;
//     if(n1 < n2 && n1 < n3 ) {
//         smallest = n1;
//     }
//     if(n3 < n1 && n3 < n2) {
//         smallest = n3
//     }
//     if(n2 < n1 && n2 < n3) {
//         smallest = n2
//     }
//     console.log(smallest);

// }

    function solve(x, y, z) {
        let smallest = Number.MAX_SAFE_INTEGER;
        if(x < smallest) {
            smallest = x;
        }
        if(y < smallest) {
            smallest = y;
        } 
        if(z < smallest) {
            smallest = z;
        } 
          console.log(smallest);
    }


solve(600, 342, 123);
solve(2, 5, 3);