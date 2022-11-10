function extractText() {
    let tableElements = document.getElementById('items');
    let inputElement = document.getElementById('result');
    for(element of tableElements) {
        inputElement.value = element.textContent;
    }
}