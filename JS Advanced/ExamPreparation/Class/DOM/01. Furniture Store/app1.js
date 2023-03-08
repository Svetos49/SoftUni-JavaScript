window.addEventListener('load', solve);

function solve() {
    const buttonInput = document.getElementById('add');

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const priceInput = document.getElementById('price');
    const descriptionTextarea = document.getElementById('description');

    buttonInput.addEventListener('click', addToTable);

    function addToTable(ev) {
         ev.preventDefault()

        let model = modelInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);
        let description = descriptionTextarea.value;

        if (model == '' || description == '' || year <= 0 || price <= 0) {
            return;
        }

        let furnitureList = document.getElementById('furniture-list');

        let moreInfoBtn = document.createElement('button');
        moreInfoBtn.classList.add('moreBtn');
        moreInfoBtn.textContent = 'More Info'

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        

        let row = e('tr', { class: 'info' },
            e('td', {}, model),
            e('td', {}, price),
            e('td', {},
                moreInfoBtn,
                buyBtn
            )
        );
        

        let hidenRow = e('tr', { class: 'hide' },
            e('td', {}, 'Year 2016'),
            e('td', { colspan: '3' }, 'Comfortable for you and your pet!')
        );
        hidenRow.classList.add('hide');
        let colspanElement = hidenRow.querySelectorAll('td')[1];
        colspanElement.setAttribute('colspan', 3);

        furnitureList.appendChild(row);
        furnitureList.appendChild(hidenRow);

        descriptionTextarea.value = '';
        let inputs = document.querySelectorAll('input');
        for(let input of inputs) {
            input.value = '';
        }

        moreInfoBtn.addEventListener('click', (ev) => {
            if(ev.target.textContent == 'More Info') {
              ev.target.textContent = 'Less Info';
              hidenRow.style.display = 'contents';
            } else {
                ev.target.textContent = 'More Info';
                hidenRow.style.display = 'none';
            }
        });
       
        let totalPrice = document.querySelector('.total-price');
        buyBtn.addEventListener('click', (ev) => {
         let  currentTotalPrice = Number(totalPrice.textContent);
         totalPrice.textContent = currentTotalPrice + price;
        
         const tdBody = ev.target.parentElement.parentElement;
         tdBody.remove();
        })


    }


    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}
