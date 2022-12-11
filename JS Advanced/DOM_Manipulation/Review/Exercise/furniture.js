function solve() {
  /* &configure event listener@ */
  // select all buttons
  // first button -> table generation
  // second button -> buy furniture

  const table = document.querySelector('table.table tbody');

  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(e) {
    /* & table generation @ */
    // read input JSON and parse it
    // for every array element, create table row

    const data = JSON.parse(input.value);
    for (let item of data) {
      const row = document.createElement('tr');


      const imgCeil = document.createElement('td');
      const nameCeil = document.createElement('td');
      const priceCeil = document.createElement('td');
      const decFactoryCeil = document.createElement('td');
      const checkCeil = document.createElement('td');

      const img = document.createElement('img');
      img.src = item.img;
      imgCeil.appendChild(img);

      const nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCeil.appendChild(nameP);

      const priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCeil.appendChild(priceP);

      const decP = document.createElement('p');
      decP.textContent = item.decFactor;
      decFactoryCeil.appendChild(decP);

      const check = document.createElement('input');
      check.type = 'checkbox';
      checkCeil.appendChild(check);

      row.appendChild(imgCeil);
      row.appendChild(nameCeil);
      row.appendChild(priceCeil);
      row.appendChild(decFactoryCeil);
      row.appendChild(checkCeil);

      table.appendChild(row);
    }
  }


  /* & buy furniture @ */
  function buy() {
    // select all checkboxes
    // filter only check checkboxes
    // repeat for every selected checkboxes
    // -- select parent row
    // -- read item information
    // display output

    const furniture = Array
      .from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(b => b.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decFactor: Number(r.children[3].textContent)
      }))

    const names = [];
    let total = 0;
    let decFactor = 0;

    for (let item of furniture) {
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