function colorize() {
    let tableElements = Array.from(document.querySelectorAll('table tr:nth-child(even)'));
    tableElements.forEach((el) => {
      el.style.backgroundColor = 'teal'; 
    })
}