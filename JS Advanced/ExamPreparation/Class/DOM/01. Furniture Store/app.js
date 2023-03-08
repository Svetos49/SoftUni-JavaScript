window.addEventListener('load', solve);

function solve() {
  const addBtn = document.getElementById('add');

  const modelInput = document.getElementById('model');
  const descriptionInput = document.getElementById('description');
  const yearInput = document.getElementById('year');
  const priceInput = document.getElementById('price');
  

  addBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    let model = modelInput.value;
    let description = descriptionInput.value;
    let year = Number(yearInput.value);
    let price = Number(priceInput.value);

    if(!model || !description) {
        return;
    }
    if(year <= 0 || price <= 0) {
        return;
    }
     

    let row = document.createElement('tr');
    let modelCell = document.createElement('td');
    modelCell.textContent = model;

    let descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;

    let yearCell = document.createElement('td');
    yearCell.textContent = year;

    let priceCell = document.createElement('td');
    priceCell.textContent = price.toFixed(2);

    let actionCell = document.createElement('td');
    
    let moreInfoBtn = document.createElement('button');
    moreInfoBtn.textContent = 'More Info';
    moreInfoBtn.classList.add('moreBth');
    moreInfoBtn.addEventListener('click', (ev) => {
        if(ev.target.textContent == 'More info') {
            inforRow.style.display = 'contents'
            ev.target.textContent = 'Less info';
        } else {
            ev.target.textContent = 'More info';
            inforRow.style.display = 'none';
        }
    }); 

    let totalPrice = document.querySelector('.total-price');
   
   

    let buyBtn = document.createElement('button');
    buyBtn.textContent = 'Buy it';
    buyBtn.classList.add('buyBtn');
    buyBtn.addEventListener('click', (e) => {
        let curruntTotalPrice = Number(totalPrice.textContent);
        totalPrice.textContent = (curruntTotalPrice + price).toFixed(2);
        row.remove();
        inforRow.remove();
    })

    actionCell.appendChild(moreInfoBtn);
    actionCell.appendChild(buyBtn);

    row.classList.add('info');
    row.appendChild(modelCell);
    row.appendChild(priceCell);
    row.appendChild(actionCell);

    let inforRow = document.createElement('tr');
    inforRow.classList.add('hide');
    inforRow.style.display = 'none';

    let yearContent = document.createElement('td');
    yearContent.textContent = `Year: ${year}`;
    let descriptionContent = document.createElement('td');
    descriptionContent.setAttribute('colspan', 3);
    descriptionContent.textContent = `Description: ${description}`;

    inforRow.appendChild(yearContent);
    inforRow.appendChild(descriptionContent);

    let furnitureList = document.getElementById('furniture-list');
    furnitureList.appendChild(row);
    furnitureList.appendChild(inforRow);
    
    descriptionInput.value = '';
   let inputs = document.querySelectorAll('input');
   for(let line of inputs) {
       line.value = '';
   }
  });


}
