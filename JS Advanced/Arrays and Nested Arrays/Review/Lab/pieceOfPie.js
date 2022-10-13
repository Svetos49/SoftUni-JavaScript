function pieceOfPie(arr, start, end) {
    let startInd = arr.indexOf(start);
    let endInd = arr.indexOf(end) + 1;
    let result = arr.slice(startInd, endInd);
    return result
}

console.log(pieceOfPie(["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
'Key Lime Pie', 'Lemon Meringue Pie'));
pieceOfPie(["Pumpkin Pie", "Key Lime Pie", "Cherry Pie", "Lemon Meringue Pie", "Sugar Cream Pie"],
'Key Lime Pie', 'Lemon Meringue Pie')