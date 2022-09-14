function fancyBarcodes(input) {
    let count = +input.shift();
    const pattern = /@#+(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    let productGroup = '';

    while(count > 0) {
        let barcode = input.shift();
        let match = pattern.exec(barcode);
        count--;
        if(match) {
            let product = match.groups.product;
            productGroup = '';
            for(let ch of product) {
                let isNumber = Number(ch);
                if(isNumber * 1 === isNumber) {
                    productGroup += ch;
                }
            }
            if(productGroup === '') {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${productGroup}`);
            }
           
        } else {
            console.log("Invalid barcode");
        }
        
    }
}

fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"]);
console.log('-------------------------------------------------------');
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])








