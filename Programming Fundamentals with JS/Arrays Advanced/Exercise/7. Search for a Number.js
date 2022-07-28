function searchForNumber(arr1, arr2) {
    let [takeEl, removeEl, searchNum] = arr2;
    
   let afterTake = arr1.slice(0, takeEl);
   let remove = afterTake.splice(0, removeEl);

    let occurs = 0;
    for(let i = 0; i < afterTake.length; i++) {
        if(afterTake[i] == searchNum) {
            occurs++
        }
    }
    console.log(`Number ${searchNum} occurs ${occurs} times.`);
}
searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);

