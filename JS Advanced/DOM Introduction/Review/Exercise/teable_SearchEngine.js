function solve() {
    let text = document.getElementById('searchField').value.toLowerCase();
    let button = document.getElementById('searchBtn').value;

    let tableEl = Array.from(document.querySelectorAll('tbody tr'));
    tableEl.forEach(el => {
        el.className = '';
    });
    let match = '';
    for(row of tableEl) {
        row = Array.from(row.children).forEach((el) => {
            if(text == el) {
              el.style.className = 'select';
            } else {
                text.value = '';
            }
        })
    }

}