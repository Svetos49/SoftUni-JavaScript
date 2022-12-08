// function solve() {

//     const table = document.querySelector('table.table tbody');
//     const [input, output] = Array.from(document.querySelectorAll('textarea'));
//     const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

//     generateBtn.addEventListener('click', generate);
//     buyBtn.addEventListener('click', buy);

//     function generate(e) {
//         const data = JSON.parse(input.value);
//         for (let item of data) {
//             const row = document.createElement('tr');

//             const imgCeil = document.createElement('td');
//             const nameCeil = document.createElement('td');
//             const priceCeil = document.createElement('td');
//             const decfactorCeil = document.createElement('td');
//             const checkCeil = document.createElement('td');

//             const img = document.createElement('img');
//             img.src = item.img;
//             imgCeil.appendChild(img);

//             const nameP = document.createElement('p');
//             nameP.textContent = item.name;
//             nameCeil.appendChild(nameP);

//             const priceP = document.createElement('p');
//             priceP.textContent = item.price;
//             priceCeil.appendChild(priceP);

//             const decP = document.createElement('p');
//             decP.textContent = item.decFactor;
//             decfactorCeil.appendChild(decP);

//             const check = document.createElement('input');
//             check.type = "checkbox";
//             checkCeil.appendChild(check);

//             row.appendChild(imgCeil);
//             row.appendChild(nameCeil);
//             row.appendChild(priceCeil);
//             row.appendChild(decfactorCeil);
//             row.appendChild(checkCeil);
//         }

//         table.appendChild(row);

//     }

//     function buy(e) {
//         const furniture = Array
//             .from(document.querySelectorAll('input[type="checkbox"]:checked'))
//             .map(b => b.parentElement.parentElement)
//             .map(r => ({
//                 name: r.children[1].textContent,
//                 price: Number(r.children[2].textContent),
//                 decFactor: Number(r.children[3].textContent),
//             }));

//         const names = [];
//         let total = 0;
//         let decFactor = 0;

//         for (let item of furniture) {
//             names.push(item.name);
//             total += item.price;
//             decFactor += item.decFactor;
//         }

//         const result = `Bought furniture: ${names.join(', ')}
// Total price: ${total.toFixed(2)}
// Average decoration factor: ${decFactor / furniture.length}`;
//         output.value = result;
//     }

// }

'----------------------------------------------------------------------------------------'
function solve() {
    const table = document.querySelector('table.table tbody');
    const [input, output] = Array.from(document.querySelectorAll('textarea'));
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate(e) {
        const data = JSON.parse(input.value);
        for (let item of data) {
            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const decFactoryCell = document.createElement('td');
            const checkCell = document.createElement('td');

            const img = document.createElement('img');
            img.src = item.img;
            imgCell.appendChild(img);

            const nameP = document.createElement('p');
            nameP.textContent = item.name;
            nameCell.appendChild(nameP);

            const priceP = document.createElement('p');
            priceP.textContent = Number(item.price);
            priceCell.appendChild(priceP);

            const decP = document.createElement('p');
            decP.textContent = item.decFactor;
            decFactoryCell.appendChild(decP);

            const check = document.createElement('input');
            check.type = 'checkbox';
            checkCell.appendChild(check);

            row.appendChild(imgCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(decFactoryCell);
            row.appendChild(checkCell);

            table.appendChild(row);
        }

    }

    function buy(e) {
        const furniture = Array
            .from(document.querySelectorAll('input[type = "checkbox"]:checked'))
            .map(b => b.parentElement.parentElement)
            .map(r => ({
                name: r.children[1].textContent,
                price: Number(r.children[2].textContent),
                decFactor: Number(r.children[3].textContent)
            }));
        const names = [];
        let total = 0;
        let decFactor = 0;

        for (item of furniture) {
            names.push(item.name);
            total += item.price;
            decFactor += item.decFactor;
        }

        const result = `Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${decFactor / furniture.length}`;

          output.value = result;
    }
}
'------------------------------------------------------------------------------'
function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for(let prop in props) {
        nested[prop] = props[prop];
    }

    if(content) {
        nested.textContent = content;
    }

    cell.appendChild(nested);
    return cell;
}

function buy(e) {
    const furniture = Array
        .from(document.querySelectorAll('input[type = "checkbox"]:checked'))
        .map(b => b.parentElement.parentElement)
        .map(r => ({
            name: r.children[1].textContent,
            price: Number(r.children[2].textContent),
            decFactor: Number(r.children[3].textContent)
        }))
        .reduce((acc, c, i, a) => {
          acc.names.push(c.name);
          acc.total += c.price;
          acc.decFactor += c.decFactor/ a.length;
          return acc;
        }, {names: [], total: 0, decFactor: 0 }) ;
    

    const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`;

      output.value = result;
}